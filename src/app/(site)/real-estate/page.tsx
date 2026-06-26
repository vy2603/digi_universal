import Link from 'next/link';

export const metadata = {
  title: 'Digital Marketing for Real Estate | DigiUniversal',
  description: 'Grow your real estate business with DigiUniversal. We specialize in digital marketing for builders, developers and real estate agents — SEO, Google Ads, Social Media and lead generation.',
};

export default function RealEstatePage() {
  return (
    <main className="dark:bg-[#171F2E] min-h-screen">

      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500 opacity-5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
            Real Estate Marketing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            More Property Leads.<br />
            <span className="text-primary-500">Less Wasted Budget.</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We help builders, developers and real estate agents generate high-quality property leads through targeted digital marketing — in India and globally.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition">
              Get Free Leads Audit →
            </Link>
            <Link href="/services" className="border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-full font-semibold transition hover:border-primary-400">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '500+', label: 'Property Leads/Month' },
            { number: '₹150', label: 'Avg Cost Per Lead' },
            { number: '3x', label: 'More Site Visits' },
            { number: '60%', label: 'Lower CPL vs Before' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
              <div className="text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Real Estate Marketing Challenges We Solve</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">We understand the real estate industry inside out — and we know exactly what is holding your business back.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                problem: 'Spending on ads but getting fake or low-quality leads',
                solution: 'We target high-intent buyers and investors — people actively searching for properties like yours.',
                icon: '❌→✅',
              },
              {
                problem: 'Website gets visitors but no one calls or fills the form',
                solution: 'We optimize your landing pages for conversion — every element designed to turn visitors into enquiries.',
                icon: '❌→✅',
              },
              {
                problem: 'No visibility on Google when buyers search for properties',
                solution: 'We get your listings and website on Page 1 for high-intent keywords like "flats in Gurgaon" or "villas in Dubai".',
                icon: '❌→✅',
              },
              {
                problem: 'Social media is inactive and not generating any leads',
                solution: 'We create property showcases, virtual tours and engaging content that attract serious buyers on Instagram and Facebook.',
                icon: '❌→✅',
              },
            ].map((item) => (
              <div key={item.problem} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6">
                <div className="text-2xl mb-4">{item.icon}</div>
                <p className="text-sm font-medium text-red-400 mb-3 line-through">{item.problem}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES FOR REAL ESTATE */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What We Do for Real Estate Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Google Ads for Real Estate',
                desc: 'We run targeted search and display campaigns that show your properties to buyers actively searching in your area. Low cost per lead, high intent traffic.',
              },
              {
                icon: '📱',
                title: 'Social Media Marketing',
                desc: 'Property reels, virtual tours, project highlights — we create content that makes buyers stop scrolling and start enquiring.',
              },
              {
                icon: '🔍',
                title: 'Real Estate SEO',
                desc: 'Rank on Page 1 for searches like "2 BHK flats in Gurgaon" or "luxury villas in Dubai" — free, consistent organic traffic forever.',
              },
              {
                icon: '🌐',
                title: 'Property Landing Pages',
                desc: 'High-converting landing pages for each project with clear CTAs, virtual tours, floor plans and enquiry forms that work.',
              },
              {
                icon: '📧',
                title: 'Lead Nurturing',
                desc: 'Automated WhatsApp and email follow-up sequences that keep your leads warm and convert them into site visits and bookings.',
              },
              {
                icon: '📊',
                title: 'Lead Quality Tracking',
                desc: 'We track every lead source, cost and conversion — so you always know which campaigns are giving you real buyers.',
              },
            ].map((service) => (
              <div key={service.title} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 hover:border-primary-300 dark:hover:border-primary-500/30 transition">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Who We Work With</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">From individual agents to large developers — we have a solution for every real estate business.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🏢 Builders & Developers',
              '🏡 Real Estate Agents',
              '🏬 Commercial Property',
              '🌴 Luxury Real Estate',
              '🏘️ Housing Projects',
              '🌍 International Properties',
              '📦 Co-Working Spaces',
              '🏖️ Holiday Homes',
            ].map((type) => (
              <span key={type} className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-primary-300 transition">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Generate More Property Leads?</h2>
          <p className="text-gray-400 mb-8">Book a free 30-minute strategy call. We will show you exactly how many leads we can generate for your project — with your budget.</p>
          <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition inline-block">
            Get Free Leads Audit →
          </Link>
        </div>
      </section>

    </main>
  );
}
