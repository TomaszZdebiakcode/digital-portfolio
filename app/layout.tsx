import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomaszzdebiak.dev"),
  title: "Tomasz Zdebiak — Product Engineer",
  description:
    "Tomasz Zdebiak is a product engineer turning real-world problems into useful digital products.",
  openGraph: {
    title: "Tomasz Zdebiak — Product Engineer",
    description:
      "Tomasz Zdebiak is a product engineer turning real-world problems into useful digital products.",
    url: "https://tomaszzdebiak.dev/",
    siteName: "Tomasz Zdebiak",
    images: [
      {
        url: "/images/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Tomasz Zdebiak — Product Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomasz Zdebiak — Product Engineer",
    description:
      "Tomasz Zdebiak is a product engineer turning real-world problems into useful digital products.",
    images: ["/images/portfolio-home.webp"],
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
      className={`${unbounded.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
