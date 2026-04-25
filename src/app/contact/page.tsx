'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-black text-center mb-10">Find Us Here</h2>
          <div className="rounded-[20px] overflow-hidden shadow-xl w-full h-[450px] group">
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
