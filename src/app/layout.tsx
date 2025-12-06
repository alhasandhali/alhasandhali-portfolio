import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: {
    default: "Al Hasan Dhali | Full-Stack Developer",
    template: "%s | Al Hasan Dhali"
  },
  description: "Portfolio of Al Hasan Dhali - A Full-Stack Developer specializing in React, Next.js, and the MERN stack. Building scalable and modern web applications.",
  keywords: ["Al Hasan Dhali", "Full-Stack Developer", "Web Developer", "React Developer", "Next.js", "MERN Stack", "Portfolio", "Software Engineer"],
  authors: [{ name: "Al Hasan Dhali" }],
  creator: "Al Hasan Dhali",
  publisher: "Al Hasan Dhali",
  metadataBase: new URL("https://alhasandhali.com"), // Replace with actual domain if known, or keep placeholder
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alhasandhali.com",
    title: "Al Hasan Dhali | Full-Stack Developer",
    description: "Building scalable and modern web applications with cutting-edge technologies.",
    siteName: "Al Hasan Dhali Portfolio",
    images: [
      {
        url: "/hero-profile-final.jpg", // Using hero image as fallback
        width: 1200,
        height: 630,
        alt: "Al Hasan Dhali - Full-Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Hasan Dhali | Full-Stack Developer",
    description: "Building scalable and modern web applications.",
    images: ["/hero-profile-final.jpg"],
    creator: "@Alhasandhali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            <BackgroundBeams className="-z-50 fixed" />
            <div className="relative z-10">
              {children}
            </div>
          </SmoothScroll>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}