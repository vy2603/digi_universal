export const metadata = {
  title: 'Contact Us | Best Digital Marketing Agency in Gurgaon — DigiUniversal',
  description: 'Get in touch with DigiUniversal, a leading digital marketing agency in Gurgaon. Book a free 30-minute strategy call. We serve clients in India, UAE, UK, USA, Australia and 30+ countries worldwide.',
};

export default function ContactPage() {
  return (
    <main className="dark:bg-[#171F2E] min-h-screen">

      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500 opacity-5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-6">
            Free Strategy Call
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Let us Build Something <span className="text-primary-500">Great Together</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We will audit your digital presence, analyze your competitors and give you a clear growth plan — no obligation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Get in Touch</h2>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              {[
                { icon: '📞', title: 'Call / WhatsApp', value: '+91 97116 79777', sub: 'Mon-Sat, 9AM-7PM IST' },
                { icon: '👤', title: 'Founder', value: 'Harsh Saini', sub: 'Reach out directly anytime' },
                { icon: '📧', title: 'Email', value: 'sainiharsh2325@gmail.com', sub: 'We reply within 2 business hours' },
                { icon: '📍', title: 'Location', value: 'Gurgaon, Haryana, India', sub: 'Serving clients in 30+ countries' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">{item.title}</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{item.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4">What Happens on the Call?</h3>
              <ul className="space-y-3">
                {[
                  'We audit your current digital presence',
                  'Analyze your top 3 competitors',
                  'Identify your biggest growth opportunities',
                  'Give you a clear 3-step action plan',
                  'Answer all your questions — honestly',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">No sales pressure. No hidden agenda. Just pure value.</p>
            </div>

            {/* Countries */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-3">We serve clients in:</p>
              <div className="flex flex-wrap gap-2">
                {['🇮🇳 India', '🇦🇪 UAE', '🇬🇧 UK', '🇺🇸 USA', '🇦🇺 Australia', '🇨🇦 Canada', '🇸🇬 Singapore'].map((country) => (
                  <span key={country} className="px-3 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-gray-400">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Book Your Free Call</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Fill in your details and we will reach out within 2 hours.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Full Name *</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Business Name *</label>
                  <input type="text" placeholder="Your company" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Email Address *</label>
                <input type="email" placeholder="hello@yourcompany.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Phone / WhatsApp *</label>
                <input type="tel" placeholder="+91 or country code" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Website URL</label>
                <input type="url" placeholder="https://yourwebsite.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Primary Goal *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition">
                  <option value="">Select your main goal</option>
                  <option>More leads from Google Ads</option>
                  <option>Rank higher on Google (SEO)</option>
                  <option>Social Media Growth</option>
                  <option>New Website</option>
                  <option>E-Commerce Growth</option>
                  <option>Full Digital Marketing Strategy</option>
                  <option>Not sure — need your advice</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Monthly Budget Range</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition">
                  <option value="">Select budget range</option>
                  <option>Under ₹25,000/month</option>
                  <option>₹25,000 - ₹50,000/month</option>
                  <option>₹50,000 - ₹1,00,000/month</option>
                  <option>₹1,00,000 - ₹3,00,000/month</option>
                  <option>Above ₹3,00,000/month</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Tell us about your business</label>
                <textarea rows={3} placeholder="What does your business do? Who are your customers? What is your biggest challenge right now?" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition resize-none" />
              </div>

              <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-semibold transition text-sm">
                Send Message & Book Free Strategy Call →
              </button>

              <p className="text-xs text-gray-400 text-center">We respond within 2 business hours · No spam ever</p>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}