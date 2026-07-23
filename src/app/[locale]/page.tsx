import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Technology } from "@/components/sections/Technology";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Ecosystem dict={dict} />
      <Products dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <Technology dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
