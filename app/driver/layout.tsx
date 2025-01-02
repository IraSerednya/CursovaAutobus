import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import HeaderDriver from "@/components/shared/driver/headerDriver";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <header className="">
        <HeaderDriver />
        {children}
        </header>
  );
}
