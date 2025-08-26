import "server-only";
const dictionaries = {
  en: () => import("./dictionaries/en.json").then(m => m.default),
  de: () => import("./dictionaries/de.json").then(m => m.default),
};
export async function getDictionary(locale: "en" | "de") {
  return (dictionaries[locale] ?? dictionaries.en)();
}
