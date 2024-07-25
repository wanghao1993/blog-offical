import type { Metadata } from "next";
import LenisProvider from "@/components/Providers/LenisProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./ui/globals.scss";
import Header from "@/components/Header";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextAuthProvider } from "@/components/Providers/AuthProvider";
import ToTop from "@/components/toTop";
import { content } from "@/lib/font";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "汪浩的博客",
  description: "我的博客，记录一些技术，心得，经历等等",
  viewport: "width=device-width, initial-scale=1",
  keywords:
    "博客，汪浩，Isaac Wang, Javascript, Vue, Css, Nextjs, Nodejs, Docker, web3，区块链",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={content.className}>
        <AntdRegistry>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <NextAuthProvider>
              <Header />
              <LenisProvider>
                <main className="min-h-[calc(100vh-110px)] ">{children}</main>
                <ToTop />
              </LenisProvider>
              <Footer />
            </NextAuthProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
