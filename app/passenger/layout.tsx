import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/header";
import HeaderPassenger from "@/components/shared/passenger/headerPassenger";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <header className="">
        <HeaderPassenger />
        {children}
        </header>
  );
}
