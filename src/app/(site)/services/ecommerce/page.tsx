import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-Commerce Marketing Agency India | DigiUniversal Gurgaon',
  description: 'Top e-commerce marketing agency in India. Shopify, WooCommerce & Amazon growth. 7.2x ROAS, 68% cart recovery. Scale your online store with DigiUniversal.',
  keywords: 'ecommerce marketing agency india, shopify marketing agency india, woocommerce seo india, ecommerce digital marketing gurgaon',
};

export default function EcommercePage() {
  return (
    <main>
      <section className="pt-24 pb-16 dark:bg-[#0f1420] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">🛒 E-COMMERCE MARKETING</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Grow Your Online Store <span className="text-teal-500">at Scale</span></h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">We help Shopify, WooCommerce and Amazon sellers grow with targeted strategies that bring the right traffic, increase conversions and recover lost sales.</p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            {[{val:'7.2x',label:'Best ROAS',color:'#14b8a6'},{val:'68%',label:'Cart Recovery',color:'#22c55e'},{val:'+312%',label:'Revenue Growth',color:'#f59e0b'}].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold" style={{color:s.color}}>{s.val}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-teal-500 hover:bg-teal-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm">Get Free E-Commerce Audit →</Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Platforms We Work With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {icon:'🛍️',title:'Shopify',desc:'Complete Shopify store marketing — ads, SEO, email automation'},
              {icon:'🔧',title:'WooCommerce',desc:'WordPress store growth — SEO, Google Shopping, remarketing'},
              {icon:'📦',title:'Amazon',desc:'Amazon PPC, listing optimization & brand store management'},
              {icon:'🌐',title:'Custom Stores',desc:'Any platform — we have experience with all major e-commerce solutions'},
            ].map((p,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-white/5 border border-teal-500/30 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">₹10K spend → ₹84K revenue</div>
            <p className="text-gray-500 dark:text-gray-400">Same budget. 8.4x more revenue. That is what e-commerce optimization does.</p>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#0f1420]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-teal-500/20 to-green-500/10 border border-teal-500/30 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Scale Your Store?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Get a free e-commerce audit. We will find exactly where you are losing revenue and how to fix it.</p>
            <Link href="/contact" className="bg-teal-500 hover:bg-teal-600 transition text-white px-10 py-4 rounded-full font-semibold">Get Free Audit →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}