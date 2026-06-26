'use client';

import { useState } from 'react';

const projects = [
  { name: 'Signature Global City 37D', location: 'Sector 37D, Gurgaon', type: 'Affordable Luxury Apartments', leads: 486, cost: '₹195', roas: '6.8x', budget: '₹55K/mo', color: '#f59e0b', emoji: '🏘️' },
  { name: 'M3M Golf Estate', location: 'Sector 65, Gurgaon', type: 'Premium Residences', leads: 412, cost: '₹380', roas: '8.4x', budget: '₹95K/mo', color: '#22c55e', emoji: '⛳' },
  { name: 'Godrej Meridien', location: 'Sector 106, Gurgaon', type: 'Luxury Apartments', leads: 356, cost: '₹290', roas: '7.8x', budget: '₹80K/mo', color: '#3b82f6', emoji: '🏙️' },
  { name: 'Sobha City', location: 'Sector 108, Gurgaon', type: '3/4 BHK Apartments', leads: 520, cost: '₹210', roas: '6.5x', budget: '₹60K/mo', color: '#6366f1', emoji: '🏠' },
  { name: 'Central Park Flower Valley', location: 'Sector 32-33, Sohna', type: 'Township Project', leads: 680, cost: '₹180', roas: '5.9x', budget: '₹50K/mo', color: '#ec4899', emoji: '🌸' },
  { name: 'Emaar Business District', location: 'MG Road, Gurgaon', type: 'Commercial Spaces', leads: 198, cost: '₹520', roas: '11x', budget: '₹1.5L/mo', color: '#14b8a6', emoji: '🏢' },
];

const stats = [
  { val: '5,200+', label: 'Real Estate Leads Generated', color: '#22c55e' },
  { val: '₹280', label: 'Avg Cost Per Lead', color: '#3b82f6' },
  { val: '8.2x', label: 'Avg ROAS', color: '#f59e0b' },
  { val: '50+', label: 'Projects in Gurgaon', color: '#ec4899' },
];

export default function RealEstateSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-14 md:py-24 dark:bg-[#0f1420] bg-gray-50">
      <div className="wrapper max-w-[1008px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-4 text-center">
            🏠 REAL ESTATE SPECIALIST
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 px-2">
            Gurgaon&apos;s #1 Real Estate{' '}
            <span className="text-orange-500">Lead Generation Agency</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            We have generated 5,200+ qualified buyer leads for premium Gurgaon projects — from luxury apartments to commercial spaces. Real leads. Real buyers. Real closings.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 sm:p-5 text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: s.color }}>{s.val}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden mb-10">
          <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-white/10">
            <h3 className="font-bold text-gray-800 dark:text-white text-base sm:text-lg">Live Project Results — Gurgaon</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">Tap any project to see detailed results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Project List */}
            <div className="border-r-0 md:border-r border-b md:border-b-0 border-gray-100 dark:border-white/10 max-h-[340px] md:max-h-none overflow-y-auto">
              {projects.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 cursor-pointer transition-all border-b border-gray-100 dark:border-white/10 ${active === i ? 'bg-orange-500/10' : 'hover:bg-gray-50 dark:hover:bg-white/5'}`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0" style={{ background: p.color + '20' }}>
                    {p.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 dark:text-white text-xs sm:text-sm truncate">{p.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{p.location}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs sm:text-sm font-bold" style={{ color: p.color }}>{p.roas}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">ROAS</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Detail */}
            <div className="p-5 sm:p-6 flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl mb-4">{projects[active].emoji}</div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1">{projects[active].name}</h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{projects[active].location}</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full mb-6 w-fit" style={{ background: projects[active].color + '20', color: projects[active].color }}>
                {projects[active].type}
              </span>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{projects[active].leads}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Leads Generated</div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold" style={{ color: projects[active].color }}>{projects[active].cost}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Cost Per Lead</div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-500">{projects[active].roas}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">ROAS Achieved</div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{projects[active].budget}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ad Budget</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/10 border border-orange-500/30 rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 px-2">
            Have a Real Estate Project in Gurgaon?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xl mx-auto text-sm sm:text-base px-2">
            We know Gurgaon&apos;s real estate market inside out. Tell us your project — we&apos;ll show you exactly how many leads we can generate and at what cost, before you spend a single rupee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold text-sm">
              Get Free Real Estate Audit →
            </a>
            <a href="/contact" className="border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition px-8 py-3 rounded-full font-semibold text-sm">
              View All Case Studies
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
