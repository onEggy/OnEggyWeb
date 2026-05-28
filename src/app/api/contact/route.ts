import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, budget, message, timeline, location, _honey } = body;

    // 1. Anti-spam Honeypot Validation
    if (_honey && _honey.trim() !== "") {
      // Return 200 so spambots think it worked, but do not send the email
      return NextResponse.json({ 
        success: true, 
        message: "Message received successfully." 
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
  } catch (error: any) {
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
