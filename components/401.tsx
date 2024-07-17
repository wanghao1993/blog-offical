import Link from "next/link";

export default function PageNoAuth() {
  return (
    <div className="flex h-[80dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          您没有访问权限
        </h1>

        <div className="mt-6">
          <Link
            href="/"
            className="horizontal-underline horizontal-underline-active"
            prefetch={false}
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
