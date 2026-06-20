'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Loader2, Play, Clock, Dumbbell, Tag, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import VideoModal from './VideoModal';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface Program {
  id: string;
  title: string;
  description: string;
  price: number;
  priceId?: string;
  videoUrl: string;
  thumbnail: string;
  difficulty: Difficulty;
  duration: string;
  exercises: number;
  category: string;
  features: string[];
}

const difficultyColors: Record<Difficulty, string> = {
  Beginner: 'bg-green-100 text-green-700 border border-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
  Advanced: 'bg-red-100 text-red-700 border border-red-200',
};

const CATEGORIES = ['All', 'Rehabilitation', 'Post-Surgery', 'Office Health', 'Sports', 'Senior Health', 'Bundle'];

export default function ProgramsSection() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/programs');
      if (!response.ok) throw new Error('Failed to fetch programs');
      const data = await response.json();
      setPrograms(data);
      setError(null);
    } catch (err) {
      setError('Unable to load programs. Please try again later.');
      console.error('Error fetching programs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = async (programId: string) => {
    try {
      setCheckoutLoading(programId);
      setError(null);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ programId }),
      });
      if (!response.ok) throw new Error('Failed to create checkout session');
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError('Unable to process checkout. Please try again.');
      console.error('Checkout error:', err);
      setCheckoutLoading(null);
    }
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  const filtered = activeCategory === 'All'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D84795]/10 text-[#D84795] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Exercise Prescription
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Exercise Programs
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Physio-designed programs with HD video demos. Watch a free preview before you buy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#D84795] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#D84795] hover:text-[#D84795]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-center">{error}</p>
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 text-[#D84795] animate-spin" />
            <span className="ml-3 text-gray-600">Loading programs...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo({ url: program.videoUrl, title: program.title })}
                >
                  <Image
                    src={program.thumbnail}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#D84795] ml-1" fill="#D84795" />
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  {/* Difficulty badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColors[program.difficulty]}`}>
                      {program.difficulty}
                    </span>
                  </div>
                  {/* Preview label */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
                      Free Preview
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#D84795]" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Dumbbell className="w-4 h-4 text-[#D84795]" />
                      {program.exercises} exercises
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Expandable features */}
                  <button
                    onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
                    className="flex items-center gap-1 text-[#D84795] text-sm font-medium mb-3 hover:underline"
                  >
                    <Tag className="w-4 h-4" />
                    What&apos;s included
                    {expandedId === program.id
                      ? <ChevronUp className="w-4 h-4" />
                      : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {expandedId === program.id && (
                    <ul className="mb-4 space-y-1.5">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(program.price)}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">one-time</span>
                    </div>
                    <button
                      onClick={() => setActiveVideo({ url: program.videoUrl, title: program.title })}
                      className="text-sm text-[#D84795] hover:underline font-medium flex items-center gap-1"
                    >
                      <Play className="w-3.5 h-3.5" fill="#D84795" />
                      Preview
                    </button>
                  </div>

                  {/* Buy button */}
                  <button
                    onClick={() => handleBuyNow(program.id)}
                    disabled={checkoutLoading === program.id}
                    className={`mt-4 w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all text-sm ${
                      checkoutLoading === program.id
                        ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                        : 'bg-[#D84795] hover:bg-[#c43d82] text-white shadow-md hover:shadow-lg active:scale-95'
                    }`}
                  >
                    {checkoutLoading === program.id ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filtered.length === 0 && !error && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No programs found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-[#D84795] font-medium hover:underline"
            >
              View all programs
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo.url}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
