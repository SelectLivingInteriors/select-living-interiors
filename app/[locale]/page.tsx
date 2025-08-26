import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { getDictionary } from "@/i18n/get-dictionary";

export default function Home({ params: { locale } }:{ params: { locale: "en"|"de" } }) {
  const dict = getDictionary(locale);
  return (
    <main>
      <Hero dict={dict} />
      <Services dict={dict} />
      <Projects dict={dict} />
      <About dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
