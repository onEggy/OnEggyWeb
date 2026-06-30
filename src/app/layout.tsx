import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Fraunces } from "next/font/google";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ScrollProvider } from "@/components/providers/scroll-provider";
import { PageTransition } from "@/components/animations/page-transition";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "OnEggy Technologies | Cloud-Native Engineering & DevOps Consulting",
    template: "%s | OnEggy Technologies",
  },
  description: "Modern cloud-native engineering partner specializing in AWS Cloud, Kubernetes infrastructure orchestration, DevOps automation, and high-performance digital apps.",
  metadataBase: new URL("https://www.oneggy.com"),
  keywords: [
    "AWS Cloud Services",
    "DevOps Consulting",
    "Kubernetes Infrastructure",
    "Platform Engineering",
    "Cloud Automation",
    "Infrastructure as Code",
    "Terraform Experts",
    "OnEggy Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OnEggy Technologies | Cloud-Native Engineering & DevOps Consulting",
    description: "Modern cloud-native engineering partner specializing in AWS Cloud, Kubernetes infrastructure orchestration, DevOps automation, and high-performance digital apps.",
    url: "https://www.oneggy.com",
    siteName: "OnEggy Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnEggy Technologies | Cloud-Native & DevOps Consulting",
    description: "Modern cloud-native engineering partner specializing in AWS Cloud, Kubernetes infrastructure orchestration, DevOps automation, and high-performance digital apps.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B8E92",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <ScrollProvider>
            <Navbar />
            <main id="main" className="flex-grow pt-20 sm:pt-24 pb-16">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </ScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
