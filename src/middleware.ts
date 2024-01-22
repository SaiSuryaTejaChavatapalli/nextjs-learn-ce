// import { type NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

// import { type NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   console.log("Normal URL", request.url);
//   console.log("Next URL", request.nextUrl);
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", request.url));
//   }
//   //   return NextResponse.redirect(new URL("/", request.url));
// }

import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
}
