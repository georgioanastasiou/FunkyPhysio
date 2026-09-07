'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const photos = [
  '/whatwedo-diagnose.jpg',
  '/whatwedo-diagnoserecovery.jpg',
  '/philosophy-footmobilization.jpg',
  '/whatwedo-massage.jpg',
  '/whatwedo-move.jpg',
  '/whatwedo-release.jpg',
];

export default function Contact() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % photos.length;
        setNext(nextIndex);
        return prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (next === null || !nextRef.current) return;
    gsap.fromTo(
      nextRef.current,
      { scale: 0, opacity: 1 },
      {
        scale: 1,
        duration: 2,
        ease: 'power3.inOut',
        onComplete: () => {
          setCurrent(next);
          setNext(null);
        },
      }
    );
  }, [next]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(false);
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Split Hero Section — burger sits over the photo side (left) at every
          scroll position within this section, so one theme covers it. */}
      <section data-nav-theme="default" className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Left — Photo Slideshow */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={photos[current]}
              alt="Funky Physio"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {next !== null && (
            <div
              ref={nextRef}
              className="absolute inset-0"
              style={{ transformOrigin: 'center center' }}
            >
              <Image
                src={photos[next]}
                alt="Funky Physio"
                fill
                className="object-cover object-center"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-funky-black/10 pointer-events-none z-10" />
        </div>

        {/* Right — Minimalistic Contact */}
        <div className="w-full lg:w-1/2 bg-[#f5f0eb] flex flex-col justify-center px-10 md:px-20 py-20">
          <p className="text-xs uppercase tracking-[4px] text-gray-400 font-syne mb-6">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-semibold font-syne text-funky-black leading-tight mb-12">
            Let&apos;s get<br />in touch
          </h1>
          <div className="space-y-2 mb-12">
            <a href="mailto:george@funkyphysio.com" className="block text-gray-500 hover:text-funky-black transition-colors font-syne text-sm tracking-wide">
              george@funkyphysio.com
            </a>
            <a href="tel:+34675335798" className="block text-gray-500 hover:text-funky-black transition-colors font-syne text-sm tracking-wide">
              +34 675 335 798
            </a>
            <p className="text-gray-400 font-syne text-sm tracking-wide">Poblenou, Barcelona</p>
          </div>
          <div className="w-12 h-px bg-gray-300 mb-12" />
          {submitted ? (
            <p className="text-funky-black font-syne text-lg">Thank you — we&apos;ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-b border-gray-300 pb-2">
                <input name="name" type="text" placeholder="Your name" required className="w-full bg-transparent text-funky-black placeholder-gray-400 font-syne text-sm outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input name="email" type="email" placeholder="Your email" required className="w-full bg-transparent text-funky-black placeholder-gray-400 font-syne text-sm outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input name="subject" type="text" placeholder="Subject" className="w-full bg-transparent text-funky-black placeholder-gray-400 font-syne text-sm outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <textarea name="message" placeholder="Message" rows={3} required className="w-full bg-transparent text-funky-black placeholder-gray-400 font-syne text-sm outline-none resize-none" />
              </div>
              {submitError && (
                <p className="text-red-500 font-syne text-xs">Something went wrong — please try again, or email george@funkyphysio.com directly.</p>
              )}
              <button type="submit" disabled={submitting} className="flex items-center gap-3 text-funky-black font-syne text-sm uppercase tracking-[3px] hover:gap-5 transition-all duration-300 group disabled:opacity-50 disabled:hover:gap-3">
                {submitting ? 'Sending…' : 'Send'} <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section data-nav-theme="light" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-funky-black text-center mb-10">Find Us Here</h2>
          <div className="rounded-[20px] overflow-hidden shadow-xl w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps?q=Funky+Physio,+Carrer+de+Roc+Boronat+1,+08005+Barcelona&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%)', transition: 'filter 0.2s ease' }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            📍 Carrer de Roc Boronat, 1, 08005 Barcelona, Spain
          </p>
        </div>
      </section>
    </div>
  );
}
