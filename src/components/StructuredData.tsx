export default function StructuredData() {
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Rosario TechWeek 2025",
    "description": "La Rosario TechWeek es el punto de encuentro donde el talento tech de Rosario se visibiliza, conecta y proyecta hacia el futuro. Una semana completa de conferencias, networking y actividades tecnológicas.",
    "startDate": "2025-09-23",
    "endDate": "2025-09-30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Rosario, Santa Fe",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rosario",
        "addressRegion": "Santa Fe",
        "addressCountry": "AR"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Rosario TechWeek Organization",
      "url": "https://rosariotechweek.com",
      "sameAs": [
        "https://twitter.com/RosarioTechWeek",
        "https://linkedin.com/company/rosario-techweek",
        "https://instagram.com/rosariotechweek"
      ]
    },
    "url": "https://rosariotechweek.com",
    "image": [
      "https://rosariotechweek.com/og-image.jpg",
      "https://rosariotechweek.com/og-image-square.jpg"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "ARS",
      "validFrom": "2025-01-01"
    },
    "performer": {
      "@type": "Organization",
      "name": "Speakers y ponentes de la industria tech"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Desarrolladores, emprendedores, estudiantes y profesionales de tecnología"
    },
    "keywords": [
      "tecnología",
      "startups",
      "innovación",
      "desarrollo software",
      "emprendimiento",
      "networking",
      "conferencias tech",
      "Rosario",
      "Argentina"
    ]
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rosario TechWeek",
    "url": "https://rosariotechweek.com",
    "logo": "https://rosariotechweek.com/logo.svg",
    "description": "Organizadores de la Rosario TechWeek, el evento tech más importante de la región.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rosario",
      "addressRegion": "Santa Fe",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://twitter.com/RosarioTechWeek",
      "https://linkedin.com/company/rosario-techweek",
      "https://instagram.com/rosariotechweek"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rosario TechWeek 2025",
    "url": "https://rosariotechweek.com",
    "description": "Sitio web oficial de la Rosario TechWeek 2025",
    "publisher": {
      "@type": "Organization",
      "name": "Rosario TechWeek Organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rosariotechweek.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "es-AR"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://rosariotechweek.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sobre el evento",
        "item": "https://rosariotechweek.com#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Agenda",
        "item": "https://rosariotechweek.com#agenda"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
    </>
  );
}