"use client"

import Script from "next/script"

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eduhusdawka.pl/#business",
    "name": "EduHustawka - Joanna Świrydowicz",
    "alternateName": "EDU HUSTAWKA",
    "description": "Centrum terapii pedagogicznej i rozwoju dziecka. Specjalizujemy się w terapii ręki, pedagogicznej, treningu umiejętności społecznych oraz diagnostyce KORP.",
    "url": "https://eduhusdawka.pl",
    "telephone": "+48531509008",
    "email": "j.swirydowicz.eduhustawka2024@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Polna 17",
      "addressLocality": "Pomigacze",
      "postalCode": "18-106",
      "addressCountry": "PL",
      "addressRegion": "Podlaskie"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.1167,
      "longitude": 23.0667
    },
    "openingHours": [
      "Mo-Fr 09:00-17:00",
      "Sa 09:00-13:00"
    ],
    "priceRange": "120-470 PLN",
    "paymentAccepted": "Cash, Bank Transfer",
    "currenciesAccepted": "PLN",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.1167,
        "longitude": 23.0667
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Podlaskie, Mazowieckie"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi terapeutyczne",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terapia pedagogiczna",
            "description": "Wsparcie w nauce i rozwoju umiejętności edukacyjnych"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terapia ręki",
            "description": "Rozwój motoryki precyzyjnej i koordynacji wzrokowo-ruchowej"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trening Umiejętności Społecznych (TUS)",
            "description": "Zajęcia grupowe wspierające rozwój umiejętności społecznych"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Karty Oceny Rozwoju Psychoruchowego (KORP)",
            "description": "Diagnostyka rozwoju psychoruchowego dzieci od 1 miesiąca do 9 lat"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trening słuchowy Johansen IAS",
            "description": "Indywidualna stymulacja słuchu metodą dr K. Johansena"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aktywny Trening Słuchowy Neuroflow",
            "description": "Nowoczesny trening słuchowy wspierający rozwój słuchu i koncentracji"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Joanna Świrydowicz",
      "jobTitle": "Pedagog specjalny, terapeuta",
      "description": "Specjalista z 15+ letnim doświadczeniem w terapii pedagogicznej i rozwoju dzieci"
    },
    "sameAs": [
      "https://www.facebook.com/eduhustawka",
      "https://www.instagram.com/eduhustawka"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://eduhusdawka.pl/#website",
    "url": "https://eduhusdawka.pl",
    "name": "EduHustawka - Centrum terapii pedagogicznej",
    "description": "Profesjonalna terapia i edukacja specjalna dla dzieci. Terapia ręki, pedagogiczna, TUS, diagnostyka KORP, treningi słuchowe.",
    "publisher": {
      "@id": "https://eduhusdawka.pl/#business"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eduhusdawka.pl/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "pl-PL"
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
