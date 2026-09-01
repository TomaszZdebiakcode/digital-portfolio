import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomaszzdebiak.dev"),

  description:
    "Product Engineer building products, websites and software experiences.",

  openGraph: {
    title: "Tomasz Zdebiak | Product Engineer",
    description:
      "Product Engineer building products, websites and software experiences.",
    url: "https://tomaszzdebiak.dev/",
    siteName: "Tomasz Zdebiak",
    images: [
      {
        url: "/images/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Tomasz Zdebiak | Product Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tomasz Zdebiak | Product Engineer",
    description:
      "Product Engineer building products, websites and software experiences.",
    images: ["/images/portfolio-home.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}