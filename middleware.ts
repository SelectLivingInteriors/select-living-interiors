import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api") || pathname.startsWith("/_next")) return;

  const hasLocale = /^\/(en|de)(\/.*)?$/.test(pathname);
  if (hasLocale) return;

  // Cookie first
  const cookieLang = req.cookies.get("sli_lang")?.value;
  if (cookieLang === "en" || cookieLang === "de") {
    const url = req.nextUrl.clone();
    url.pathname = `/${cookieLang}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Fallback to Accept-Language
  const header = (req.headers.get("accept-language") || "").toLowerCase();
  const isGerman = header.startsWith("de") || header.includes(" de-");
  const lang = isGerman ? "de" : "en";

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|api|.*\..*).*)"] };
