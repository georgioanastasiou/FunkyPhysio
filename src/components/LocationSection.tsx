'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const locations = [
  {
    title: 'At Funky Studio',
    description: 'In-person sessions in a fully equipped, professional studio environment.',
    prices: ['45 min / EUR 60', '60 min / EUR 70'],
    image: '/funkydesk.png',
  },
  {
    title: 'Online Sessions',
    description: 'Guided virtual sessions tailored to your needs, wherever you are.',
    prices: ['60 min / EUR 60'],
    image: '/therapeutic-training.png',
  },
  {
    title: 'At your place',
    description: 'Personalized treatment delivered in the comfort of your home.',
    prices: ['60 min / EUR 90'],
    image: '/massage.png',
  },
];

export default function LocationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  // Track the cursor continuously (not just while hovering) so the preview
  // image is already at the right spot the moment it fades in on hover,
  // instead of popping in from a stale position.
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50 });
    quickX.current = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    quickY.current = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const active = locations[activeIndex];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-syne text-lg font-bold text-black mb-10 sm:mb-16 tracking-wide">\Location of your choice</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
          {/* List of location options */}
          <div className="flex flex-col gap-[27px] sm:gap-[35px]">
            {locations.map((loc, i) => (
              <button
                key={loc.title}
                type="button"
                onMouseEnter={() => { setActiveIndex(i); setHovering(true); }}
                onMouseLeave={() => setHovering(false)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className="text-left font-syne text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight transition-colors duration-300 w-fit"
                style={{ color: activeIndex === i ? '#111111' : '#B0A898' }}
              >
                {loc.title}
              </button>
            ))}
          </div>

          {/* Price panel — swaps content to match the active location */}
          <div className="relative p-8 flex flex-col gap-4 bg-white overflow-hidden w-full">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="98%" height="98%" fill="none" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>
            <div className="flex flex-col gap-2">
              {active.prices.map((price) => (
                <div key={price} className="text-black text-xl font-medium font-syne leading-8">{price}</div>
              ))}
            </div>
            <p className="opacity-80 text-black text-base font-medium font-syne leading-6">{active.description}</p>
          </div>
        </div>
      </div>

      {/* Preview image that trails the cursor while a location is hovered — desktop only.
          mix-blend-darken sinks it behind the black list text: darken always keeps
          whichever pixel is darker, and black text is darker than any photo pixel,
          so the words stay legible on top without needing real z-index stacking. */}
      <div
        ref={imageRef}
        aria-hidden
        className="hidden lg:block fixed top-0 left-0 z-0 mix-blend-darken pointer-events-none overflow-hidden transition-opacity duration-300"
        style={{ width: 220, height: 280, opacity: hovering ? 1 : 0 }}
      >
        <Image src={active.image} alt="" fill sizes="220px" className="object-cover" />
      </div>
    </section>
  );
}
