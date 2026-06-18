import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollProvider } from "@/components/providers/scroll-provider";
import { CustomCursor } from "@/components/common/custom-cursor";
import { SplashScreen } from "@/components/common/splash-screen";
import { PageTransition } from "@/components/animations/page-transition";
import { MotionConfig } from "framer-motion";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <ScrollProvider>
              <CustomCursor />
              <SplashScreen />
              <Navbar />
              <main className="flex-grow pt-24 pb-16">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </ScrollProvider>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
