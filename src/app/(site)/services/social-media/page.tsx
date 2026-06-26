import LeadPopup from '@/components/lead-popup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency Gurgaon | DigiUniversal',
  description: 'Top social media marketing agency in Gurgaon. Instagram, Facebook, LinkedIn, YouTube — grow followers, engagement & sales. 10x follower growth in 90 days.',
  keywords: 'social media marketing agency gurgaon, social media agency india, instagram marketing agency gurgaon, facebook marketing agency india',
};

export default function SocialMediaPage() {
  return (
    <main>
      <section className="pt-24 pb-16 dark:bg-[#0f1420] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">📱 SOCIAL MEDIA MARKETING</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Build a Brand People <span className="text-pink-500">Follow, Trust & Buy From</span></h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">We create scroll-stopping content, grow your audience and turn followers into paying customers across Instagram, Facebook, LinkedIn and YouTube.</p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            {[{val:'10x',label:'Follower Growth',color:'#ec4899'},{val:'8.4%',label:'Avg Engagement',color:'#f59e0b'},{val:'2M+',label:'Monthly Reach',color:'#3b82f6'}].map((s,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold" style={{color:s.color}}>{s.val}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <LeadPopup
  buttonText="Get Free Social Audit →"
  buttonClassName="bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm"
  service="Social Media Management"
/>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Platforms We Manage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {icon:'📸',title:'Instagram',desc:'Reels, Stories, Posts — grow followers & drive sales',color:'#ec4899'},
              {icon:'👍',title:'Facebook',desc:'Pages, Groups, Ads — build community & generate leads',color:'#3b82f6'},
              {icon:'💼',title:'LinkedIn',desc:'B2B content, thought leadership, professional networking',color:'#0ea5e9'},
              {icon:'▶️',title:'YouTube',desc:'Shorts, long-form videos — build authority & SEO value',color:'#ef4444'},
            ].map((p,i)=>(
              <div key={i} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">What is Included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Content calendar & strategy','Graphic design & video editing','Caption writing & hashtag research','Community management & replies','Influencer outreach & collaborations','Monthly analytics & reporting','Paid social boosting','Brand voice & guidelines'].map((item,i)=>(
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                <span className="text-pink-500">✅</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#0f1420]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/10 border border-pink-500/30 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Grow on Social Media?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Book a free social media audit. We will review your profiles and give you an exact plan to 10x your growth in 90 days.</p>
            <Link href="/contact" className="bg-pink-500 hover:bg-pink-600 transition text-white px-10 py-4 rounded-full font-semibold">Get Free Social Audit →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}