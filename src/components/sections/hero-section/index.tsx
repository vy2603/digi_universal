import Image from 'next/image';
import Link from 'next/link';
import HeroLogos from '../hero-logos';
import { Subheading } from './subheading';

export default function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden dark:bg-[#171F2E]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center pb-16">
              <Subheading text="Global Digital Marketing Agency — 15+ Countries" />

              <h1 className="text-gray-700 mx-auto font-bold mb-4 text-3xl sm:text-4xl md:text-[50px] dark:text-white/90 leading-[1.15] sm:leading-tight md:leading-[64px] max-w-[700px] px-2">
                We Grow Brands.{' '}
                <span className="text-primary-500">Worldwide.</span>
              </h1>
              <p className="max-w-[537px] text-center mx-auto dark:text-gray-400 text-gray-500 text-sm sm:text-base px-4">
                Data-driven digital marketing strategies that generate leads, drive revenue, and build lasting brands — across every market, every industry, every continent.
              </p>

              <div className="mt-9 flex sm:flex-row flex-col gap-3 relative z-30 items-center justify-center px-4">
                <Link
                  href="/contact"
                  className="bg-primary-500 transition h-12 inline-flex items-center justify-center hover:bg-primary-600 px-6 py-3 rounded-full text-white text-sm w-full sm:w-auto"
                >
                  Get Free Strategy Call →
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-300 dark:border-white/20 transition h-12 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 px-6 py-3 rounded-full text-gray-700 dark:text-white text-sm w-full sm:w-auto"
                >
                  View Our Services
                </Link>
              </div>

              {/* Trust Stats */}
              <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-y-6 gap-x-8 px-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">200+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Clients Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">15+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">4.2x</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Average ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">92%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Client Retention</div>
                </div>
              </div>

            </div>
          </div>
          <div className="max-w-[1000px] mx-auto relative px-3 sm:px-0">
            <div className="p-2 sm:p-[18px] relative z-30 rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/30 dark:border-white/10 bg-white/20">
              <iframe
                src="/images/hero/hero-dashboard-v4.html"
                className="w-full rounded-xl sm:rounded-2xl block sm:hidden"
                style={{ height: '260px', border: 'none', width: '100%', maxWidth: '100%' }}
              />
              <iframe
                src="/images/hero/hero-dashboard-v4.html"
                className="w-full rounded-xl sm:rounded-2xl hidden sm:block"
                style={{ height: '400px', border: 'none', width: '100%', maxWidth: '100%' }}
              />
            </div>
            <div className="absolute hidden lg:block z-10 -top-20 -translate-y-20 left-1/2 -translate-x-1/2">
              <svg width="1300" height="1001" viewBox="0 0 1300 1001" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7" filter="url(#filter0_f_9279_7148)">
                  <circle cx="800" cy="500.03" r="300" fill="#4E6EFF" />
                </g>
                <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                  <circle cx="500" cy="500.03" r="300" fill="#FF58D5" />
                </g>
                <defs>
                  <filter id="filter0_f_9279_7148" x="300" y="0.029541" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_9279_7148" />
                  </filter>
                  <filter id="filter1_f_9279_7148" x="0" y="0.029541" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_9279_7148" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="max-[1100px]:hidden">
          <Image src="/images/hero/shape-left-1.svg" className="absolute top-14 left-16 floating-1" alt="" width={170} height={44} />
          <Image src="/images/hero/shape-left-2.svg" className="absolute left-[145px] top-[298px] floating-2 max-[1240px]:left-[80px]" alt="" width={181} height={44} />
          <Image src="/images/hero/shape-right-1.svg" className="absolute right-16 top-[108px] floating-3" alt="" width={176} height={44} />
          <Image src="/images/hero/shape-right-2.svg" className="absolute top-[316px] right-[200px] floating-4 max-[1240px]:right-[80px] max-[1350px]:right-[150px] max-[1500px]:right-[200px]" alt="" width={179} height={44} />
        </div>
      </div>
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 bottom-0"></div>
      <HeroLogos />
    </section>
  );
}
