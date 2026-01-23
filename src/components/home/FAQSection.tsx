'use client';

import { useState } from 'react';
import { faqs, faqCategories } from '@/data/faq';
import Button from '../ui/Button';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = selectedCategory === 'all'
    ? faqs.slice(0, 6)
    : faqs.filter(f => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4B5563]">
            Get answers to common questions about medical tourism in Beijing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#0066CC] text-white'
                  : 'bg-white text-[#4B5563] hover:bg-[#E5E7EB] border border-[#E5E7EB]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F9FAFB] transition-colors"
              >
                <span className="font-medium text-[#111827] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#6B7280] flex-shrink-0 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openId === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-[#4B5563] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All / Contact */}
        <div className="text-center mt-10 space-y-4">
          <p className="text-[#4B5563]">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/faq" variant="outline">
              View All FAQs
            </Button>
            <Button href="/consult" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
