import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // console.log(request.cookie, "path");
  // if (path === '/'){
  //     return NextResponse.rewrite(
  //         new URL("/home", request.url)
  //     );
  // }
  //   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
};
