import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://endevis.cz"),
  title: {
    default: "ENDEVIS — Intelligent Business Software",
    template: "%s | ENDEVIS",
  },
  description:
    "ENDEVIS develops AI-powered SaaS applications for document processing, workflow automation, and business digitalization.",
  applicationName: "ENDEVIS",
  authors: [{ name: "ENDEVIS Sp. z o.o." }],
  creator: "ENDEVIS Sp. z o.o.",
  publisher: "ENDEVIS Sp. z o.o.",
  openGraph: {
    type: "website",
    siteName: "ENDEVIS",
    title: "ENDEVIS — Intelligent Business Software",
    description:
      "AI-powered software for automation, document management, and digital transformation.",
    url: "https://endevis.cz",
    locale: "en_US",
    alternateLocale: ["cs_CZ", "sk_SK", "pl_PL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENDEVIS — Intelligent Business Software",
    description:
      "AI-powered software for automation, document management, and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
