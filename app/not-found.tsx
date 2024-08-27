import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-full bg-primary p-4">
          <div className="text-6xl font-bold text-primary-foreground">404</div>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, 页面未找到
        </h1>
        <p className="mt-4 text-muted-foreground">
          您访问的页面可能已被移动或删除,请检查您的网址或返回首页。
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="horizontal-underline horizontal-underline-active "
            prefetch={false}
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
