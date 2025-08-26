export default function Contact({ dict }: { dict: any }) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{dict.contactTitle}</h2>
          <p className="mt-3 text-neutral-600">{dict.contactBody}</p>
          <form className="mt-8 grid grid-cols-1 gap-4 max-w-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder={dict.formFirst} className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
              <input required placeholder={dict.formLast} className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
            </div>
            <input type="email" required placeholder={dict.formEmail} className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
            <input placeholder={dict.formPhone} className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
            <textarea rows={5} required placeholder={dict.formMessage} className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
            <button type="submit" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium w-max">{dict.formSend}</button>
          </form>
        </div>
        <div className="rounded-2xl border p-6 sm:p-8 bg-white">
          <div className="text-sm uppercase tracking-wide text-neutral-500">Studio</div>
          <div className="mt-1 font-medium">Select Living Interiors GmbH</div>
          <div className="mt-3 text-sm text-neutral-700 space-y-1">
            <p>Seestrasse 97<br/>8800 Thalwil<br/>Switzerland</p>
            <p><a href="mailto:info@selectlivinginteriors.com" className="underline">info@selectlivinginteriors.com</a><br/>+41 79 641 09 74</p>
          </div>
          <div className="mt-6 aspect-[4/3] w-full rounded-xl bg-neutral-200 border flex items-center justify-center text-neutral-400">Map placeholder</div>
        </div>
      </div>
    </section>
  );
}
