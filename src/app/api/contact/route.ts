import { NextResponse } from "next/server";

// Best-effort in-memory per-IP rate limiter.
// NOTE: module-scope state resets on cold start / is per-instance only;
// this is a lightweight guard, not a distributed limiter.
const RATE_LIMIT_MAX = 5; // max requests
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const rateLimitMap = new Map<string, number[]>();

// Minimum time a genuine human takes to fill the form, in milliseconds.
const MIN_FILL_TIME_MS = 2000;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for may be a comma-separated list; the first entry is the client.
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitMap.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  rateLimitMap.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    // 0. Per-IP rate limiting (best-effort, in-memory)
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes and try again, or email us directly at ask@oneggy.com.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, phone, service, budget, message, timeline, location, _honey, _ts } = body;

    // 1. Anti-spam Honeypot Validation
    if (_honey && _honey.trim() !== "") {
      // Return 200 so spambots think it worked, but do not send the email
      return NextResponse.json({
        success: true,
        message: "Message received successfully."
      });
    }

    // 1b. Anti-spam minimum-fill-time check
    // The form sends a "_ts" start timestamp (ms). Submissions faster than a
    // human could plausibly fill the form are treated as spam — silently
    // accepted (200) so bots think it worked, but no email is forwarded.
    const startTs = Number(_ts);
    if (Number.isFinite(startTs) && Date.now() - startTs < MIN_FILL_TIME_MS) {
      return NextResponse.json({
        success: true,
        message: "Message received successfully.",
      });
    }

    // 2. Server-side Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Input Sanitization (strip basic HTML tags to prevent XSS)
    const sanitize = (text: string) => {
      if (!text) return "";
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    };

    const cleanData = {
      name: sanitize(name),
      company: sanitize(company || "N/A"),
      email: sanitize(email),
      phone: sanitize(phone || "N/A"),
      service: sanitize(service || "N/A"),
      budget: sanitize(budget || "N/A"),
      timeline: sanitize(timeline || "N/A"),
      location: sanitize(location || "N/A"),
      message: sanitize(message),
      timestamp: new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " UTC",
    };

    // 4. Forward to free reliable mail delivery system (FormSubmit)
    // We send a POST request to FormSubmit's AJAX endpoint
    const businessEmail = "ask@oneggy.com";
    const formSubmitUrl = `https://formsubmit.co/ajax/${businessEmail}`;

    const response = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        "_subject": `New OnEggy Technologies Lead: ${cleanData.name} (${cleanData.company})`,
        "Name": cleanData.name,
        "Company": cleanData.company,
        "Email": cleanData.email,
        "Phone": cleanData.phone,
        "Interested Service": cleanData.service,
        "Budget Range": cleanData.budget,
        "Timeline": cleanData.timeline,
        "Country/Location": cleanData.location,
        "Project Details": cleanData.message,
        "Submitted At": cleanData.timestamp,
        "_honey": "", // formsubmit honeypot
        "_captcha": "false", // disable captcha on AJAX to prevent broken forms
      }),
    });

    const result = await response.json();

    if (response.ok && result.success === "true") {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully. We will review your project details and get back to you within 24 hours.",
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: result.message || "Failed to forward lead information. Please try again later or email us directly at ask@oneggy.com." 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "An unexpected server error occurred. Please contact us directly at ask@oneggy.com." 
      },
      { status: 500 }
    );
  }
}
