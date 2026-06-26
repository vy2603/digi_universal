import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency India | DigiUniversal Gurgaon',
  description: 'Top performance marketing agency in India. Data-driven campaigns across Google, Meta, YouTube & LinkedIn. Average 4.2x ROAS. No lock-in contracts.',
  keywords: 'performance marketing agency india, performance marketing agency, performance marketing gurgaon, digital marketing agency gurgaon',
};

export default function PerformanceMarketingPage() {
  return (
    <main>
      <section className="pt-24 pb-16 dark:bg-[#0f1420] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">📈 PERFORMANCE MARKETING</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Performance Marketing Agency <span className="text-indigo-500">That Delivers Real ROI</span></h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">Every rupee you spend must deliver results. We run data-driven campaigns across Google, Meta, YouTube and LinkedIn — tracked, tested and scaled for maximum ROI.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[{val:'4.2x',label:'Avg ROAS'},{val:'1,840',label:'Leads/Month'},{val:'₹65',label:'Lowest CPL'},{val:'200+',label:'Clients'}].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-500">{s.val}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-indigo-500 hover:bg-indigo-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm">Get Free Strategy Call →</Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Channels We Run</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon:'🎯',title:'Google Ads',desc:'Search, Display, Shopping & YouTube ads with avg 4.8x ROAS',color:'#3b82f6'},
              {icon:'📘',title:'Meta Ads',desc:'Facebook & Instagram campaigns. CPL as low as ₹120',color:'#6366f1'},
              {icon:'▶️',title:'YouTube Ads',desc:'Video campaigns for brand awareness and remarketing',color:'#ef4444'},
              {icon:'💼',title:'LinkedIn Ads',desc:'B2B lead generation for high-ticket clients',color:'#0ea5e9'},
            ].map((c,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#0f1420]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Our 4-Step Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {step:'01',title:'Research',desc:'Keywords, audience, competitors — deep analysis before spending a rupee',time:'Day 1-2'},
              {step:'02',title:'Launch',desc:'Creatives, copy, landing pages — everything set up for maximum conversions',time:'Day 3-7'},
              {step:'03',title:'Optimize',desc:'Daily monitoring, A/B testing, bid adjustments — constant improvement',time:'Week 2+'},
              {step:'04',title:'Scale',desc:'Double down on what works, cut what doesnt — grow profitably',time:'Ongoing'},
            ].map((p,i)=>(
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 border-2 border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-lg mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{p.desc}</p>
                <span className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full">{p.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Get 4.2x ROAS?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Book a free strategy call. We will show you exactly how we can grow your business with performance marketing.</p>
            <Link href="/contact" className="bg-indigo-500 hover:bg-indigo-600 transition text-white px-10 py-4 rounded-full font-semibold">Book Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}