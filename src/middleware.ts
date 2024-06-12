import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const redirectUrl = "https://reparin.xyz";

  return NextResponse.redirect(new URL(redirectUrl));
}

export const config = {
  matcher: "/",
};
