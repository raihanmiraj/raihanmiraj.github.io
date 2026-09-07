import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import ConditionalLayout from "./components/ConditionalLayout";
import { profile } from "@/data/profile";
import "./globals.css";
import "./v3.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: "Raihan Miraj — AI SaaS Product Engineer", template: "%s — Raihan Miraj" },
  description: "Full Stack Developer building AI-powered SaaS products, multi-tenant systems, payments, APIs, and polished product experiences.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Raihan Miraj", locale: "en_US" },
  twitter: { card: "summary_large_image", creator: "@RaihanMiraj" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#d6ff70" height={3} showSpinner={false} crawlSpeed={200} />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
