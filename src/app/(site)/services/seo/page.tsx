import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Services in Gurgaon | DigiUniversal — Page 1 Rankings',
  description: 'Best SEO services in Gurgaon. Page 1 Google rankings in 4-6 months. +312% organic traffic increase. Technical SEO, content, link building. Free SEO audit.',
  keywords: 'seo services in gurgaon, seo agency gurgaon, seo company gurgaon, seo services india, best seo agency india',
};

export default function SEOPage() {
  return (
    <main>
      <section className="pt-24 pb-16 dark:bg-[#0f1420] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">🔍 SEO SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">SEO Services in Gurgaon — <span className="text-green-500">Rank #1 on Google</span></h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">We get your website to Page 1 on Google and keep it there. Consistent organic traffic that converts into real leads and sales — month after month, without paying for every click.</p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            {[{val:'+312%',label:'Traffic Growth',color:'#22c55e'},{val:'4-6mo',label:'To Page 1',color:'#3b82f6'},{val:'Zero',label:'Ad Spend Needed',color:'#f59e0b'}].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold" style={{color:s.color}}>{s.val}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm">Get Free SEO Audit →</Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Before vs After SEO</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-white/5 border border-red-500/30 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-red-400 mb-4">❌ Before DigiUniversal SEO</h3>
              <div className="text-5xl font-bold text-red-400 mb-2">Page 3-4</div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Almost no one finds you</p>
              <div className="text-2xl font-bold text-red-400">80-150</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">visitors/month</p>
            </div>
            <div className="bg-white dark:bg-white/5 border border-green-500/30 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-green-400 mb-4">✅ After DigiUniversal SEO</h3>
              <div className="text-5xl font-bold text-green-400 mb-2">Page 1</div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Customers find you first</p>
              <div className="text-2xl font-bold text-green-400">800-2,000</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">visitors/month ↑ 10x+</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Our SEO Services Include</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Technical SEO audit & fixes','Keyword research & strategy','On-page optimization','Content creation & optimization','Link building & outreach','Local SEO & Google Business Profile','Monthly reporting & tracking','Competitor analysis'].map((item,i)=>(
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#0f1420]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/10 border border-green-500/30 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get Your Free SEO Audit</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">We will analyze your website, find all SEO issues, and show you exactly how to rank on Page 1 — completely free.</p>
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 transition text-white px-10 py-4 rounded-full font-semibold">Get Free SEO Audit →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}