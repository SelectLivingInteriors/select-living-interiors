export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{dict.aboutTitle}</h2>
          <p className="mt-3 text-neutral-600">{dict.aboutBody}</p>
        </div>
        <div className="aspect-[4/3] rounded-3xl bg-neutral-200 border flex items-center justify-center text-neutral-400">
          Add studio portrait / project collage
        </div>
      </div>
    </section>
  );
}
