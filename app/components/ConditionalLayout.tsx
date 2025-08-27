"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard") || pathname?.startsWith("/login");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
    </>
  );
}