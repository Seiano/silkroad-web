import { hospitals } from '@/data/hospitals';
import Link from 'next/link';

export const metadata = {
  title: 'Top Beijing Hospitals - SilkRoad Health',
  description: 'Explore China\'s top-tier AAA hospitals in Beijing. World-class cardiac surgery, neurosurgery, oncology, and more at 60-85% less than US prices.',
};

export default function HospitalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">SilkRoad Health</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/hospitals" className="text-emerald-600 font-medium">
              Hospitals
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Stories
            </Link>
            <Link href="/consult" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full transition-colors font-medium">
              Free Consultation
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beijing&apos;s Top-Tier Hospitals
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Access world-class healthcare at China&apos;s most prestigious medical institutions. 
            Save 60-85% compared to US/UK prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm text-emerald-100">AAA Hospitals</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">60-85%</div>
              <div className="text-sm text-emerald-100">Cost Savings</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm text-emerald-100">Intl Patients/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Link 
              key={hospital.id} 
              href={`/hospitals/${hospital.id}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              {/* Hospital Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${hospital.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {hospital.level}
                  </span>
                </div>
              </div>

              {/* Hospital Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {hospital.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{hospital.nameZh}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {hospital.specialties.slice(0, 3).map((specialty) => (
                    <span 
                      key={specialty}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                  {hospital.specialties.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{hospital.specialties.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">{hospital.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-600 font-semibold">{hospital.internationalSavings}</div>
                    <div className="text-xs text-gray-500">savings vs US</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get a free consultation with our medical coordinators. We&apos;ll help you find the right hospital and specialist for your needs.
          </p>
          <Link 
            href="/consult"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 SilkRoad Health. All rights reserved.</p>
          <p className="mt-2">Connecting international patients with world-class healthcare in Beijing.</p>
        </div>
      </footer>
    </div>
  );
}
