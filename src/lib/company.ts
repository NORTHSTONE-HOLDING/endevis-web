/**
 * Company registration details.
 * Update VAT EU placeholder with the official number when available.
 */
export const company = {
  name: "ENDEVIS Sp. z o.o.",
  shortName: "ENDEVIS",
  initials: "E",
  tagline: "Intelligent Business Software",
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

export const products = [
  {
    id: "paperflow",
    name: "PaperFlow",
    href: "https://paperflow.cz",
    icon: "FileText",
  },
  {
    id: "eventflow",
    name: "EventFlow",
    href: "https://eventflow.cz",
    icon: "Calendar",
  },
  {
    id: "feedflow",
    name: "FeedFlow",
    href: "https://feedflow.cz",
    icon: "Rss",
  },
] as const;
