'use client';

import type React from 'react';
import { useState } from 'react';
import { TrendingUp, Target, Search, Globe, Share2, ShoppingCart } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  src: string;
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState('performance');

  const tabs: Tab[] = [
    {
      id: 'performance',
      label: 'Performance Marketing',
      icon: <TrendingUp className="w-5 h-5" />,
      src: '/images/tab-image/tab-image-1.html',
      title: 'Every Rupee You Spend Must Deliver Results.',
      description: 'We run data-driven campaigns across Google, Meta, YouTube and LinkedIn. Every campaign is tracked, tested and scaled based on what actually works. No guesswork, no wasted budget, just measurable business growth.',
    },
    {
      id: 'ads',
      label: 'Google & Meta Ads',
      icon: <Target className="w-5 h-5" />,
      src: '/images/tab-image/tab-image-2.html',
      title: 'Stop Wasting Budget. Start Getting Real Leads.',
      description: 'Our certified experts run high-performance ad campaigns on Google, Facebook and Instagram. We optimize every rupee so you get maximum leads at the lowest possible cost. Average 4.2x ROAS for our clients.',
    },
    {
      id: 'seo',
      label: 'SEO',
      icon: <Search className="w-5 h-5" />,
      src: '/images/tab-image/tab-image-3.html',
      title: 'Rank Higher. Get Found. Grow Organically.',
      description: 'We get your website to Page 1 on Google and keep it there. Our SEO strategies drive consistent organic traffic that converts into real leads and sales, month after month, without paying for every click.',
    },
    {
      id: 'web',
      label: 'Web Design',
      icon: <Globe className="w-5 h-5" />,
      src: '/images/tab-image/tab-image-4.html',
      title: 'Your Website Is Your Best Salesperson.',
      description: 'We build fast, beautiful websites designed to convert visitors into customers. From landing pages to full e-commerce stores, every page is built with one purpose in mind and that is to grow your business.',
    },
    {
      id: 'social',
      label: 'Social Media',
      icon: <Share2 className="w-5 h-5" />,
      src: '/images/tab-image/tab-image-5.html',
      title: 'Build a Brand People Follow, Trust and Buy From.',
      description: 'We create scroll-stopping content, grow your audience and turn followers into paying customers. Whether it is Instagram, LinkedIn, Facebook or YouTube, we handle everything so you can focus on running your business.',
    },
    {
      id: 'ecommerce',
      label: 'E-Commerce',
      icon: <ShoppingCart className="w-5 h-5" />,
      src: '/images/tab-image/tab-image-6.html',
      title: 'Grow Your Online Store at Scale.',
      description: 'We help Shopify, WooCommerce and Amazon sellers grow with targeted strategies that bring the right traffic, increase conversions and recover lost sales through smart retargeting and email automation.',
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-14 md:py-28 dark:bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center px-4">
          <h2 className="mb-3 font-bold text-center text-gray-800 dark:text-white/90 text-2xl sm:text-3xl md:text-title-lg">
            The Only Digital Partner Your Business Will Ever Need
          </h2>
          <p className="max-w-2xl mx-auto leading-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Full-stack digital marketing under one roof. No juggling agencies, no communication gaps, just results.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            <div className="overflow-x-auto custom-scrollbar mx-auto max-w-full sm:max-w-fit relative px-4 sm:px-0">
              <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center h-11 sm:h-12 gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full ${
                      activeTab === tab.id
                        ? 'bg-white dark:text-white/90 dark:bg-white/10 text-gray-800'
                        : 'text-gray-500 dark:text-gray-400 bg-transparent'
                    }`}
                  >
                    {tab.icon}
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 sm:p-6 tab-img-bg overflow-hidden rounded-2xl sm:rounded-4xl mt-8 mx-4 sm:mx-0">
              <div className="p-1.5 sm:p-3 tab-img-overlay">
                <iframe
                  key={currentTab.id + '-mobile'}
                  src={currentTab.src}
                  className="w-full rounded-xl sm:rounded-2xl block sm:hidden"
                  style={{ height: '260px', border: 'none' }}
                />
                <iframe
                  key={currentTab.id + '-desktop'}
                  src={currentTab.src}
                  className="w-full rounded-xl sm:rounded-2xl hidden sm:block"
                  style={{ height: '535px', border: 'none' }}
                />
              </div>
            </div>

            <div className="mt-6 text-center px-4">
              <h2 className="mb-2 text-lg sm:text-xl font-bold text-gray-800 dark:text-white/90">
                {currentTab.title}
              </h2>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
                {currentTab.description}
              </p>
              <button className="px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600">
                Get Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
