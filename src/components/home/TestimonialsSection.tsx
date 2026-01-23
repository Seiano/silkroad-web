'use client';

import { useState } from 'react';
import Image from 'next/image';
import { patientStories, formatNumber } from '@/data/stories';
import Button from '../ui/Button';

const treatmentCategories = [
  { id: 'all', name: 'All Stories' },
  { id: 'dental', name: 'Dental' },
  { id: 'eye', name: 'Eye Care' },
  { id: 'checkup', name: 'Health Checkup' },
  { id: 'tcm', name: 'TCM & Wellness' },
  { id: 'skin', name: 'Skin & Beauty' },
];

const getCategoryForTreatment = (treatmentType: string): string => {
  const lower = treatmentType.toLowerCase();
  if (lower.includes('dental') || lower.includes('implant') || lower.includes('invisalign') || lower.includes('teeth')) return 'dental';
  if (lower.includes('lasik') || lower.includes('eye') || lower.includes('cataract') || lower.includes('smile')) return 'eye';
  if (lower.includes('checkup') || lower.includes('gastro') || lower.includes('fertility')) return 'checkup';
  if (lower.includes('tcm') || lower.includes('acupuncture') || lower.includes('chinese medicine')) return 'tcm';
  if (lower.includes('acne') || lower.includes('hair') || lower.includes('skin') || lower.includes('laser')) return 'skin';
  return 'all';
};

export default function TestimonialsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredStories = selectedCategory === 'all'
    ? patientStories
    : patientStories.filter(s => getCategoryForTreatment(s.treatmentType) === selectedCategory);

  const displayStories = showAll ? filteredStories : filteredStories.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0066CC]/10 text-[#0066CC] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            {patientStories.length}+ Patient Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Real Stories from Real Patients
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            See how patients from around the world saved money and got quality care in China.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {treatmentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setShowAll(false);
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

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.thumbnailUrl}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="absolute top-3 right-3 bg-[#10B981] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Saved {story.savingsAmount}
                </div>

                {/* City Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#0066CC] px-2 py-1 rounded text-xs font-medium">
                  {story.city}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-semibold line-clamp-2 text-sm md:text-base">
                    {story.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Patient Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={story.avatarUrl}
                      alt={story.patientName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#111827] truncate">{story.patientName}</span>
                      <span className="text-lg">{story.countryFlag}</span>
                    </div>
                    <div className="text-xs text-[#6B7280]">{story.treatmentType}</div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#4B5563] text-sm line-clamp-2 mb-3">
                  &quot;{story.highlight}&quot;
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {formatNumber(story.likes)}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                      </svg>
                      {formatNumber(story.comments)}
                    </span>
                  </div>
                  <span className="text-[#0066CC] font-medium">{story.treatmentDays} days</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          {!showAll && filteredStories.length > 6 && (
            <button
              onClick={() => setShowAll(true)}
              className="text-[#0066CC] font-medium hover:underline mb-4 block mx-auto"
            >
              Show {filteredStories.length - 6} more stories
            </button>
          )}
          <Button href="/consult" variant="primary">
            Share Your Story With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
