'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#331D3D]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Funky Physio Logo"
                width={50}
                height={50}
                className="h-10 w-auto"
                priority
              />
              <span className="font-museo-moderno ml-3 text-xl font-bold text-white">
                Funky Physio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden min-[1001px]:flex items-center space-x-6">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-white hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              {/* <Link
                href="/services"
                className="text-white hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </Link> */}
              <Link
                href="/about"
                className="text-white hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#78428f] transition-colors duration-300 font-medium"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="min-[1001px]:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#D84795] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D84795]"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="min-[1001px]:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#331D3D] border-t border-white/20">
            <Link
              href="/"
              className="text-white hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/programs"
              className="text-white hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-white/20">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#78428f] transition-colors duration-300 font-medium mx-3 inline-block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
