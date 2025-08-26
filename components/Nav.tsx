import Link from "next/link";

export default function Nav({ locale }: { locale: "en" | "de" }) {
  const labels = locale === "de"
    ? { services: "Leistungen", projects: "Projekte", about: "Ueber uns", contact: "Kontakt" }
    : { services: "Services", projects: "Projects", about: "About", contact: "Contact" };
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex h-16 items-center justify-between gap-3">
        <Link href={`/${locale}`} className="font-semibold tracking-tight">Select Living Interiors</Link>
        <nav className="flex items-center gap-8 text-base md:text-lg">
          <Link href={`/${locale}#services`} className="hover:opacity-70">{labels.services}</Link>
          <Link href={`/${locale}#projects`} className="hover:opacity-70">{labels.projects}</Link>
          <Link href={`/${locale}#about`} className="hover:opacity-70">{labels.about}</Link>
          <Link href={`/${locale}#contact`} className="hover:opacity-70">{labels.contact}</Link>
        </nav>
      </div>
    </header>
  );
}
