"use client"

import Script from "next/script"

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eduhustawka.pl/#business",
    "name": "EduHustawka - Joanna Świrydowicz",
    "alternateName": "EDU HUSTAWKA",
    "description": "Centrum terapii pedagogicznej i rozwoju dziecka w Pomigaczach k. Białegostoku. Specjalizujemy się w terapii ręki, pedagogicznej, treningu umiejętności społecznych. Obsługujemy teren województwa podlaskiego.",
    "url": "https://eduhustawka.pl",
    "telephone": "+48531509008",
    "email": "kontakt@eduhustawka.pl",
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
    "priceRange": "80-350 PLN",
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
          "price": "120",
          "priceCurrency": "PLN",
          "itemOffered": {
            "@type": "Service",
            "name": "Terapia pedagogiczna",
            "description": "Wsparcie w nauce i rozwoju umiejętności edukacyjnych"
          }
        },
        {
          "@type": "Offer",
          "price": "120",
          "priceCurrency": "PLN",
          "itemOffered": {
            "@type": "Service",
            "name": "Terapia ręki",
            "description": "Rozwój motoryki precyzyjnej i koordynacji wzrokowo-ruchowej"
          }
        },
        {
          "@type": "Offer",
          "price": "80",
          "priceCurrency": "PLN",
          "itemOffered": {
            "@type": "Service",
            "name": "Trening Umiejętności Społecznych (TUS)",
            "description": "Zajęcia grupowe wspierające rozwój umiejętności społecznych"
          }
        },

        {
          "@type": "Offer",
          "price": "350",
          "priceCurrency": "PLN",
          "itemOffered": {
            "@type": "Service",
            "name": "Trening słuchowy Johansen IAS",
            "description": "Indywidualna stymulacja słuchu metodą dr K. Johansena"
          }
        },

        {
          "@type": "Offer",
          "price": "150",
          "priceCurrency": "PLN",
          "itemOffered": {
            "@type": "Service",
            "name": "Czytanie sylabowe z Forbrain",
            "description": "Zajęcia nauki czytania z wykorzystaniem słuchawek Forbrain"
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
    "@id": "https://eduhustawka.pl/#website",
    "url": "https://eduhustawka.pl",
    "name": "EduHustawka - Centrum terapii pedagogicznej",
    "description": "Profesjonalna terapia i edukacja specjalna dla dzieci. Terapia ręki, pedagogiczna, TUS, diagnostyka KORP, treningi słuchowe.",
    "publisher": {
      "@id": "https://eduhustawka.pl/#business"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eduhustawka.pl/search?q={search_term_string}"
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
