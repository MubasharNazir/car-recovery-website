import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";
import ConditionalWhatsAppButton from "@/components/ConditionalWhatsAppButton";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uaecarservices.ae"),
  title: {
    default: "Car Recovery Services Abu Dhabi UAE | 24/7 Towing & Roadside Assistance",
    template: "%s | UAE Car Services Abu Dhabi",
  },
  description: "Professional car recovery, towing, and roadside assistance services in Abu Dhabi, UAE. Available 24/7 for vehicle towing, battery jump-start, flat tire service, sand recovery, fuel delivery, and lockout service. Fast response 15-30 minutes. Call +971 557540296.",
  keywords: [
    "car recovery Abu Dhabi",
    "towing service Abu Dhabi",
    "roadside assistance UAE",
    "car towing Abu Dhabi",
    "vehicle recovery Abu Dhabi",
    "24/7 towing service Abu Dhabi",
    "battery jump start Abu Dhabi",
    "flat tire service Abu Dhabi",
    "sand recovery UAE",
    "fuel delivery Abu Dhabi",
    "lockout service Abu Dhabi",
    "car breakdown service Abu Dhabi",
    "emergency towing Abu Dhabi",
    "vehicle towing UAE",
    "car recovery service Abu Dhabi",
    "towing company Abu Dhabi",
    "roadside assistance Abu Dhabi",
    "car recovery near me Abu Dhabi",
    "towing service near me Abu Dhabi",
    "car recovery Al Ain",
    "towing service Al Dhafra",
    "car recovery Yas Island",
    "roadside assistance Saadiyat Island",
    "car recovery Khalifa City",
    "towing service Mohammed Bin Zayed City",
    "best car recovery Abu Dhabi",
    "top towing service UAE",
    "professional car recovery Abu Dhabi",
    "reliable towing service Abu Dhabi",
    "fast car recovery Abu Dhabi",
  ],
  authors: [{ name: "UAE Car Services", url: "https://uaecarservices.ae" }],
  creator: "UAE Car Services",
  publisher: "UAE Car Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "Car Recovery Services Abu Dhabi UAE | 24/7 Towing & Roadside Assistance",
    description: "Professional car recovery, towing, and roadside assistance services in Abu Dhabi, UAE. Available 24/7 for vehicle towing, battery jump-start, flat tire service, sand recovery, fuel delivery, and lockout service. Fast response 15-30 minutes.",
    url: "https://uaecarservices.ae",
    siteName: "UAE Car Services",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://uaecarservices.ae/images/back.png",
        width: 1200,
        height: 630,
        alt: "Car Recovery Services Abu Dhabi UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Recovery Services Abu Dhabi UAE | 24/7 Towing & Roadside Assistance",
    description: "Professional car recovery, towing, and roadside assistance services in Abu Dhabi, UAE. Available 24/7.",
    images: ["https://uaecarservices.ae/images/back.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://uaecarservices.ae",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
  category: "Automotive Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://uaecarservices.ae/#organization",
              "name": "UAE Car Services",
              "alternateName": "Car Recovery Services Abu Dhabi",
              "image": "https://uaecarservices.ae/images/back.png",
              "logo": "https://uaecarservices.ae/images/back.png",
              "url": "https://uaecarservices.ae",
              "telephone": "+971557540296",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Abu Dhabi",
                "addressLocality": "Abu Dhabi",
                "addressRegion": "Abu Dhabi",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.4539,
                "longitude": 54.3773
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Abu Dhabi"
                },
                {
                  "@type": "City",
                  "name": "Al Ain"
                },
                {
                  "@type": "City",
                  "name": "Al Dhafra"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Recovery Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vehicle Towing",
                      "description": "Professional vehicle towing services for all vehicle types"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Battery Services",
                      "description": "Battery jump-start and replacement services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Flat Tire Service",
                      "description": "Quick tire change and repair services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sand Recovery",
                      "description": "Professional sand and desert recovery services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fuel Delivery",
                      "description": "Emergency fuel delivery service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lockout Service",
                      "description": "Vehicle lockout assistance"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "description": "Professional car recovery, towing, and roadside assistance services in Abu Dhabi, UAE. Available 24/7 with fast 15-30 minute response times."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://uaecarservices.ae/#website",
              "url": "https://uaecarservices.ae",
              "name": "UAE Car Services",
              "description": "Car Recovery Services Abu Dhabi UAE",
              "publisher": {
                "@id": "https://uaecarservices.ae/#organization"
              }
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} font-sans`}>
        <ConditionalHeader />
        <main className="min-h-screen">{children}</main>
        <ConditionalFooter />
        <ConditionalWhatsAppButton />
      </body>
    </html>
  );
}
