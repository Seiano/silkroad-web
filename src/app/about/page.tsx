import Image from 'next/image';
import { teamMembers, serviceProcess, visaInfo } from '@/data/about';
import { stats } from '@/data/stats';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About Us - SilkRoad Health | Medical Tourism Experts',
  description: 'Learn about SilkRoad Health, our team of medical tourism experts, our service process, and how we help international patients access world-class healthcare in Beijing.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003D7A] to-[#0066CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Partner in Medical Tourism
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            SilkRoad Health bridges the gap between international patients and world-class healthcare in Beijing, making quality medical care accessible and affordable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe everyone deserves access to the best medical care, regardless of where they live or their financial situation. Beijing&apos;s top hospitals offer world-class treatment at a fraction of Western costs, but navigating the healthcare system in a foreign country can be daunting.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                That&apos;s where we come in. SilkRoad Health removes every barrier between you and the care you need. From your first inquiry to your return home, we handle every detail so you can focus on what matters most: your health.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#0066CC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-[#0066CC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 text-[#0066CC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800"
                alt="Medical team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Medical Journey, Step by Step
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven 6-step process ensures a smooth, stress-free experience from consultation to recovery.
            </p>
          </div>

          <div className="space-y-6">
            {serviceProcess.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#0066CC] rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-[#0066CC] font-medium">{step.titleCn}</span>
                      <span className="bg-[#E6F2FF] text-[#0066CC] px-3 py-1 rounded-full text-sm">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < serviceProcess.length - 1 && (
                  <div className="hidden md:block ml-8 mt-4">
                    <svg className="w-4 h-8 text-gray-300" fill="currentColor" viewBox="0 0 16 32">
                      <path d="M8 0v28M4 24l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your care and comfort throughout your medical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#0066CC] text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-3">{member.roleCn}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.languages.map((lang) => (
                      <span key={lang} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Guide Section */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {visaInfo.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {visaInfo.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {visaInfo.types.map((visa) => (
              <div key={visa.type} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{visa.type}</h3>
                  <span className="bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm">
                    {visa.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong>Best for:</strong> {visa.bestFor}
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {visa.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Visa Support */}
          <div className="bg-[#0066CC] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">We Handle Your Visa Support</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {visaInfo.support.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <Button href="/consult" variant="secondary" size="lg">
              Get Visa Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free consultation with our medical team. We&apos;ll review your case and provide personalized recommendations with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/consult" size="lg">
              Get Free Consultation
            </Button>
            <Button href="/hospitals" variant="outline" size="lg">
              View Partner Hospitals
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
