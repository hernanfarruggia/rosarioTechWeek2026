import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://rosariotechweek.com'),
  title: {
    template: '%s | Rosario TechWeek 2025',
    default: 'Rosario TechWeek 2025 - Tecnología que transforma, comunidad que crea'
  },
  description: "La Rosario TechWeek es el punto de encuentro donde el talento tech de Rosario se visibiliza, conecta y proyecta hacia el futuro. Del 23 al 30 de septiembre 2025. Conferencias, networking, startups y tecnología en Santa Fe, Argentina.",
  keywords: [
    "Rosario TechWeek",
    "tecnología Rosario",
    "startups Argentina",
    "conferencias tech",
    "innovación Santa Fe",
    "emprendimiento tecnológico",
    "networking tech",
    "desarrollo software",
    "inteligencia artificial",
    "blockchain",
    "fintech Argentina"
  ],
  authors: [{ name: "Rosario TechWeek Organization" }],
  creator: "Rosario TechWeek",
  publisher: "Rosario TechWeek",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    languages: {
      'es-AR': 'https://rosariotechweek.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://rosariotechweek.com',
    title: 'Rosario TechWeek 2025 - Tecnología que transforma, comunidad que crea',
    description: 'La Rosario TechWeek es el punto de encuentro donde el talento tech de Rosario se visibiliza, conecta y proyecta hacia el futuro. Del 23 al 30 de septiembre 2025.',
    siteName: 'Rosario TechWeek 2025',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rosario TechWeek 2025 - Tecnología que transforma, comunidad que crea',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Rosario TechWeek 2025',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RosarioTechWeek',
    creator: '@RosarioTechWeek',
    title: 'Rosario TechWeek 2025 - Tecnología que transforma, comunidad que crea',
    description: 'La Rosario TechWeek es el punto de encuentro donde el talento tech de Rosario se visibiliza, conecta y proyecta hacia el futuro. Del 23 al 30 de septiembre 2025.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'google-verification-code', // Reemplazar con código real
    yandex: 'yandex-verification-code', // Reemplazar con código real
    yahoo: 'yahoo-verification-code', // Reemplazar con código real
  },
  other: {
    'theme-color': '#667eea',
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#667eea',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rosario TechWeek 2025" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Rosario TechWeek 2025" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#667eea" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
