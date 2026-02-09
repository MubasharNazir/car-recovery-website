import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">UAE Car Recovery</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for professional car recovery and towing
              services in Abu Dhabi. Available 24/7 for urgent roadside
              assistance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/services#towing"
                  className="hover:text-white transition-colors"
                >
                  Vehicle Towing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#recovery"
                  className="hover:text-white transition-colors"
                >
                  Car Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services#roadside"
                  className="hover:text-white transition-colors"
                >
                  Roadside Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#flat-tire"
                  className="hover:text-white transition-colors"
                >
                  Flat Tire Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Abu Dhabi, UAE</li>
              <li>
                <a
                  href="tel:+971557540296"
                  className="hover:text-white transition-colors"
                >
                  +971 557540296
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@uaecarrecovery.ae"
                  className="hover:text-white transition-colors"
                >
                  info@uaecarrecovery.ae
                </a>
              </li>
              <li className="mt-4">
                <span className="text-accent-400 font-semibold">
                  24/7 Urgent Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} UAE Car Recovery Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
