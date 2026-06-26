import { getCurrentYear } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <span className="absolute top-0 -translate-x-1/2 left-1/2">
        <svg width="1260" height="457" viewBox="0 0 1260 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
          </g>
          <defs>
            <filter id="filter0_f_11105_867" x="0" y="-803.299" width="1260" height="1260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_11105_867"/>
            </filter>
          </defs>
        </svg>
      </span>

      <div className="relative z-10 py-12 sm:py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-10 gap-x-6 lg:grid-cols-12">

            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="block mb-4">
                <span className="text-2xl font-bold text-white">Digi<span className="text-primary-500">Universal</span></span>
              </Link>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Gurgaon&apos;s #1 Digital Marketing Agency. We help businesses across India and 15+ countries grow with data-driven SEO, Google Ads, Social Media and Web Design services.
              </p>
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>📍</span>
                  <span>Cyber City, Gurgaon, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>📱</span>
                  <a href="tel:+919711679777" className="hover:text-white transition">+91 97116 79777</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>✉️</span>
                  <a href="mailto:hello@digiuniversal.in" className="hover:text-white transition">hello@digiuniversal.in</a>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-500 transition flex items-center justify-center text-gray-400 hover:text-white text-sm">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-500 transition flex items-center justify-center text-gray-400 hover:text-white text-sm">in</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-500 transition flex items-center justify-center text-gray-400 hover:text-white text-sm">ig</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 transition flex items-center justify-center text-gray-400 hover:text-white text-sm">wa</a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <span className="block mb-4 sm:mb-5 text-sm font-semibold text-white">Services</span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <Link href="/services/performance-marketing" className="text-sm text-gray-400 hover:text-white transition">Performance Marketing</Link>
                    <Link href="/services/google-meta-ads" className="text-sm text-gray-400 hover:text-white transition">Google & Meta Ads</Link>
                    <Link href="/services/seo" className="text-sm text-gray-400 hover:text-white transition">SEO Services</Link>
                    <Link href="/services/web-design" className="text-sm text-gray-400 hover:text-white transition">Web Design</Link>
                    <Link href="/services/social-media" className="text-sm text-gray-400 hover:text-white transition">Social Media</Link>
                    <Link href="/services/ecommerce" className="text-sm text-gray-400 hover:text-white transition">E-Commerce</Link>
                  </nav>
                </div>
                <div>
                  <span className="block mb-4 sm:mb-5 text-sm font-semibold text-white">Company</span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <Link href="/about" className="text-sm text-gray-400 hover:text-white transition">About Us</Link>
                    <Link href="/real-estate" className="text-sm text-gray-400 hover:text-white transition">Real Estate</Link>
                    <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition">Blog</Link>
                    <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact Us</Link>
                    <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</Link>
                  </nav>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block mb-4 sm:mb-5 text-sm font-semibold text-white">Industries</span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <Link href="/real-estate" className="text-sm text-gray-400 hover:text-white transition">Real Estate</Link>
                    <span className="text-sm text-gray-400">Healthcare</span>
                    <span className="text-sm text-gray-400">E-Commerce</span>
                    <span className="text-sm text-gray-400">Education</span>
                    <span className="text-sm text-gray-400">SaaS & Tech</span>
                    <span className="text-sm text-gray-400">Finance</span>
                  </nav>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="lg:col-span-3">
              <span className="block mb-4 sm:mb-5 text-sm font-semibold text-white">Get Free Audit</span>
              <p className="block mb-4 sm:mb-5 text-sm text-gray-400">
                Book a free 30-minute strategy call — no obligations, no contracts.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition rounded-full bg-primary-500 hover:bg-primary-600"
                >
                  🚀 Book Free Strategy Call
                </Link>
                <a
                  href="https://wa.me/919711679777?text=Hi DigiUniversal! I want a free audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition rounded-full bg-green-600 hover:bg-green-700"
                >
                  💬 WhatsApp Us Now
                </a>
              </div>
              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">✓ Google Partner</span>
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">✓ Meta Partner</span>
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">✓ 200+ Clients</span>
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">✓ No Lock-in</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {getCurrentYear()} DigiUniversal — All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500">
              Digital Marketing Agency in Gurgaon, India 🇮🇳
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition">Privacy Policy</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-white transition">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
