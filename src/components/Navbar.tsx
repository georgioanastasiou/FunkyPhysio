'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const highlightRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleMouseEnter = (i: number) => {
    setHoveredIndex(i);
    const el = linkRefs.current[i];
    const highlight = highlightRef.current;
    if (!el || !highlight) return;

    const { top, height } = el.getBoundingClientRect();
    const parentTop = el.parentElement!.getBoundingClientRect().top;

    gsap.to(highlight, {
      y: top - parentTop,
      height,
      opacity: 1,
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    gsap.to(highlightRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4 mt-9">

            {/* Burger button */}
            <div className="relative z-[60]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center w-14 h-14 rounded-[6px] border border-white text-white focus:outline-none hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>

            {/* Logo + text */}
            <Link
              href="/"
              className="flex flex-col items-center transition-all duration-300"
              style={{ transform: scrolled ? 'translateX(-40px)' : 'translateX(0px)' }}
              onClick={() => setIsOpen(false)}
            >
              <Image src="/logo1.png" alt="Funky Physio Logo" width={50} height={50} className="h-10 w-auto" priority />
              <span
                className="font-museo-moderno text-xl font-bold text-white tracking-wide leading-tight transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: scrolled ? '0px' : '40px',
                  opacity: scrolled ? 0 : 1,
                  marginTop: scrolled ? '0px' : '2px',
                }}
              >
                Funky Physio
              </span>
            </Link>

          </div>
        </div>
      </nav>

      {/* Full-screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a0d2e] flex flex-col transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col justify-center flex-1" onMouseLeave={handleMouseLeave}>

          {/* Sliding highlight bar */}
          <div
            ref={highlightRef}
            className="absolute left-0 w-full pointer-events-none"
            style={{ opacity: 0, backgroundColor: 'white', top: 0, height: 0 }}
          />

          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              ref={(el) => { linkRefs.current[i] = el; }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => handleMouseEnter(i)}
              className="relative w-full flex items-center justify-center border-b border-white/10 z-10"
              style={{ padding: '1.2rem 0' }}
            >
              <span
                className="font-syne uppercase tracking-tight transition-colors duration-150 font-black"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: hoveredIndex === i ? '#1a0d2e' : 'white',
                }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        <div className="px-10 pb-14 flex items-center justify-end">
          <p className="font-syne text-xs uppercase tracking-[3px] text-white/30">Barcelona</p>
        </div>
      </div>
    </>
  );
}
