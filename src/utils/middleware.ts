import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.toLowerCase();

  if (pathname.startsWith("/account")) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      // 沒有 token，重導回登入頁
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"],
};
