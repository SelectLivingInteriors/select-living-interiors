import "../globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { languages } from "@/i18n/settings";
import type { ReactNode } from "react";

export function generateStaticParams() { return languages.map(l => ({ locale: l })); }

export async function generateMetadata({ params: { locale } }: { params: { locale: "en"|"de" } }): Promise<Metadata> {
  const description = locale === "de"
    ? "Ruhige, zeitlose Wohnraeume – von der Idee bis zur Umsetzung."
    : "Calm, timeless homes – from concept to completion.";
  return {
    title: "Select Living Interiors",
    description,
    alternates: { languages: { en: "/en", de: "/de" } },
    openGraph: { title: "Select Living Interiors", description, url: `https://www.selectlivinginteriors.com/${locale}`, images: ["/og.jpg"], type: "website", siteName: "Select Living Interiors" },
    twitter: { card: "summary_large_image", title: "Select Living Interiors", description, images: ["/og.jpg"] }
  };
}

export default function RootLayout({ children, params: { locale } }:{ children: ReactNode; params: { locale: "en"|"de" } }) {
  return (
    <html lang={locale}>
      <body>
        <Nav locale={locale} />
        {children}
      </body>
    </html>
  );
}
