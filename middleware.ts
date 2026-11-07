import { NextResponse, type NextRequest } from "next/server"
import { pickLang } from "@/app/seo"

// "/" is the English page and "/es" the Spanish one, so crawlers can index both.
// Visitors to "/" whose saved choice or browser prefers Spanish are sent to "/es".
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  if (url.pathname === "/es") {
    url.pathname = "/"
    const headers = new Headers(req.headers)
    headers.set("x-lang", "es")
    return NextResponse.rewrite(url, { request: { headers } })
  }
  if (pickLang(req.cookies.get("lang")?.value, req.headers.get("accept-language")) === "es") {
    url.pathname = "/es"
    return NextResponse.redirect(url)
  }
  // Only the middleware may set x-lang; drop one sent by the client.
  const headers = new Headers(req.headers)
  headers.delete("x-lang")
  return NextResponse.next({ request: { headers } })
}

export const config = { matcher: ["/", "/es"] }
