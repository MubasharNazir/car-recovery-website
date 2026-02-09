import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Professional Car Recovery Services Abu Dhabi UAE",
  description: "Learn about UAE Car Services - your trusted partner for professional car recovery, towing, and roadside assistance in Abu Dhabi, UAE. Available 24/7 with fast response times. Licensed, insured, and committed to excellence.",
  keywords: [
    "about car recovery Abu Dhabi",
    "towing company UAE",
    "roadside assistance Abu Dhabi",
    "professional car services Abu Dhabi",
    "car recovery company Abu Dhabi",
    "licensed towing service UAE",
  ],
  openGraph: {
    title: "About Us - Professional Car Recovery Services Abu Dhabi UAE",
    description: "Learn about UAE Car Services - your trusted partner for professional car recovery and towing services in Abu Dhabi.",
    url: "https://uaecarservices.ae/about",
  },
  alternates: {
    canonical: "https://uaecarservices.ae/about",
  },
};

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-base text-primary-100 max-w-2xl">
            Your trusted partner for professional car recovery services in Abu
            Dhabi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                UAE Car Recovery Services is a leading car recovery and towing
                service provider in Abu Dhabi. We understand that vehicle
                breakdowns and emergencies can happen at any time, and we're
                committed to providing fast, efficient, and professional solutions.
              </p>

              <h2 className="text-2xl font-semibold mb-6 text-gray-900 mt-12">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our mission is to make car recovery services accessible,
                reliable, and stress-free for all vehicle owners in Abu Dhabi.
                We maintain strict standards for professionalism, safety, and customer
                service in everything we do.
              </p>

              <h2 className="text-2xl font-semibold mb-6 text-gray-900 mt-12">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 text-gray-900">
                    Licensed & Verified
                  </h3>
                  <p className="text-gray-700">
                    We are thoroughly verified, licensed, and insured. We meet
                    the highest standards of professionalism and safety in all
                    our operations.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 text-gray-900">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-700">
                    Emergencies don't wait for business hours. Our service is
                    available round the clock, 365 days a year.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 text-gray-900">
                    Fast Response
                  </h3>
                  <p className="text-gray-700">
                    We prioritize quick response times. Our team is
                    strategically located across Abu Dhabi to ensure fast
                    assistance when you need it most.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 text-gray-900">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-700">
                    No hidden fees or surprises. We believe in transparent
                    pricing so you know exactly what you're paying for.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6 text-gray-900 mt-12">
                Our Commitment
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We are committed to providing exceptional service and building
                trust with our customers. Our team is carefully selected based
                on track record, customer reviews, and commitment to excellence.
                We continuously monitor and improve our services to ensure the
                best possible experience for our customers.
              </p>

              <h2 className="text-2xl font-semibold mb-6 text-gray-900 mt-12">
                Coverage Area
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We provide comprehensive coverage throughout Abu Dhabi, including
                Abu Dhabi City, Al Ain, Al Dhafra, and all surrounding areas.
                Our service network ensures that help is never far away, no
                matter where you are in the emirate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Reliability",
                desc: "We understand that when your vehicle breaks down, you need help you can count on. That's why we only work with the most reliable service providers.",
                icon: "🎯"
              },
              {
                title: "Safety First",
                desc: "Your safety and the safety of your vehicle are our top priorities. We follow strict safety protocols and use proper equipment in all operations.",
                icon: "🛡️"
              },
              {
                title: "Customer Satisfaction",
                desc: "We measure our success by your satisfaction. Every interaction is an opportunity to exceed your expectations and build lasting relationships.",
                icon: "⭐"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">
            Our Network
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We maintain a professional operation across Abu Dhabi with rigorous
              standards and continuous training to ensure we meet the highest
              quality expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Licensed and insured operators",
                "Regular safety training and certification",
                "Modern, well-maintained equipment",
                "24/7 availability commitment",
                "GPS tracking for real-time updates",
                "Transparent pricing policies"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-primary-50 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-semibold mb-3">1000+</div>
              <div className="text-gray-300 text-lg">Services Completed</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-semibold mb-3">50+</div>
              <div className="text-gray-300 text-lg">Team Members</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-semibold mb-3">24/7</div>
              <div className="text-gray-300 text-lg">Always Available</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-semibold mb-3">15min</div>
              <div className="text-gray-300 text-lg">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need Our Services?
          </h2>
          <p className="text-base mb-6 text-gray-300">
            Contact us now for immediate assistance or to learn more about our services.
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
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
