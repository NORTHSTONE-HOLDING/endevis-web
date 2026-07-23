import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LocaleHtmlLang } from "@/components/providers/LocaleHtmlLang";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { company } from "@/lib/company";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  const languages = Object.fromEntries(
    locales.map((item) => [item, `https://endevis.cz/${item}`]),
  );

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(", "),
    alternates: {
      canonical: `https://endevis.cz/${locale}`,
      languages: {
        ...languages,
        "x-default": "https://endevis.cz/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://endevis.cz/${locale}`,
      locale,
      type: "website",
      siteName: company.shortName,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.website,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: company.address.countryCode,
    },
    founder: {
      "@type": "Person",
      name: company.managingDirector,
    },
    sameAs: [company.social.linkedin, company.social.github],
  };

  return (
    <ThemeProvider>
      <LocaleHtmlLang locale={locale} />
      <div className="relative flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-anthracite"
        >
          Skip to content
        </a>
        <MouseGlow />
        <Navbar locale={locale} dict={dict} />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </ThemeProvider>
  );
}
