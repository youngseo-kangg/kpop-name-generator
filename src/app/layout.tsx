import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

// components
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url = process.env.NEXT_PUBLIC_API_URL || "";
export const metadata: Metadata = {
  title: "kpop name generator",
  description:
    "Generate your K-pop idol name based on your real name! Discover what kind of K-pop idol you would be.",
  keywords: [
    "kpop",
    "name generator",
    "korean name",
    "kpop idol",
    "name meaning",
  ],
  metadataBase: new URL(url),
  authors: [{ name: "Youngseo Kang" }],
  creator: "Youngseo Kang",
  publisher: "Youngseo Kang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "kpop name generator",
    description:
      "Generate your K-pop idol name based on your real name! Discover what kind of K-pop idol you would be.",
    type: "website",
    locale: "en_US",
    siteName: "kpop name generator",
    images: [
      {
        url: `/og_image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kpop name generator",
    description:
      "Generate your K-pop idol name based on your real name! Discover what kind of K-pop idol you would be.",
    images: [
      {
        url: `/og_image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[54px_1fr_78px] items-center justify-items-center min-h-screen p-8 pb-12 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-3xl sm:text-4xl font-bold text-center pt-4">
            kpop name generator
          </h1>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
