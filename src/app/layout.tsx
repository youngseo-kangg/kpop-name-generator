import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "kpop name generator",
    description:
      "Generate your K-pop idol name based on your real name! Discover what kind of K-pop idol you would be.",
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
        {children}
      </body>
    </html>
  );
}
