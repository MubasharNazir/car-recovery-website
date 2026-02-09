import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Recovery Services Abu Dhabi UAE | 24/7 Towing & Roadside Assistance",
  description: "Professional car recovery, towing, and roadside assistance services in Abu Dhabi, UAE. Available 24/7 for vehicle towing, battery jump-start, flat tire service, sand recovery, fuel delivery, and lockout service. Fast response 15-30 minutes. Call +971 557540296.",
  keywords: [
    "car recovery Abu Dhabi",
    "towing service Abu Dhabi",
    "roadside assistance UAE",
    "vehicle towing Abu Dhabi",
    "24/7 towing service Abu Dhabi",
    "car recovery near me Abu Dhabi",
    "best car recovery Abu Dhabi",
    "emergency towing Abu Dhabi",
    "professional towing service UAE",
    "car breakdown service Abu Dhabi",
  ],
  openGraph: {
    title: "Car Recovery Services Abu Dhabi UAE | 24/7 Towing & Roadside Assistance",
    description: "Professional car recovery, towing, and roadside assistance services in Abu Dhabi, UAE. Available 24/7. Fast response 15-30 minutes.",
    url: "https://uaecarservices.ae",
    type: "website",
    locale: "en_AE",
  },
  alternates: {
    canonical: "https://uaecarservices.ae",
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section - ServiceMarket Style */}
      <section className="relative min-h-[55vh] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/back.png"
            alt="Professional car recovery and towing services in Abu Dhabi, UAE - 24/7 roadside assistance"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay for text readability - darker */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/75"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 leading-tight text-white">
              Professional Car Recovery Services in Abu Dhabi
            </h1>

            {/* Sub-headline */}
            <p className="text-sm md:text-base mb-6 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Fast, reliable, and professional vehicle recovery and towing services. Available 24/7 for urgent roadside assistance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+971557540296"
                className="bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-accent-700 transition-all shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/971557540296"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#20BA5A] transition-all shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bar - ServiceMarket Style */}
      <section className="hidden md:block bg-teal-600 text-white py-1.5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {[
              { 
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                text: "150,000+ happy customers"
              },
              { 
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                text: "Over 15,000 reviews"
              },
              { 
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
                text: "Rated 4.8 out of 5"
              },
              { 
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                text: "Trusted service professionals"
              },
              { 
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                text: "Live customer support"
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-xs font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Our Fastest Services
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Urgent roadside assistance services you need most in the UAE
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Vehicle Towing",
                id: "towing",
                image: "/images/back.png",
                features: ["Accident towing", "Breakdown service", "All vehicle types", "Flatbed towing", "Long distance"],
              },
              {
                title: "Battery Services",
                id: "battery",
                image: "/images/batteryservices.webp",
                features: ["Quick jump-start", "Battery testing", "24/7 available", "Battery replacement", "On-site service"],
              },
              {
                title: "Flat Tire Service",
                id: "flat-tire",
                image: "/images/flat-tire-services.avif",
                features: ["On-site replacement", "Tire repair", "15-30 min response", "Pressure check", "All tire sizes"],
              },
              {
                title: "Sand Recovery",
                id: "sand-recovery",
                image: "/images/sand recovery.jpg",
                features: ["Desert recovery", "Sand extraction", "4WD recovery", "Heavy-duty winch", "24/7 available"],
              },
              {
                title: "Fuel Delivery",
                id: "fuel",
                image: "/images/fuel service.webp",
                features: ["Fast delivery", "All fuel types", "24/7 service", "Quick response", "Emergency fuel"],
              },
              {
                title: "Lockout Service",
                id: "lockout",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Quick unlock", "No damage", "All car types", "Professional tools", "15-30 min response"],
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Abu Dhabi, UAE - 24/7 car recovery and roadside assistance`}
                      fill
                      quality={80}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/971557540296?text=Hi, I'm interested in ${service.title} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 font-semibold flex items-center"
                    >
                      Let&apos;s Connect
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-accent-600 text-white px-10 py-4 rounded-xl font-medium text-base hover:bg-accent-700 transition-all shadow-lg transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Areas We Serve
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage throughout Abu Dhabi and surrounding regions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["Abu Dhabi City", "Al Ain", "Al Dhafra", "Yas Island", "Saadiyat Island", "Al Raha", "Khalifa City", "Mohammed Bin Zayed City"].map((area, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200 hover:border-accent-400 hover:shadow-md transition-all group">
                <div className="mb-3 flex justify-center">
                  <div className="bg-accent-100 rounded-full p-2.5 group-hover:bg-accent-200 transition-colors">
                    <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="font-medium text-sm text-gray-900 group-hover:text-accent-600 transition-colors">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied customers across Abu Dhabi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ahmed Al Mansoori",
                location: "Abu Dhabi City",
                rating: 5,
                text: "Excellent service! My car broke down late at night, and they arrived within 20 minutes. Professional, courteous, and reasonably priced. Highly recommended!",
                service: "Roadside Assistance"
              },
              {
                name: "Sarah Johnson",
                location: "Yas Island",
                rating: 5,
                text: "Got stuck in the sand during a desert trip. The recovery team was amazing - they knew exactly what to do and got me out safely. Great experience!",
                service: "Off-road Recovery"
              },
              {
                name: "Mohammed Hassan",
                location: "Al Ain",
                rating: 5,
                text: "Fast response time and very professional. The driver was careful with my vehicle and explained everything clearly. Will definitely use again if needed.",
                service: "Vehicle Towing"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-xs text-primary-600 mt-1">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
