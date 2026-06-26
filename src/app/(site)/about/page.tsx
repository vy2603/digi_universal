import Link from 'next/link';

export const metadata = {
  title: 'About Us | DigiUniversal — Global Digital Marketing Agency',
  description: 'Learn about DigiUniversal — a global digital marketing agency based in Gurgaon, India. We help businesses grow with SEO, Google Ads, Social Media and more across 30+ countries.',
};

export default function AboutPage() {
  return (
    <main className="dark:bg-[#171F2E] min-h-screen">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            We Are <span className="text-primary-500">DigiUniversal</span> —<br />Born to Grow Brands Globally
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Founded in Gurgaon, India — built for the world. We help businesses of every size grow their digital presence and revenue across every market.
          </p>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '200+', label: 'Clients Worldwide' },
            { number: '30+', label: 'Countries Served' },
            { number: '4.2x', label: 'Average ROAS' },
            { number: '92%', label: 'Client Retention' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
              <div className="text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              DigiUniversal started with a simple belief — every business, regardless of size or location, deserves world-class digital marketing.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              We are not a post-and-pray agency. We are growth partners — obsessed with data, driven by results, and committed to your success. Every strategy we build is tied directly to revenue, not vanity metrics.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              From a small business in Gurgaon to enterprise brands in the USA, UK, UAE and Australia — we have helped 200+ businesses grow their digital presence and revenue across 30+ countries.
            </p>
          </div>
          {/* Creative Visual */}
          <div className="relative">
            <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🎯', title: 'ROI Focused', desc: 'Every rupee accountable' },
                  { icon: '🌍', title: 'Global Reach', desc: '30+ countries served' },
                  { icon: '📊', title: 'Data Driven', desc: 'No guesswork, ever' },
                  { icon: '🤝', title: 'True Partner', desc: 'Your growth is ours' },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-white">{item.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 opacity-10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What We Stand For</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">These are not just words on a wall — they define every decision we make for our clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '💡',
                title: 'Transparency',
                desc: 'No hidden fees, no vague reports. You always know exactly what we are doing, why we are doing it, and what results to expect.',
              },
              {
                icon: '⚡',
                title: 'Speed',
                desc: 'We move fast. Campaigns launch in days, not weeks. Results start showing in weeks, not months. Time is money — we respect both.',
              },
              {
                icon: '📈',
                title: 'Growth',
                desc: 'We are not satisfied with maintaining the status quo. We always push for more — more traffic, more leads, more revenue for our clients.',
              },
              {
                icon: '🔒',
                title: 'Accountability',
                desc: 'We own our results — good and bad. If something is not working, we tell you first and fix it fast. No excuses, just solutions.',
              },
              {
                icon: '🌐',
                title: 'Global Thinking',
                desc: 'We think beyond borders. Our strategies are built for local markets but designed to scale globally when you are ready.',
              },
              {
                icon: '❤️',
                title: 'Client First',
                desc: 'Your business goals are our goals. We treat every client — big or small — with the same level of dedication and care.',
              },
            ].map((val) => (
              <div key={val.title} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 hover:border-primary-200 dark:hover:border-primary-500/30 transition">
                <div className="text-3xl mb-4">{val.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{val.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Industries We Serve</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">We speak your industry language. Our team has hands-on experience across 15+ industries worldwide.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🏠 Real Estate', '🛍️ E-Commerce', '🏥 Healthcare', '🎓 Education',
              '🏨 Hospitality', '⚖️ Legal', '💻 SaaS & Tech', '🏗️ Construction',
              '💰 Finance', '🍽️ Restaurants', '🚗 Automotive', '💪 Fitness',
            ].map((industry) => (
              <span key={industry} className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-primary-300 transition">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow With Us?</h2>
          <p className="text-gray-400 mb-8">Book a free 30-minute strategy call. No obligation, just pure value.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition">
              Book Free Strategy Call →
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
