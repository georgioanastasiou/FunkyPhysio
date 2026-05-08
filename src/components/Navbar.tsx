'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#331D3D]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image src="/logo1.png" alt="Funky Physio Logo" width={50} height={50} className="h-10 w-auto" priority />
                <span className="font-museo-moderno ml-3 text-xl font-bold text-white">Funky Physio</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden min-[1001px]:flex items-center space-x-6">
              <div className="flex items-baseline space-x-8">
                {links.map(({ href, label }) => (
                  <Link key={href} href={href}
                    className="font-syne text-white hover:text-[#D84795] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
              <a href="https://wa.me/34675335798" target="_blank" rel="noopener noreferrer"
                className="font-syne border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#78428f] transition-colors duration-300 font-semibold tracking-wide">
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button — always on top */}
            <div className="min-[1001px]:hidden relative z-[60]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a0d2e] flex flex-col transition-all duration-500 ease-in-out min-[1001px]:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Links */}
        <div className="flex flex-col justify-center flex-1 px-10 gap-2">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="font-syne font-bold uppercase text-white border-b border-white/10 py-6 text-5xl sm:text-6xl tracking-tight hover:text-[#D84795] transition-colors duration-200"
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="px-10 pb-14 flex items-center justify-between">
          <a
            href="https://wa.me/34675335798"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-syne text-sm uppercase tracking-[4px] text-white/60 hover:text-white transition-colors"
          >
            WhatsApp ↗
          </a>
          <p className="font-syne text-xs uppercase tracking-[3px] text-white/30">Barcelona</p>
        </div>
      </div>
    </>
  );
}
