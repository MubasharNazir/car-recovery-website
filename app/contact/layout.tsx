import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Car Recovery Services Abu Dhabi UAE | 24/7 Support",
  description: "Contact UAE Car Services for car recovery, towing, and roadside assistance in Abu Dhabi, UAE. Available 24/7. Call +971 557540296 or fill out our contact form for immediate assistance.",
  keywords: [
    "contact car recovery Abu Dhabi",
    "towing service contact UAE",
    "roadside assistance contact Abu Dhabi",
    "car recovery phone number",
    "emergency towing contact Abu Dhabi",
  ],
  openGraph: {
    title: "Contact Us - Car Recovery Services Abu Dhabi UAE",
    description: "Contact UAE Car Services for 24/7 car recovery and towing services in Abu Dhabi. Call +971 557540296.",
    url: "https://uaecarservices.ae/contact",
  },
  alternates: {
    canonical: "https://uaecarservices.ae/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
