import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as parser from "accept-language-parser";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api") || pathname.startsWith("/_next")) return;

  const hasLocale = /^\/(en|de)(\/.*)?$/.test(pathname);
  if (hasLocale) return;

  const cookieLang = req.cookies.get("sli_lang")?.value;
  let lang: "en"|"de" = cookieLang === "de" ? "de" : cookieLang === "en" ? "en" : "en";
  if (!cookieLang) {
    try {
      const langs = parser.parse(req.headers.get("accept-language") || "");
      lang = (langs.find(l => l.code === "de") ? "de" : "en");
    } catch {}
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\..*).*)"],
};
