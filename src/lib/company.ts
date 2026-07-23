/**
 * Company registration details.
 * Update these placeholders with official registry numbers when available.
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
  /** Edit these placeholders with official registry values */
  registration: {
    nip: "XXXXXXXXXX",
    krs: "0000000000",
    regon: "000000000",
    vatEu: "CZXXXXXXXXXX",
    registeredOffice: "Školská 44, 250 69 Vodochody, Czech Republic",
  },
  social: {
    linkedin: "https://linkedin.com/company/endevis",
    github: "https://github.com/endevis",
    email: "mailto:info@endevis.cz",
  },
} as const;

export const products = [
  {
    id: "paperflow",
    name: "PaperFlow",
    accent: "from-amber-400/20 to-yellow-600/10",
    icon: "FileText",
  },
  {
    id: "eventflow",
    name: "EventFlow",
    accent: "from-stone-400/20 to-amber-500/10",
    icon: "Calendar",
  },
  {
    id: "feedflow",
    name: "FeedFlow",
    accent: "from-yellow-500/20 to-stone-500/10",
    icon: "Rss",
  },
] as const;
