import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(req: NextRequest) {
  const session = getSessionCookie(req);
  const { pathname } = req.nextUrl;

  const isProtected =
    pathname.startsWith("/product/") || pathname.startsWith("/my-profile");

  if (isProtected && !session) {
    const url = new URL("/signin", req.url);
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if ((pathname === "/signin" || pathname === "/signup") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*", "/my-profile/:path*", "/signin", "/signup"],
};