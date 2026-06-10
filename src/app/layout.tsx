import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import SiteBackground from "@/components/ui/SiteBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rosariotechweek.com'),
  title: {
    template: '%s | Rosario TechWeek 2026',
    default: 'Rosario TechWeek 2026 - Es tiempo de acelerar'
  },
  description: "Rosario TechWeek 2026 — II edición. Cinco días para visibilizar, celebrar y potenciar el ecosistema tecnológico y emprendedor de Rosario. Del 19 al 23 de octubre de 2026, Santa Fe, Argentina.",
  keywords: [
    "Rosario TechWeek",
    "tecnología Rosario",
    "startups Argentina",
    "conferencias tech",
    "innovación Santa Fe",
    "emprendimiento tecnológico",
    "networking tech",
    "ecosistema emprendedor",
    "Rosario Innovation Hub",
  ],
  authors: [{ name: "Rosario Innovation Hub" }],
  creator: "Rosario TechWeek",
  publisher: "Rosario TechWeek",
  formatDetection: { email: false, address: false, telephone: false },
  category: 'technology',
  classification: 'Conference, Technology Event',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rosariotechweek.com',
    languages: { 'es-AR': 'https://rosariotechweek.com' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://rosariotechweek.com',
    title: 'Rosario TechWeek 2026 - Es tiempo de acelerar',
    description: 'II edición. Del 19 al 23 de octubre de 2026, Rosario, Argentina. Cinco días para visibilizar, celebrar y potenciar el ecosistema tecnológico y emprendedor.',
    siteName: 'Rosario TechWeek 2026',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rosario TechWeek 2026 - Es tiempo de acelerar',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rosariotechweek',
    creator: '@rosariotechweek',
    title: 'Rosario TechWeek 2026 - Es tiempo de acelerar',
    description: 'II edición. Del 19 al 23 de octubre de 2026, Rosario, Argentina.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#0a0a0a',
    'color-scheme': 'dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${robotoFlex.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rosario TechWeek 2026" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Rosario TechWeek 2026" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <SiteBackground />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
