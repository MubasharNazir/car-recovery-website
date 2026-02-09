import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Car Recovery Services Abu Dhabi",
  description: "Find answers to common questions about car recovery, towing, roadside assistance, and our services in Abu Dhabi, UAE. Get information about pricing, response times, coverage areas, and more.",
  keywords: [
    "car recovery FAQ Abu Dhabi",
    "towing service questions UAE",
    "roadside assistance FAQ Abu Dhabi",
    "car recovery help",
    "towing service FAQ",
    "car recovery questions Abu Dhabi",
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Car Recovery Services Abu Dhabi",
    description: "Find answers to common questions about car recovery and towing services in Abu Dhabi, UAE.",
    url: "https://uaecarservices.ae/faq",
  },
  alternates: {
    canonical: "https://uaecarservices.ae/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you reach my location?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our average response time is 15-30 minutes across Abu Dhabi. We have a network of service providers strategically located throughout the emirate to ensure fast response times."
        }
      },
      {
        "@type": "Question",
        "name": "What services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive car recovery and roadside assistance services including vehicle towing, battery jump-start, flat tire service, sand recovery, fuel delivery, and lockout service. All services are available 24/7 throughout Abu Dhabi."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service all vehicle types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle all vehicle types including cars, SUVs, trucks, buses, motorcycles, and heavy-duty vehicles. Our fleet includes specialized equipment for different vehicle sizes and weights."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive coverage throughout Abu Dhabi including Abu Dhabi City, Al Ain, Al Dhafra, Yas Island, Saadiyat Island, Al Raha, Khalifa City, Mohammed Bin Zayed City, and all surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "Are your services available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our services are available 24 hours a day, 7 days a week, including holidays. We never close, so help is always available when you need it most."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
