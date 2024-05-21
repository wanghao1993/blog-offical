import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/Providers/LenisProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./ui/globals.css";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeToggle";
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <LenisProvider>
            <ThemeSwitch />
            <main>{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
