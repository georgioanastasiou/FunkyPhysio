'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const photos = [
  '/basketball/DSC_0079.jpg',
  '/basketball/DSC_0114.jpg',
  '/basketball/DSC_0231.jpg',
  '/basketball/DSC_0676.jpg',
  '/contact-image.png',
  '/contact-image2.png',
];

export default function Contact() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div>
      {/* Split Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-screen">
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
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
        </div>

        {/* Right — Minimalistic Contact */}
        <div className="w-full lg:w-1/2 bg-[#f5f0eb] flex flex-col justify-center px-10 md:px-20 py-20">
          <p className="text-xs uppercase tracking-[4px] text-gray-400 font-syne mb-6">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-semibold font-syne text-black leading-tight mb-12">
            Let&apos;s get<br />in touch
          </h1>
          <div className="space-y-2 mb-12">
            <a href="mailto:george@funkyphysio.com" className="block text-gray-500 hover:text-black transition-colors font-syne text-sm tracking-wide">
              george@funkyphysio.com
            </a>
            <a href="tel:+34675335798" className="block text-gray-500 hover:text-black transition-colors font-syne text-sm tracking-wide">
              +34 675 335 798
            </a>
            <p className="text-gray-400 font-syne text-sm tracking-wide">Poblenou, Barcelona</p>
          </div>
          <div className="w-12 h-px bg-gray-300 mb-12" />
          {submitted ? (
            <p className="text-black font-syne text-lg">Thank you — we&apos;ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-b border-gray-300 pb-2">
                <input type="text" placeholder="Your name" required className="w-full bg-transparent text-black placeholder-gray-400 font-syne text-sm outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input type="email" placeholder="Your email" required className="w-full bg-transparent text-black placeholder-gray-400 font-syne text-sm outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input type="text" placeholder="Subject" className="w-full bg-transparent text-black placeholder-gray-400 font-syne text-sm outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <textarea placeholder="Message" rows={3} className="w-full bg-transparent text-black placeholder-gray-400 font-syne text-sm outline-none resize-none" />
              </div>
              <button type="submit" className="flex items-center gap-3 text-black font-syne text-sm uppercase tracking-[3px] hover:gap-5 transition-all duration-300 group">
                Send <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          )}
        </div>

        {/* ── Centered Overlay Card ── */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-[10px] border-2 border-gray-400/60 shadow-2xl">
          <div className="flex w-[520px] h-[300px] overflow-hidden">
          {/* Left half — Newsletter (solid bg) */}
          <div className="w-1/2 h-full bg-[#f2ede8] flex flex-col justify-between px-8 py-9">
            <p className="text-xs font-semibold font-syne text-black tracking-widest uppercase">Newsletter</p>
            <div className="flex-1" />
            {newsletterSubmitted ? (
              <p className="text-[10px] font-syne text-gray-500 uppercase tracking-widest">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex items-end border-b border-gray-400 pb-1 gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="VOTRE EMAIL"
                    className="flex-1 bg-transparent text-[10px] uppercase tracking-[3px] text-gray-500 placeholder-gray-400 font-syne outline-none"
                  />
                  <button type="submit" className="text-black hover:scale-110 transition-transform text-sm leading-none pb-0.5">
                    &#8599;
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right half — Frosted glass with logo + address */}
          <div
            className="w-1/2 h-full flex flex-col items-center justify-between py-8 px-6"
            style={{
              background: 'rgba(242, 237, 232, 0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <Image
                src="/logo1.png"
                alt="Funky Physio"
                width={120}
                height={80}
                className="object-contain opacity-20"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[3px] text-gray-500 font-syne text-center leading-loose">
              Carrer de Roc Boronat, 1<br />Barcelona 08005
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-black text-center mb-10">Find Us Here</h2>
          <div className="rounded-[20px] overflow-hidden shadow-xl w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.95700064926!2d2.1996013763483595!3d41.396740171298674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a314edf0f183%3A0x75c94eaecce4d61d!2sCarrer%20de%20Roc%20Boronat%2C%201%2C%20Sant%20Mart%C3%AD%2C%2008005%20Barcelona!5e0!3m2!1sen!2ses!4v1776855970586!5m2!1sen!2ses"
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
