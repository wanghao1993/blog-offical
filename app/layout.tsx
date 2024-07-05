import type { Metadata } from "next";
import LenisProvider from "@/components/Providers/LenisProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./ui/globals.scss";
import Header from "@/components/Header";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextAuthProvider } from "@/components/Providers/AuthProvider";
import ToTop from "@/components/toTop";
import { content } from "@/lib/font";

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
      <body className={content.className}>
        <NextAuthProvider>
          <AntdRegistry>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <Header />
              <LenisProvider>
                <main className="h-full">{children}</main>
                <footer>版权所有</footer>
                <ToTop />
              </LenisProvider>
            </ThemeProvider>
          </AntdRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
