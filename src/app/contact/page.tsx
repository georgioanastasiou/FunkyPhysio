'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#5B3A8F] via-[#6B47A0] to-[#7B54B0] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B6BB8] rounded-full opacity-40 blur-3xl -mb-48 -mr-48"></div>
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-pink-400 rounded-full opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Information */}
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-16 font-poppins">
            Contact Information
          </h1>

          <div className="space-y-10">
            {/* Phone */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <a href="tel:+34675335798" className="text-white text-2xl font-medium hover:text-pink-300 transition-colors">
                  +34 675 335 798
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <a href="mailto:george@funkyphysio.com" className="text-white text-2xl font-medium hover:text-pink-300 transition-colors">
                  george@funkyphysio.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-white text-2xl font-medium">
                  Poblenou, Barcelona
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-20 flex gap-6">
            <a 
              href="#" 
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}