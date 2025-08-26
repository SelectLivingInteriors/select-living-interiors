import Image from "next/image";
import Link from "next/link";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[560px] w-full">
        <Image src="/hero.jpg" alt="Select Living Interiors" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight drop-shadow">
              {dict.heroTitle}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow">{dict.heroBody}</p>
            <Link href="#contact" className="inline-flex mt-8 rounded-full px-6 py-3 text-sm font-medium" style={{ background: "#b5ada2", color: "#000" }}>
              {dict.freeConsultation}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
