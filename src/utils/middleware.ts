// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.toLowerCase();

  // 只攔截 /account 開頭的頁面
  if (pathname.startsWith("/account")) {
    // 取得 cookie 中的 token（如果有）
    const token = req.cookies.get("token")?.value;

    // 如果沒有 token，直接重導
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // 用 fetch 呼叫後端驗證 API
    const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users/isAuth`, {
      method: "POST",
      headers: {
        Cookie: `token=${token}`, // 傳 token 給後端驗證
      },
    });
    console.log("middleware hit", pathname);
    if (!verifyRes.ok) {
      // Token 異常
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// 指定那些要執行 middleware
export const config = {
  matcher: ["/account/:path*"],
};
