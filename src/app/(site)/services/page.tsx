import Link from 'next/link';

export const metadata = {
  title: 'Digital Marketing Services | DigiUniversal — SEO, Ads, Social Media',
  description: 'Explore DigiUniversal full-stack digital marketing services — Performance Marketing, Google & Meta Ads, SEO, Web Design, Social Media and E-Commerce Marketing. Serving clients worldwide.',
};

const services = [
  {
    icon: '📈',
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    color: 'from-blue-500/10 to-indigo-500/10',
    border: 'border-blue-500/20',
    tag: 'Most Popular',
    tagColor: 'bg-blue-500/10 text-blue-400',
    desc: 'We run data-driven campaigns across Google, Meta, YouTube and LinkedIn. Every campaign is tracked, tested and scaled based on what actually works.',
    points: ['Multi-channel campaign management', 'Real-time tracking and optimization', 'Transparent ROI reporting', 'Average 4.2x ROAS for our clients'],
  },
  {
    icon: '🎯',
    title: 'Google & Meta Ads (PPC)',
    slug: 'google-meta-ads',
    color: 'from-orange-500/10 to-red-500/10',
    border: 'border-orange-500/20',
    tag: 'High ROI',
    tagColor: 'bg-orange-500/10 text-orange-400',
    desc: 'Our certified experts run high-performance ad campaigns on Google, Facebook and Instagram. We optimize every rupee so you get maximum leads at lowest cost.',
    points: ['Google Search, Display & Shopping Ads', 'Facebook & Instagram Ad Campaigns', 'Remarketing & Retargeting', 'Conversion Rate Optimization'],
  },
  {
    icon: '🔍',
    title: 'Search Engine Optimization (SEO)',
    slug: 'seo',
    color: 'from-green-500/10 to-emerald-500/10',
    border: 'border-green-500/20',
    tag: 'Long Term Growth',
    tagColor: 'bg-green-500/10 text-green-400',
    desc: 'We get your website to Page 1 on Google and keep it there. Our SEO strategies drive consistent organic traffic that converts into real leads and sales.',
    points: ['Technical SEO Audit & Fixes', 'On-Page & Off-Page Optimization', 'Local SEO & Google Business Profile', 'International & Multilingual SEO'],
  },
  {
    icon: '🌐',
    title: 'Web Design & Development',
    slug: 'web-design',
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    tag: 'Convert Visitors',
    tagColor: 'bg-purple-500/10 text-purple-400',
    desc: 'We build fast, beautiful websites designed to convert visitors into customers. From landing pages to full e-commerce stores, every page is built to perform.',
    points: ['Custom Website Design & Development', 'Landing Pages Built to Convert', 'E-Commerce Stores (Shopify, WooCommerce)', 'Speed & Core Web Vitals Optimization'],
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    slug: 'social-media',
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20',
    tag: 'Brand Building',
    tagColor: 'bg-pink-500/10 text-pink-400',
    desc: 'We create scroll-stopping content, grow your audience and turn followers into paying customers across Instagram, LinkedIn, Facebook and YouTube.',
    points: ['Content Creation & Calendar Management', 'Reels & Short Video Strategy', 'Community Management & Engagement', 'Influencer Marketing & Collaborations'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Marketing',
    slug: 'ecommerce',
    color: 'from-yellow-500/10 to-amber-500/10',
    border: 'border-yellow-500/20',
    tag: 'Scale Your Store',
    tagColor: 'bg-yellow-500/10 text-yellow-500',
    desc: 'We help Shopify, WooCommerce and Amazon sellers grow with targeted strategies that bring the right traffic and increase conversions.',
    points: ['Shopify & WooCommerce Marketing', 'Amazon Seller Optimization', 'Product Ads & Shopping Campaigns', 'Abandoned Cart Recovery'],
  },
];

export default function ServicesPage() {
  return (
    <main className="dark:bg-[#171F2E] min-h-screen">

      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-6">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Our Services & <span className="text-primary-500">Solutions</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack digital marketing under one roof. No juggling agencies, no communication gaps — just results.
          </p>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="py-8 px-6 bg-gray-50 dark:bg-white/5 border-y border-gray-100 dark:border-white/10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            { icon: '✅', text: 'No Lock-in Contracts' },
            { icon: '📊', text: 'Weekly Transparent Reports' },
            { icon: '🌍', text: 'Serving 30+ Countries' },
            { icon: '🎯', text: '4.2x Average ROAS' },
            { icon: '💬', text: 'Dedicated Account Manager' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className={`relative bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200`}>
              {/* Tag */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.tagColor} mb-4`}>
                {service.tag}
              </span>

              {/* Icon & Title */}
              <div className="text-4xl mb-3">{service.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">{service.desc}</p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500 mt-0.5">→</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:text-primary-400 transition">
                Get Started → 
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">How We Work</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Simple, transparent, effective — from day one to long-term growth.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Audit', desc: 'We analyze your current digital presence, competitors and opportunities.' },
              { step: '02', title: 'Custom Plan', desc: 'We build a tailored strategy with clear goals, timelines and KPIs.' },
              { step: '03', title: 'Execute', desc: 'Our team gets to work — campaigns launch, content is created, SEO is built.' },
              { step: '04', title: 'Grow Together', desc: 'We optimize weekly, report monthly and scale what is working.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl">
                <div className="text-3xl font-black text-primary-500 mb-3">{item.step}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-400 mb-8">Book a free strategy call. We will analyze your business and recommend exactly what will drive the most growth for you.</p>
          <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition inline-block">
            Book Free Strategy Call →
          </Link>
        </div>
      </section>

    </main>
  );
}
