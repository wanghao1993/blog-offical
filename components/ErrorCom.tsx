"use client";
import Link from "next/link";
import React from "react";

export default function ErrorCom() {
  return (
    <div className="flex min-h-[80dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops!
        </h1>
        <p className="mt-4 text-muted-foreground">似乎出现什么未知的错误.</p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center text-white rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            回到主页
          </Link>
        </div>
      </div>
    </div>
  );
}
