import Image from "next/image";
import Link from "next/link";
import { CORE_FEATURES } from "./data";

export function CoreFeatures() {
  return (
    <section className="py-30 bg-gray-50 dark:bg-white/1 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-bold text-gray-800 text-3xl dark:text-white/90 md:text-title-lg max-w-xl mx-auto">
            Our Services & Solutions
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Data-driven strategies that turn browsers into buyers. Full-stack digital marketing under one roof — no juggling agencies, no communication gaps.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group bg-white p-9 border border-gray-200 dark:bg-white/5 dark:border-white/3 rounded-[20px] shadow-[0px_30px_50px_-32px_rgba(107,110,148,0.04)] hover:border-primary-500 dark:hover:border-primary-500/50 transition block"
            >
              <div className="core-feature-icon mb-9">
                <Image
                  src={feature.iconUrl}
                  alt={feature.title}
                  role="presentation"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl group-hover:text-primary-500 transition">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {feature.description}
              </p>
              <span className="text-primary-500 text-sm font-semibold group-hover:underline">
                
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}