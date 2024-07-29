import type { Metadata } from "next";
import LenisProvider from "@/components/Providers/LenisProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./ui/globals.scss";
import Header from "@/components/Header";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextAuthProvider } from "@/components/Providers/AuthProvider";
import { content } from "@/lib/font";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
export const metadata: Metadata = {
  title: "汪浩的博客",
  description: "我的博客，记录一些技术，心得，经历等等",
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
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <Head>
        <title>valcosmos</title>
        <link rel="shortcut icon" href="webicon.ico" />
        <meta name="description" content="description" />

        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, TypeScript, Vue, React, 前端, 个人博客"
        />

        <meta name="author" content="author" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta name="theme-color" content="#6768ab" />

        <link rel="manifest" href="/manifest.json" />

        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />

        <link rel="apple-touch-icon" href="/webicon.ico"></link>
      </Head>

      <body className={content.className}>
        <AntdRegistry>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <NextAuthProvider>
              <Header />
              <LenisProvider>
                <main className="min-h-[calc(100vh-110px)] ">{children}</main>
              </LenisProvider>
              <Footer />
            </NextAuthProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
