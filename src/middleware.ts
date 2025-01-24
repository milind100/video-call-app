import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (request.nextUrl.pathname === "/signin" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && request.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/signin"], // Apply middleware to all routes
};
