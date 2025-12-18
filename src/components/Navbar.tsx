'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#78428f] shadow-lg sticky top-0 z-50">
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
              <span className="font-museo-moderno ml-3 text-xl font-bold text-white-900">
                Funky Physio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-white-900 hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white-900 hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </Link>
              {/* <Link
                href="/programs"
                className="text-white-900 hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Programs
              </Link> */}
              <Link
                href="/about"
                className="text-white-900 hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-white-900 hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white-900 hover:text-[#D84795] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-white-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-white-600">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@funkyfisio.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D84795]"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="text-gray-900 hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/programs"
              className="text-gray-900 hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-[#D84795] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t">
              <div className="flex items-center text-sm text-gray-600 px-3 py-2">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 px-3 py-2">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@funkyfisio.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
