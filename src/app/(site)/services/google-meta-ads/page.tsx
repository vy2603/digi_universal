import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google & Meta Ads Agency Gurgaon | DigiUniversal',
  description: 'Certified Google & Meta Ads agency in Gurgaon. Average 4.2x ROAS, ₹120 CPL. Stop wasting budget — start getting real leads. Free audit available.',
  keywords: 'google ads agency gurgaon, meta ads agency india, facebook ads agency gurgaon, google ads management agency, digital marketing agency gurgaon',
};

export default function GoogleMetaAdsPage() {
  return (
    <main>
      <section className="pt-24 pb-16 dark:bg-[#0f1420] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">🎯 GOOGLE & META ADS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Stop Wasting Budget. <span className="text-blue-500">Start Getting Real Leads.</span></h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">Our certified experts run high-performance ad campaigns on Google, Facebook & Instagram. Average 4.2x ROAS across all client accounts. No lock-in contracts.</p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            {[{val:'4.2x',label:'Avg ROAS',color:'#3b82f6'},{val:'₹120',label:'Avg CPL Meta',color:'#6366f1'},{val:'8.4%',label:'Conversion Rate',color:'#22c55e'}].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold" style={{color:s.color}}>{s.val}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm">Get Free Ads Audit →</Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Before & After DigiUniversal</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border border-red-500/30 rounded-2xl p-6">
              <h3 className="font-bold text-red-400 mb-4">❌ Before DigiUniversal</h3>
              {[['Cost Per Lead','₹650+'],['ROAS','1.2x'],['Conversion Rate','1.8%'],['Wasted Budget','40%+']].map(([k,v],i)=>(
                <div key={i} className="flex justify-between py-2 border-b border-gray-100 dark:border-white/10">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{k}</span>
                  <span className="text-sm font-bold text-red-400">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-white/5 border border-green-500/30 rounded-2xl p-6">
              <h3 className="font-bold text-green-400 mb-4">✅ After DigiUniversal</h3>
              {[['Cost Per Lead','₹120-180'],['ROAS','4.2x+'],['Conversion Rate','8.4%'],['Wasted Budget','Near Zero']].map(([k,v],i)=>(
                <div key={i} className="flex justify-between py-2 border-b border-gray-100 dark:border-white/10">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{k}</span>
                  <span className="text-sm font-bold text-green-400">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#0f1420]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Campaign strategy & setup','Keyword research & audience targeting','Ad copywriting & creative design','Landing page optimization','A/B testing & optimization','Weekly performance reports','Full ad account access','Dedicated account manager'].map((item,i)=>(
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border border-blue-500/30 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get a Free Ads Audit Today</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">We will review your current campaigns and show you exactly where your budget is being wasted — for free.</p>
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 transition text-white px-10 py-4 rounded-full font-semibold">Book Free Audit →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}