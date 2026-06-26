"use client";

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Agarwal',
    company: 'Real Estate Developer, Gurgaon',
    initials: 'RA',
    color: '#3b82f6',
    rating: 5,
    testimonial:
      'DigiUniversal ne hamare Gurgaon project ke liye 486 qualified leads generate kiye — sirf ₹195 per lead mein. Pehle hum ₹800+ per lead spend karte the. Best decision tha unhe hire karna.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Healthcare Clinic, Delhi NCR',
    initials: 'PS',
    color: '#ec4899',
    rating: 5,
    testimonial:
      'Hamari clinic ki online bookings 3x ho gayi sirf 4 mahine mein. Google Ads aur SEO ka combination bahut kaam aaya. DigiUniversal ki team bahut professional aur responsive hai.',
  },
  {
    id: 3,
    name: 'Amit Verma',
    company: 'E-commerce Store, Noida',
    initials: 'AV',
    color: '#22c55e',
    rating: 5,
    testimonial:
      'Humne 3 agencies try ki thi pehle — kisi ne results nahi diye. DigiUniversal ne pehle 60 din mein hi Google Ads ka ROAS 4.2x kar diya. Revenue double ho gayi 6 mahine mein.',
  },
  {
    id: 4,
    name: 'Sunita Mehta',
    company: 'Fashion Brand, Jaipur',
    initials: 'SM',
    color: '#f59e0b',
    rating: 5,
    testimonial:
      'Instagram pe hamare followers 1,200 se 28,000 ho gaye 5 mahine mein — aur ye real customers hain, fake nahi. Online sales 3x ho gayi. DigiUniversal jaisi agency pehle nahi mili.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    company: 'Education Institute, Chandigarh',
    initials: 'VS',
    color: '#6366f1',
    rating: 5,
    testimonial:
      'Hamare coaching institute ke liye lead generation completely transform ho gayi. Pehle sirf walk-ins aate the, ab 200+ monthly inquiries online aati hain. Fees vasool ho gayi pehle month mein.',
  },
  {
    id: 6,
    name: 'Neha Gupta',
    company: 'Interior Design Studio, Mumbai',
    initials: 'NG',
    color: '#14b8a6',
    rating: 5,
    testimonial:
      'Website design bilkul naya banwaya DigiUniversal se — aur SEO bhi. Ab Google pe "interior designer Mumbai" search karne pe Page 1 pe aate hain. Inquiries 5x badh gayi hain.',
  },
  {
    id: 7,
    name: 'Raj Kapoor',
    company: 'SaaS Startup, Bangalore',
    initials: 'RK',
    color: '#3b82f6',
    rating: 5,
    testimonial:
      'B2B leads ke liye LinkedIn aur Google Ads dono run karwaye. Cost per qualified lead ₹380 aa raha hai jo industry average se 60% kam hai. Team bahut data-driven hai.',
  },
  {
    id: 8,
    name: 'Ahmed Al-Farsi',
    company: 'Real Estate Company, Dubai UAE',
    initials: 'AA',
    color: '#f59e0b',
    rating: 5,
    testimonial:
      'What I love most is the communication. I always know what is happening with my campaigns. No surprises, no excuses — just results. Our leads doubled within 3 months.',
  },
  {
    id: 9,
    name: 'Sarah Mitchell',
    company: 'E-commerce Brand, United Kingdom',
    initials: 'SM',
    color: '#ec4899',
    rating: 5,
    testimonial:
      'DigiUniversal completely transformed our online presence. We went from 200 website visitors/month to 8,000+ in just 5 months. The team is proactive, transparent, and genuinely invested in our success.',
  },
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  return (
    <section className="md:py-28 py-14 relative">
      <div className="wrapper">
        <div>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
              What Our Clients Say
            </h2>
            <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
              200+ businesses across India and 30+ countries trust DigiUniversal to grow their brand online. Here is what some of them have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-[72rem] mx-auto">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="mt-8 text-center relative z-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none"
            >
              <span>{showAll ? 'Show less...' : 'Show more...'}</span>
            </button>
          </div>
        </div>
      </div>

      {!showAll && (
        <div className="white-gradient h-[264px] w-full absolute bottom-0"></div>
      )}
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
      <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
        <div
          className="size-13 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0"
          style={{ background: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div className="flex-1">
          <h3 className="text-gray-800 font-semibold dark:text-white/90">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.company}
          </p>
          <div className="flex gap-0.5 mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">⭐</span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
        <p className="text-base leading-6 text-gray-700 dark:text-gray-400">
          {testimonial.testimonial}
        </p>
      </div>
    </div>
  );
}