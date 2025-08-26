import en from "./dictionaries/en";
import de from "./dictionaries/de";
export type Locale = "en" | "de";
export function getDictionary(locale: Locale) {
  return locale === "de" ? de : en;
}
