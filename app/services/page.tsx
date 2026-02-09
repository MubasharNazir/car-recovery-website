import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Car Recovery, Towing & Roadside Assistance Abu Dhabi UAE",
  description: "Comprehensive car recovery services in Abu Dhabi, UAE. Vehicle towing, battery services, flat tire service, sand recovery, fuel delivery, and lockout service. Available 24/7 with 15-30 minute response time. Call +971 557540296.",
  keywords: [
    "car recovery services Abu Dhabi",
    "vehicle towing UAE",
    "roadside assistance Abu Dhabi",
    "battery jump start Abu Dhabi",
    "flat tire service Abu Dhabi",
    "sand recovery UAE",
    "fuel delivery Abu Dhabi",
    "lockout service Abu Dhabi",
    "car towing services Abu Dhabi",
    "emergency car recovery Abu Dhabi",
  ],
  openGraph: {
    title: "Our Services - Car Recovery, Towing & Roadside Assistance Abu Dhabi UAE",
    description: "Comprehensive car recovery services in Abu Dhabi, UAE. Available 24/7.",
    url: "https://uaecarservices.ae/services",
  },
  alternates: {
    canonical: "https://uaecarservices.ae/services",
  },
};

import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "towing",
      title: "Vehicle Towing",
      description:
        "Accident or breakdown? Professional towing service for all vehicle types. Safe and secure transportation.",
      features: [
        "Accident towing",
        "Breakdown service",
        "All vehicle types",
        "Flatbed towing",
        "Long distance",
      ],
      image: "/images/back.png",
    },
    {
      id: "battery",
      title: "Battery Services",
      description:
        "Dead battery? We'll jump-start your vehicle quickly. Common issue in UAE heat - we're here to help.",
      features: [
        "Quick jump-start",
        "Battery testing",
        "24/7 available",
        "Battery replacement",
        "On-site service",
      ],
      image: "/images/batteryservices.webp",
    },
    {
      id: "flat-tire",
      title: "Flat Tire Service",
      description:
        "Quick tire change service at your location. Get back on the road in minutes, not hours.",
      features: [
        "On-site replacement",
        "Tire repair",
        "15-30 min response",
        "Pressure check",
        "All tire sizes",
      ],
      image: "/images/flat-tire-services.avif",
    },
    {
      id: "sand-recovery",
      title: "Sand Recovery",
      description:
        "Stuck in sand? Very common in UAE desert areas. Professional extraction service to get you moving again.",
      features: [
        "Desert recovery",
        "Sand extraction",
        "4WD recovery",
        "Heavy-duty winch",
        "24/7 available",
      ],
      image: "/images/sand recovery.jpg",
    },
    {
      id: "fuel",
      title: "Fuel Delivery",
      description:
        "Ran out of fuel? We'll deliver fuel to your location so you can get back on the road immediately.",
      features: [
        "Fast delivery",
        "All fuel types",
        "24/7 service",
        "Quick response",
        "Emergency fuel",
      ],
      image: "/images/fuel service.webp",
    },
    {
      id: "lockout",
      title: "Lockout Service",
      description:
        "Locked your keys inside? We'll help you get back into your vehicle quickly and safely without damage.",
      features: [
        "Quick unlock",
        "No damage",
        "All car types",
        "Professional tools",
        "15-30 min response",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Services
          </h1>
          <p className="text-base text-gray-300 max-w-2xl">
            Comprehensive car recovery and roadside assistance services
            throughout Abu Dhabi. Professional, reliable, and available 24/7.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:flex border border-gray-100`}
              >
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} in Abu Dhabi, UAE - Professional car recovery and roadside assistance`}
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                <div className="md:w-3/5 p-10">
                  <h2 className="text-2xl font-semibold mb-5 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 flex items-center">
                      <svg className="w-6 h-6 text-accent-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What We Offer:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Response Time:</span>
                      <span className="ml-2 font-semibold text-gray-900">15-30 min</span>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Available:</span>
                      <span className="ml-2 font-semibold text-gray-900">24/7</span>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Coverage:</span>
                      <span className="ml-2 font-semibold text-gray-900">All Abu Dhabi</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">
              Service Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Pricing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our pricing is transparent and competitive. Costs vary based on:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span className="text-gray-700">Distance and location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span className="text-gray-700">Vehicle type and size</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span className="text-gray-700">Time of day (standard vs urgent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span className="text-gray-700">Complexity of recovery</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm italic">
                  Contact us for a free quote before service begins.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">What to Expect</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When you request our service:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-gray-700">You'll receive confirmation and estimated arrival time</li>
                  <li className="text-gray-700">Our provider will contact you when en route</li>
                  <li className="text-gray-700">Professional assessment of your situation</li>
                  <li className="text-gray-700">Clear explanation of service and pricing</li>
                  <li className="text-gray-700">Safe and professional completion of service</li>
                  <li className="text-gray-700">Follow-up to ensure satisfaction</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Request a Service?
          </h2>
          <p className="text-base mb-6 text-primary-100">
            Contact us now for immediate assistance or to schedule a service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971557540296"
              className="bg-accent-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/971557540296"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
