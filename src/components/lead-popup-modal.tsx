'use client';

import { useState } from 'react';
import { useLeadPopup } from '@/context/lead-popup-context';

const WHATSAPP_NUMBER = '919711679777'; // Harsh Saini — DigiUniversal

export default function LeadPopupModal() {
  const { isOpen, closePopup } = useLeadPopup();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [goal, setGoal] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const message = `Hi DigiUniversal! I would like to book a free strategy call.

Name: ${name}
Phone: ${phone}
Business: ${business}
Goal: ${goal || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitting(false);
      setName('');
      setPhone('');
      setBusiness('');
      setGoal('');
      closePopup();
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      onClick={closePopup}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white dark:bg-[#1E293B] rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-white/10 animate-[fadeIn_0.2s_ease-out]"
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-11 h-11 rounded-full bg-green-500/10 flex items-center justify-center text-2xl">
            💬
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Book Free Strategy Call</h3>
            <p className="text-xs text-gray-400">We will reply on WhatsApp within 2 hours</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 XXXXXXXXXX"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              Business Name
            </label>
            <input
              type="text"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="Your company name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
              What do you need help with?
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition"
            >
              <option value="">Select an option</option>
              <option value="SEO">SEO — Rank on Google</option>
              <option value="Google & Meta Ads">Google & Meta Ads</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Performance Marketing">Performance Marketing</option>
              <option value="Web Design">Web Design & Development</option>
              <option value="E-Commerce Marketing">E-Commerce Marketing</option>
              <option value="Not sure">Not sure — need advice</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-semibold text-sm transition disabled:opacity-60"
          >
            {submitting ? (
              'Opening WhatsApp...'
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.76-.881-2.916-1.575-4.077-3.575-.308-.532.308-.495.882-1.65.097-.196.05-.367-.05-.516-.099-.148-.671-1.612-.92-2.207-.241-.579-.487-.5-.668-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.05 3.127 4.97 4.26 2.92 1.135 2.92.756 3.488.71.567-.047 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.054 2.284 7.034L1 24l5.144-1.27A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.95c-2.36 0-4.55-.722-6.39-1.962l-.318-.213-3.844.95.967-3.752-.225-.341A9.928 9.928 0 012.05 12C2.05 6.51 6.51 2.05 12 2.05S21.95 6.51 21.95 12 17.49 21.95 12 21.95z" />
                </svg>
                Continue on WhatsApp
              </>
            )}
          </button>

          <p className="text-xs text-gray-400 text-center">
            We will never spam you. Just a quick chat about your business.
          </p>
        </form>
      </div>
    </div>
  );
}
