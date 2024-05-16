import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/Providers/LenisProvider";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "汪浩的博客",
  description: "我的博客，记录一些技术，心得，经历等等",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={inter.className}>{children}</body>
      </LenisProvider>
    </html>
  );
}
