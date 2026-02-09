"use client";

import { useState } from "react";


function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-accent-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "How quickly can you reach my location?",
      answer: "Our average response time is 15-30 minutes across Abu Dhabi. We have a network of service providers strategically located throughout the emirate to ensure fast response times. Response time may vary slightly based on your exact location and traffic conditions.",
    },
    {
      question: "What services do you provide?",
      answer: "We provide comprehensive car recovery and roadside assistance services including vehicle towing, battery jump-start, flat tire service, sand recovery, fuel delivery, and lockout service. All services are available 24/7 throughout Abu Dhabi.",
    },
    {
      question: "Do you service all vehicle types?",
      answer: "Yes, we handle all vehicle types including cars, SUVs, trucks, buses, motorcycles, and heavy-duty vehicles. Our fleet includes specialized equipment for different vehicle sizes and weights.",
    },
    {
      question: "What areas do you cover?",
      answer: "We provide comprehensive coverage throughout Abu Dhabi including Abu Dhabi City, Al Ain, Al Dhafra, Yas Island, Saadiyat Island, Al Raha, Khalifa City, Mohammed Bin Zayed City, and all surrounding areas.",
    },
    {
      question: "How much does towing service cost?",
      answer: "Pricing varies based on distance, vehicle type, and time of day. We provide transparent upfront pricing before starting any service. Contact us for a free quote - we offer competitive rates with no hidden fees.",
    },
    {
      question: "Are your services available 24/7?",
      answer: "Yes, all our services are available 24 hours a day, 7 days a week, including holidays. We never close, so help is always available when you need it most.",
    },
    {
      question: "What should I do if my car breaks down?",
      answer: "If your car breaks down, stay safe by moving to a safe location if possible. Turn on your hazard lights, and call us immediately. Provide your location, vehicle details, and the nature of the problem. Our team will dispatch the nearest available service provider to assist you.",
    },
    {
      question: "Do you provide sand recovery services?",
      answer: "Yes, sand recovery is one of our specialized services, especially important in UAE desert areas. We have professional winch equipment and experienced technicians to safely extract vehicles stuck in sand, mud, or other difficult terrain.",
    },
    {
      question: "Can you help with a dead battery?",
      answer: "Absolutely! We provide battery jump-start services and can also test your battery and replace it if necessary. All battery services are performed at your location for your convenience.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash and major credit cards. Payment is typically made after the service is completed. We provide clear pricing upfront so you know exactly what to expect.",
    },
    {
      question: "Are your service providers licensed and insured?",
      answer: "Yes, all our service providers are fully licensed, insured, and professionally trained. We maintain strict standards for safety and professionalism in all our operations.",
    },
    {
      question: "Can I track the service provider's arrival?",
      answer: "Yes, once your service request is confirmed, you'll receive updates including the estimated arrival time. Our service provider will also contact you when they're en route to your location.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
          <p className="text-base text-gray-300 max-w-2xl">
            Find answers to common questions about our car recovery and roadside assistance services in Abu Dhabi.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Contact us anytime.
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
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
