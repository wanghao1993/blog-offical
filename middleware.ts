import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse) {
  const path = request.nextUrl.pathname;
  console.log(request.cookies, "path");
  // const res = await getServerSession();
  // // const res = getServerAuthSession(request, response);
  // console.log(res, "res");
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
