import { hospitals } from '@/data/hospitals';
import { priceComparisons } from '@/data/prices';
import { patientStories } from '@/data/stories';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface HospitalPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return hospitals.map((hospital) => ({
    id: hospital.id,
  }));
}

export default async function HospitalPage({ params }: HospitalPageProps) {
  const { id } = await params;
  const hospital = hospitals.find((h) => h.id === id);

  if (!hospital) {
    notFound();
  }

  // Get related procedures at this hospital
  const relatedProcedures = priceComparisons.filter(
    (p) => p.hospitalName === hospital.name
  );

  // Get patient stories from this hospital
  const relatedStories = patientStories.filter(
    (s) => s.hospitalName === hospital.name
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={hospital.image}
          alt={hospital.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Breadcrumb */}
        <div className="absolute top-4 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/80 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/hospitals" className="hover:text-white">Hospitals</Link>
              <span>/</span>
              <span className="text-white">{hospital.name}</span>
            </nav>
          </div>
        </div>

        {/* Hospital Info */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {hospital.level}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-semibold">{hospital.rating}</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {hospital.name}
                </h1>
                <p className="text-xl text-white/80">{hospital.nameZh}</p>
              </div>
              <div className="flex gap-3">
                <Button href="/consult" variant="primary" size="lg">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Hospital</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {hospital.description}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hospital.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[#E6F2FF] rounded-lg p-4">
                    <svg className="w-5 h-5 text-[#0066CC] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-[#003D7A]">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specialties */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Specialties</h2>
              <div className="flex flex-wrap gap-3">
                {hospital.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </section>

            {/* Procedures & Pricing */}
            {relatedProcedures.length > 0 && (
              <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Procedures & Pricing</h2>
                <div className="space-y-4">
                  {relatedProcedures.map((procedure) => (
                    <div key={procedure.id} className="border border-gray-200 rounded-xl p-4 hover:border-[#0066CC] transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{procedure.procedure}</h3>
                          <p className="text-sm text-[#0066CC]">{procedure.procedureCn}</p>
                        </div>
                        <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                          Save {procedure.savingsPercent}%
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                        <div>
                          <div className="text-xs text-gray-500">US Price</div>
                          <div className="text-sm text-red-500 line-through">{procedure.usPrice}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">UK Price</div>
                          <div className="text-sm text-amber-500">{procedure.ukPrice}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">China Price</div>
                          <div className="text-sm font-bold text-[#10B981]">{procedure.chinaPrice}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Patient Stories */}
            {relatedStories.length > 0 && (
              <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Stories</h2>
                <div className="space-y-4">
                  {relatedStories.map((story) => (
                    <div key={story.id} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={story.avatarUrl}
                            alt={story.patientName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">{story.patientName}</span>
                            <span>{story.countryFlag}</span>
                            <span className="bg-[#10B981] text-white px-2 py-0.5 rounded text-xs font-medium">
                              Saved {story.savingsAmount}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">&quot;{story.highlight}&quot;</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-[#F9FAFB] rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Savings</span>
                  <span className="font-bold text-[#10B981]">{hospital.internationalSavings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Consultation From</span>
                  <span className="font-bold text-gray-900">${hospital.consultationFeeFrom}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold">{hospital.rating}</span>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              {/* CTA */}
              <div className="space-y-3">
                <Button href="/consult" className="w-full">
                  Get Free Quote
                </Button>
                <Button href="tel:+861012345678" variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Free consultation · No obligation
              </p>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Why Choose This Hospital</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#0066CC]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Internationally Accredited</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#0066CC]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>English-Speaking Staff</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#0066CC]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>International Patient Center</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#0066CC]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>VIP Services Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
