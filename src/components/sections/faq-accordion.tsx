"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How long does it take to see results from digital marketing?",
      answer:
        "It depends on the service. Google & Meta Ads can generate leads within 2–4 weeks. SEO typically takes 3–6 months for meaningful results but delivers long-term, compounding growth. Social media builds an engaged audience in 3–6 months of consistent work. We set clear timelines and milestones from day one so you always know what to expect.",
    },
    {
      id: 2,
      question: "Do you work with businesses outside India?",
      answer:
        "Absolutely. DigiUniversal is a global agency — we have active clients across 30+ countries including the USA, UK, UAE, Canada, Australia, Singapore and Europe. Our team is experienced in international SEO, multi-currency ad campaigns, and culture-specific content strategies for every major market.",
    },
    {
      id: 3,
      question: "How much should I budget for digital marketing?",
      answer:
        "A general rule is 7–12% of your revenue. For paid ads specifically, we recommend a minimum of ₹15,000–20,000/month to gather enough data to optimize. For SEO and social media, our retainers start at competitive rates. We always work within your budget and prioritize channels with the highest ROI for your specific business.",
    },
    {
      id: 4,
      question: "What makes DigiUniversal different from other agencies?",
      answer:
        "Three things: (1) We are ROI-obsessed — every strategy ties back to revenue, not vanity metrics like likes or impressions. (2) We have genuine global experience across 30+ countries and 40+ industries. (3) We treat your marketing budget like our own money — no bloated retainers, no lock-in contracts, no hiding behind jargon. Just transparent work and measurable results.",
    },
    {
      id: 5,
      question: "Do you offer a free consultation or audit?",
      answer:
        "Yes! We offer a free 30-minute strategy call where we deep-dive into your current digital presence, analyze your competitors, and identify quick wins. You'll walk away with a clear picture of where you stand and what to do next — with zero obligation to work with us. Book yours today from the contact page.",
    },
    {
      id: 6,
      question: "Can I hire DigiUniversal for just one service, or do I need a package?",
      answer:
        "You can absolutely hire us for a single service — SEO only, ads only, or just a website redesign. Many clients start with one service and expand as they see results. We also offer full-service packages for businesses that want a complete, integrated digital marketing strategy managed under one roof.",
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Honest answers to the questions every business owner asks before working with a digital marketing agency.
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
