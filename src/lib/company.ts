/**
 * Company registration details.
 * Update VAT EU placeholder with the official number when available.
 *
 * ENDEVIS is the company and software publisher — not a product.
 * Application catalog lives in `./ecosystem`.
 */
export const company = {
  name: "ENDEVIS Sp. z o.o.",
  shortName: "ENDEVIS",
  initials: "E",
  tagline: "Intelligent Business Software",
  role: "AI Software Company · Software Publisher",
  website: "https://endevis.cz",
  email: "info@endevis.cz",
  phone: "+420 720 833 082",
  phoneHref: "tel:+420720833082",
  managingDirector: "Lukáš Novák",
  address: {
    street: "Školská 44",
    city: "Vodochody",
    postalCode: "250 69",
    country: "Czech Republic",
    countryCode: "CZ",
  },
  registration: {
    nip: "5833204373",
    krs: "0000619235",
    regon: "364494052",
    /** Edit this placeholder with the official VAT EU number */
    vatEu: "PLXXXXXXXXXX",
    registeredOffice: "Poland",
    registeredOfficeFlag: "🇵🇱",
  },
  social: {
    linkedin: "https://linkedin.com/company/endevis",
    github: "https://github.com/endevis",
    email: "mailto:info@endevis.cz",
  },
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=14.38%2C50.26%2C14.48%2C50.32&layer=mapnik&marker=50.29%2C14.43",
} as const;

/** @deprecated Prefer importing from `@/lib/ecosystem` */
export { products } from "./ecosystem";
