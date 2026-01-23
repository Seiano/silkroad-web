'use client';

import { useState } from 'react';
import { priceComparisons, categories } from '@/data/prices';
import Button from '../ui/Button';

export default function PriceComparisonSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPrices = selectedCategory === 'all'
    ? priceComparisons.slice(0, 4)
    : priceComparisons.filter(p => p.category === selectedCategory).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#059669] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Compare Medical Costs & Save Up to 85%
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            See exactly how much you can save on everyday medical procedures in China compared to US and UK prices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.slice(0, 6).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#0066CC] text-white'
                  : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredPrices.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="bg-[#F9FAFB] px-6 py-4 border-b border-[#E5E7EB]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827]">
                      {item.procedure}
                    </h3>
                    <p className="text-sm text-[#0066CC]">{item.procedureCn}</p>
                  </div>
                  <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save {item.savingsPercent}%
                  </span>
                </div>
              </div>

              {/* Price Comparison */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* US Price */}
                  <div className="text-center">
                    <div className="text-2xl mb-1">🇺🇸</div>
                    <div className="text-xs text-[#6B7280] mb-1">United States</div>
                    <div className="text-sm font-semibold text-[#EF4444] line-through">
                      {item.usPrice}
                    </div>
                  </div>

                  {/* UK Price */}
                  <div className="text-center">
                    <div className="text-2xl mb-1">🇬🇧</div>
                    <div className="text-xs text-[#6B7280] mb-1">United Kingdom</div>
                    <div className="text-sm font-semibold text-[#F59E0B]">
                      {item.ukPrice}
                    </div>
                  </div>

                  {/* China Price */}
                  <div className="text-center">
                    <div className="text-2xl mb-1">🇨🇳</div>
                    <div className="text-xs text-[#6B7280] mb-1">{item.city}</div>
                    <div className="text-lg font-bold text-[#10B981]">
                      {item.chinaPrice}
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="bg-[#10B981]/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#059669] font-medium">Your Savings</span>
                    <span className="text-xl font-bold text-[#059669]">{item.savings}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-[#4B5563] mb-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{item.hospitalName}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{item.treatmentDays}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* CTA */}
                <Button href="/consult" variant="outline" className="w-full">
                  Get Quote for This Procedure
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button href="/prices" variant="primary">
            View All Procedures & Prices
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#9CA3AF] mt-6">
          * Prices are estimates and may vary based on individual conditions. Final quotes provided after medical review.
        </p>
      </div>
    </section>
  );
}
