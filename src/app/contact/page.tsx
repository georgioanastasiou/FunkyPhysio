'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Clock, MessageSquare, Activity } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    issueType: '',
    painLevel: '5',
    message: ''
  });

  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)[]>([]);

  useEffect(() => {
    const handleInputFocus = (index: number) => {
      const inputWrap = inputRefs.current[index]?.parentElement;
      if (inputWrap) {
        inputWrap.classList.add('focus', 'not-empty');
      }
    };

    const handleInputBlur = (index: number) => {
      const input = inputRefs.current[index];
      const inputWrap = input?.parentElement;
      if (inputWrap) {
        if (!input?.value) {
          inputWrap.classList.remove('not-empty');
        }
        inputWrap.classList.remove('focus');
      }
    };

    inputRefs.current.forEach((input, index) => {
      if (input) {
        const focusHandler = () => handleInputFocus(index);
        const blurHandler = () => handleInputBlur(index);
        
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);

        return () => {
          input.removeEventListener('focus', focusHandler);
          input.removeEventListener('blur', blurHandler);
        };
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 font-bold">
            Book Your Appointment<span className="text-[#78428F]">.</span>
          </h1>
          <p className="font-figtree text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your needs and we&apos;ll create a personalized treatment plan just for you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-[#78428F]" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="input-wrap relative md:col-span-2">
                  <input
                    ref={el => { inputRefs.current[0] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg"
                    autoComplete="off"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Full Name
                  </label>
                  <User className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Email */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[1] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg"
                    autoComplete="off"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Email Address
                  </label>
                  <Mail className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Phone */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[2] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg"
                    autoComplete="off"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Phone Number
                  </label>
                  <Phone className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Appointment Details Section */}
            <div className="pt-4">
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#78428F]" />
                Appointment Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Preferred Location */}
                <div className="input-wrap relative md:col-span-3">
                  <select
                    ref={el => { inputRefs.current[3] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg appearance-none cursor-pointer"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select location...</option>
                    <option value="studio">At Funky Studio</option>
                    <option value="online">Online Session</option>
                    <option value="home">At Your Place</option>
                  </select>
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Preferred Location
                  </label>
                  <MapPin className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Preferred Date */}
                <div className="input-wrap relative md:col-span-2">
                  <input
                    ref={el => { inputRefs.current[4] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Preferred Date
                  </label>
                  <Calendar className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Preferred Time */}
                <div className="input-wrap relative">
                  <select
                    ref={el => { inputRefs.current[5] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg appearance-none cursor-pointer"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select time...</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                  </select>
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Preferred Time
                  </label>
                  <Clock className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Medical Information Section */}
            <div className="pt-4">
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-[#78428F]" />
                Medical Information
              </h2>
              
              <div className="space-y-6">
                {/* Issue Type */}
                <div className="input-wrap relative">
                  <select
                    ref={el => { inputRefs.current[6] = el; }}
                    className="contact-input w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg appearance-none cursor-pointer"
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your primary concern...</option>
                    <option value="back-pain">Back Pain</option>
                    <option value="neck-pain">Neck Pain</option>
                    <option value="shoulder-pain">Shoulder Pain</option>
                    <option value="knee-pain">Knee Pain</option>
                    <option value="hip-pain">Hip Pain</option>
                    <option value="sports-injury">Sports Injury</option>
                    <option value="post-surgery">Post-Surgery Rehabilitation</option>
                    <option value="posture">Posture Correction</option>
                    <option value="muscle-tension">Muscle Tension/Stiffness</option>
                    <option value="chronic-pain">Chronic Pain Management</option>
                    <option value="flexibility">Flexibility & Mobility</option>
                    <option value="prevention">Injury Prevention</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    What brings you here?
                  </label>
                  <Activity className="icon absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Pain Level */}
                <div className="relative">
                  <label className="block font-figtree text-base font-semibold text-gray-700 mb-3">
                    Current Pain/Discomfort Level: <span className="text-[#78428F] text-xl">{formData.painLevel}/10</span>
                  </label>
                  <input
                    type="range"
                    name="painLevel"
                    min="0"
                    max="10"
                    value={formData.painLevel}
                    onChange={handleChange}
                    className="w-full h-3 bg-gradient-to-r from-green-300 via-yellow-300 to-red-500 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #86efac 0%, #fde047 50%, #ef4444 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>No Pain</span>
                    <span>Mild</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                    <span>Worst Pain</span>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="input-wrap textarea relative">
                  <textarea
                    ref={el => { inputRefs.current[7] = el; }}
                    className="contact-input w-full min-h-[150px] resize-none bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 pt-6 pb-3 font-figtree text-base font-medium text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-lg"
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your condition, symptoms, how long you've had them, any previous treatments, etc."
                  />
                  <label className="absolute top-5 left-6 text-gray-500 pointer-events-none transition-all duration-250 font-figtree text-base">
                    Additional Information
                  </label>
                  <MessageSquare className="icon absolute right-6 top-5 pointer-events-none text-gray-400 w-5 h-5 transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#78428F] to-[#E45896] text-white font-bold py-5 px-8 rounded-2xl font-poppins text-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform flex items-center justify-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Book Your Appointment
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                We&apos;ll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="font-figtree text-gray-600 mb-2">
            Need immediate assistance? Call us or send an email:
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <a href="tel:+1234567890" className="text-[#78428F] hover:text-[#E45896] font-semibold transition-colors">
              📞 +123 456 7890
            </a>
            <a href="mailto:g.anastasiou.dev@gmail.com" className="text-[#78428F] hover:text-[#E45896] font-semibold transition-colors">
              ✉️ g.anastasiou.dev@gmail.com
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-wrap.focus .contact-input,
        .input-wrap.not-empty .contact-input {
          padding-top: 1.75rem;
          padding-bottom: 0.5rem;
        }
        .input-wrap.focus label,
        .input-wrap.not-empty label {
          font-size: 0.75rem;
          top: 0.875rem;
          transform: translateY(0);
          color: #78428F;
          font-weight: 600;
        }
        .input-wrap.focus .icon,
        .input-wrap.not-empty .icon {
          color: #78428F;
        }
        .input-wrap.textarea.focus label,
        .input-wrap.textarea.not-empty label {
          top: 0.875rem;
        }
        .input-wrap.textarea .icon {
          top: 1.5rem;
        }
        .input-wrap.textarea.focus .icon,
        .input-wrap.textarea.not-empty .icon {
          top: 1.5rem;
        }
        
        /* Custom slider styling */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #78428F;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(120, 66, 143, 0.5);
          transition: all 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(120, 66, 143, 0.7);
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #78428F;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(120, 66, 143, 0.5);
          transition: all 0.2s;
        }
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(120, 66, 143, 0.7);
        }
        
        /* Select arrow styling */
        select.contact-input {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.5rem center;
          background-size: 1.25rem;
        }
      `}</style>
    </section>
  );
}
