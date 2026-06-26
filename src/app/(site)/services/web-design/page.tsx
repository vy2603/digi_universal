import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design & Development Agency Gurgaon | DigiUniversal',
  description: 'Professional web design & development agency in Gurgaon. Fast, beautiful, converting websites. Shopify, WooCommerce, custom sites. Delivered in 2-4 weeks.',
  keywords: 'web design agency gurgaon, web development gurgaon, website design india, affordable web design india',
};

export default function WebDesignPage() {
  return (
    <main>
      <section className="pt-24 pb-16 dark:bg-[#0f1420] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">💻 WEB DESIGN & DEVELOPMENT</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Your Website is Your <span className="text-yellow-500">Best Salesperson</span></h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">We build fast, beautiful websites designed to convert visitors into customers. Every page built with one purpose — to grow your business 24/7.</p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            {[{val:'0.8s',label:'Load Speed',color:'#f59e0b'},{val:'3.4x',label:'More Conversions',color:'#22c55e'},{val:'2-4wk',label:'Delivery Time',color:'#3b82f6'}].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold" style={{color:s.color}}>{s.val}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm">Get Free Quote →</Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'🏢',title:'Business Websites',desc:'Professional websites that establish trust and generate leads for your business',price:'From ₹25,000'},
              {icon:'🛒',title:'E-Commerce Stores',desc:'Shopify & WooCommerce stores built to convert visitors into buyers',price:'From ₹40,000'},
              {icon:'📱',title:'Landing Pages',desc:'High-converting landing pages for your ad campaigns — maximize ROI',price:'From ₹12,000'},
              {icon:'🎨',title:'UI/UX Design',desc:'Beautiful, intuitive designs that keep users engaged and coming back',price:'From ₹20,000'},
              {icon:'⚡',title:'Speed Optimization',desc:'Make your existing website lightning fast — improve rankings & conversions',price:'From ₹8,000'},
              {icon:'🔧',title:'Website Maintenance',desc:'Keep your site secure, updated and running perfectly 24/7',price:'From ₹5,000/mo'},
            ].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{s.desc}</p>
                <span className="text-sm font-semibold text-yellow-500">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#0f1420]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 border border-yellow-500/30 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get a Free Website Quote</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Tell us about your project and we will give you a detailed quote within 24 hours — no obligations.</p>
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-4 rounded-full font-semibold">Get Free Quote →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}