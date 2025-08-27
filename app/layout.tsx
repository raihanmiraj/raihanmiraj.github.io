import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConditionalLayout from "./components/ConditionalLayout";
import LoadingBar from "./components/LoadingBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raihan Miraj | Full Stack Developer",
  description: "Portfolio, projects and blogs by Raihan Miraj",
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
        <LoadingBar />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
