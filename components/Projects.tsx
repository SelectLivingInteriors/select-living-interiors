export default function Projects({ dict }: { dict: any }) {
  const tiles = [
    { title: "Lake Zurich apartment — Renovation & Interior Design", tag: "Switzerland" },
    { title: "Attic apartment — New build advisory & design", tag: "Horgen" },
    { title: "Villa — Renovation & furnishing", tag: "Rueschlikon" },
    { title: "Maisonette — Interior styling & decoration", tag: "Zuerich Seefeld" },
    { title: "Show flat — Interior & styling", tag: "Adliswil" },
    { title: "Holiday apartment — Renovation & furnishing", tag: "Arosa" }
  ];
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{dict.projectsTitle}</h2>
        <p className="mt-3 max-w-2xl text-neutral-600">{dict.projectsBody}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((p) => (
            <div key={p.title} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border bg-neutral-100">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">Drop project photo</div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-sm opacity-90">{p.tag}</div>
                <div className="font-medium leading-tight">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
