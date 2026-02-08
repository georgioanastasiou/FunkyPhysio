import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Funky Physio Logo"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">Funky Physio</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional physiotherapy services by Funky Physio, dedicated to helping you recover, 
              rehabilitate, and achieve optimal physical health and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Sports Injury Rehabilitation</li>
              <li className="text-gray-300 text-sm">Post-Surgical Recovery</li>
              <li className="text-gray-300 text-sm">Chronic Pain Management</li>
              <li className="text-gray-300 text-sm">Manual Therapy</li>
              <li className="text-gray-300 text-sm">Exercise Prescription</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D84795] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Health Street<br />
                    Medical District, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#D84795] mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+34 675 335 798</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#D84795] mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">george@funkyphysio.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#D84795] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Funky Physio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
