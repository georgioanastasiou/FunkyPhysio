'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Loader2 } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  price: number;
  priceId?: string;
}

export default function ProgramsSection() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/programs');
      
      if (!response.ok) {
        throw new Error('Failed to fetch programs');
      }
      
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ programId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();

      if (url) {
        // Redirect to Stripe Checkout
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Exercise Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional exercise programs designed by experts to help you achieve your 
            rehabilitation and fitness goals from the comfort of your home.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-center">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-[#D84795] animate-spin" />
            <span className="ml-3 text-gray-600">Loading programs...</span>
          </div>
        ) : (
          /* Programs Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Program Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    {program.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#D84795]">
                      {formatPrice(program.price)}
                    </span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleBuyNow(program.id)}
                    disabled={checkoutLoading === program.id}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      checkoutLoading === program.id
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#D84795] hover:bg-[#c43d82] text-white'
                    }`}
                  >
                    {checkoutLoading === program.id ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Buy Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && programs.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No programs available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
