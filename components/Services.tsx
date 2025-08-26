export default function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{dict.servicesTitle}</h2>
        <p className="mt-3 max-w-2xl text-neutral-600">{dict.servicesBody}</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{t: dict.s1Title, b: dict.s1Body},{t: dict.s2Title,b: dict.s2Body},{t: dict.s3Title,b: dict.s3Body}].map((s) => (
            <div key={s.t} className="rounded-2xl shadow-sm border bg-white p-6">
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
