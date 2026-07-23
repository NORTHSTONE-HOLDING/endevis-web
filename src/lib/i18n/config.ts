export const locales = ["en", "cs", "sk", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  cs: "Čeština",
  sk: "Slovenčina",
  pl: "Polski",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  cs: "🇨🇿",
  sk: "🇸🇰",
  pl: "🇵🇱",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
