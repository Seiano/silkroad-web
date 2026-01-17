'use client';

import { useState, useEffect } from 'react';
import { patientStories, formatNumber } from '@/data/stories';
import { hospitals } from '@/data/hospitals';
import Link from 'next/link';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const currentStory = patientStories[currentIndex];
  const hospital = hospitals.find(h => h.id === currentStory.hospitalId);

  const handleScroll = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentIndex < patientStories.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 50) {
      handleScroll('down');
    } else if (e.deltaY < -50) {
      handleScroll('up');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleScroll('down');
    } else if (diff < -50) {
      handleScroll('up');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleScroll('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleScroll('up');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div 
      className="h-screen w-full overflow-hidden bg-black relative"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundImage: `url(${currentStory.thumbnailUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-white font-semibold text-xl">SilkRoad Health</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/hospitals" className="text-white/80 hover:text-white transition-colors">
            Hospitals
          </Link>
          <Link href="/stories" className="text-white/80 hover:text-white transition-colors">
            Stories
          </Link>
          <Link href="/consult" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full transition-colors font-medium">
            Free Consultation
          </Link>
        </nav>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Story Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-8 pb-24 md:pb-32">
        <div className="max-w-2xl">
          {/* Patient Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
              {currentStory.patientName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">@{currentStory.patientName.replace(' ', '')}</span>
                <span className="text-2xl">{currentStory.countryFlag}</span>
              </div>
              <span className="text-white/70 text-sm">{currentStory.country}</span>
            </div>
          </div>

          {/* Story Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {currentStory.title}
          </h1>

          {/* Story Highlight */}
          <p className="text-white/90 text-base md:text-lg mb-4 leading-relaxed">
            {currentStory.highlight}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              Saved {currentStory.savingsAmount}
            </span>
            <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
              {currentStory.hospitalName}
            </span>
            <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
              {currentStory.treatmentDays} days
            </span>
          </div>

          {/* Hospital Quick Link */}
          {hospital && (
            <Link 
              href={`/hospitals/${hospital.id}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors text-white px-4 py-2 rounded-lg text-sm"
            >
              <span>{hospital.name}</span>
              <span className="text-emerald-400">- {hospital.internationalSavings} savings</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-32 md:bottom-40 z-10 flex flex-col items-center gap-6">
        <button className="flex flex-col items-center group">
          <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span className="text-white text-xs mt-1">{formatNumber(currentStory.likes)}</span>
        </button>

        <button className="flex flex-col items-center group">
          <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
            </svg>
          </div>
          <span className="text-white text-xs mt-1">{formatNumber(currentStory.comments)}</span>
        </button>

        <button className="flex flex-col items-center group">
          <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
            </svg>
          </div>
          <span className="text-white text-xs mt-1">{formatNumber(currentStory.shares)}</span>
        </button>

        <Link href={`/hospitals/${currentStory.hospitalId}`} className="flex flex-col items-center group">
          <div className="w-12 h-12 bg-emerald-500/80 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-emerald-600/80 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="text-white text-xs mt-1">Hospital</span>
        </Link>
      </div>

      {/* Story Indicators */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
        {patientStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'h-8 bg-white' 
                : 'h-4 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block text-white/80 text-sm">
            <span className="text-emerald-400 font-semibold">{patientStories.length}+</span> success stories from patients worldwide
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link 
              href="/hospitals" 
              className="flex-1 sm:flex-none text-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full transition-colors font-medium"
            >
              View Hospitals
            </Link>
            <Link 
              href="/consult" 
              className="flex-1 sm:flex-none text-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-colors font-semibold"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      {currentIndex < patientStories.length - 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  );
}
