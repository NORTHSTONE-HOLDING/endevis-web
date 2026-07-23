import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";

const dictionaries = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  cs: () => import("./dictionaries/cs").then((m) => m.default),
  sk: () => import("./dictionaries/sk").then((m) => m.default),
  pl: () => import("./dictionaries/pl").then((m) => m.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
