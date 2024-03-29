import { type NextRequest } from "next/server";

// export function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));

//   const cookie = request.cookies.get("theme");
//   console.log("Cookie", cookie);
//   return new Response("<h1>Dashboard/profile - route</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//       "Set-Cookie": "theme=dark",
//     },
//   });
// }

import { headers, cookies } from "next/headers";
export function GET() {
  const reqHeaders = headers();
  cookies().set("resultsPerPage", "20");
  console.log(
    "Cookies from cookies function next:",
    cookies().get("resultsPerPage")
  );
  console.log("From next headers function:", reqHeaders.get("Authorization"));
  return new Response("Dashboard/profile - route");
}
