import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BenefitsGrid() {
  return (
    <section className="bg-gray-900 py-14 md:py-28">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="max-w-lg mx-auto mb-3 font-bold text-center text-white dark:text-white/90 text-3xl md:text-title-lg">
            Why 200+ Businesses Choose DigiUniversal
          </h2>
          <p className="max-w-2xl mx-auto text-base font-normal leading-6 text-white/50">
            We don&apos;t just run campaigns — we become your growth partner. Here&apos;s what makes us different from every other agency.
          </p>
        </div>
        <div className="max-w-[1008px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* Card 1 - ROI Obsessed */}
            <div className="lg:col-span-6">
              <div className="relative flex flex-col justify-between bg-primary-500 rounded-[20px] p-9 md:p-13">
                <div className="max-w-sm mb-32">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    ROI-Focused. Not Vanity Metrics.
                  </h3>
                  <p className="text-base text-white/70">
                    Every strategy we build is tied directly to revenue. We track leads, conversions, and sales — not just likes and impressions. Your growth is our only KPI.
                  </p>
                </div>
                <div>
                  <svg
                    className="absolute left-8 top-[61%] floating-1"
                    width="111"
                    height="34"
                    viewBox="0 0 111 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 14.7917C0 7.11814 6.22067 0.897461 13.8943 0.897461H90.8943C98.5679 0.897461 104.789 7.11814 104.789 14.7917C104.789 22.4653 98.5679 28.686 90.8943 28.686H13.8943C6.22067 28.686 0 22.4653 0 14.7917Z"
                      fill="#46B3F0"
                    />
                    <text x="12" y="20" fill="white" fontSize="11" fontWeight="600">4.2x Avg ROAS</text>
                  </svg>
                  <svg
                    className="absolute right-28 top-[55%] floating-2"
                    width="118"
                    height="34"
                    viewBox="0 0 118 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79028 14.7917C5.79028 7.11814 12.011 0.897461 19.6845 0.897461H103.685C111.358 0.897461 117.579 7.11814 117.579 14.7917C117.579 22.4653 111.358 28.686 103.685 28.686H19.6845C12.011 28.686 5.79028 22.4653 5.79028 14.7917Z"
                      fill="#FF745E"
                    />
                    <text x="16" y="20" fill="white" fontSize="11" fontWeight="600">+312% Traffic</text>
                  </svg>
                  <Image
                    src="/images/benefits/bn-1.svg"
                    className="-mb-8 md:-mb-13 w-full"
                    alt="ROI focused digital marketing"
                    width={488}
                    height={288}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Global Expertise */}
            <div className="lg:col-span-6">
              <div className="benefits-bg rounded-[20px] p-12 overflow-hidden">
                <div>
                  <Image
                    src="/images/benefits/bn-2.svg"
                    alt="Global digital marketing expertise"
                    width={306}
                    height={279}
                  />
                </div>
                <div>
                  <h3 className="font-bold max-w-xs text-white text-2xl md:text-3xl mb-4">
                    Global Expertise. Local Understanding.
                  </h3>
                  <p className="text-base max-w-sm text-white/70">
                    We&apos;ve run campaigns in 30+ countries. We understand cultural nuances, local search behaviour, and global trends — so your campaigns work everywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Full Width CTA */}
            <div className="lg:col-span-12">
              <div className="lg:px-12 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-[20px] h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5">
                <div className="max-w-sm relative z-10">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    Get Your Free Strategy Call Today
                  </h3>
                  <p className="text-base text-white/70 mb-8">
                    In 30 minutes, we&apos;ll show you exactly why your competitors are outranking you, where your ad spend is being wasted, and a clear 3-step growth plan for your business.
                  </p>
                  <Link
                    href="/contact"
                    className="font-medium inline-block text-sm text-white rounded-full bg-primary-500 hover:bg-primary-600 transition py-3 px-6"
                  >
                    Book Free Strategy Call →
                  </Link>
                </div>
                <div>
                  <Image
                    src="/images/benefits/bn-3.svg"
                    className="hidden lg:block relative z-10"
                    alt="Free digital marketing strategy call"
                    width={359}
                    height={318}
                  />
                </div>
                <Image
                  src="/images/benefits/blur-shape.png"
                  alt=""
                  className="h-full w-full -z-0 absolute top-0 right-0"
                  width={399}
                  height={399}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}