'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">

            {/* Burger button */}
            <div className="relative z-[60]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-white text-white focus:outline-none hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <Image src="/logo1.png" alt="Funky Physio Logo" width={50} height={50} className="h-10 w-auto" priority />
              <span className="font-museo-moderno text-xl font-bold text-white">Funky Physio</span>
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

        <div className="px-10 pb-14 flex items-center justify-end">
          <p className="font-syne text-xs uppercase tracking-[3px] text-white/30">Barcelona</p>
        </div>
      </div>
    </>
  );
}
