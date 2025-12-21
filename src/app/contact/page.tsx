'use client';

import { useState, useEffect, useRef } from 'react';
import { User, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Contact Form */}
        <div className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-0 relative z-10">
          <div className="w-full max-w-lg ml-0 sm:ml-0 md:ml-0 lg:ml-16 xl:ml-32">
            <div className="mb-8 sm:mb-12">
              <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4 font-bold">
                Let&apos;s work together<span className="text-[#78428F]">.</span>
              </h1>
              <p className="font-figtree text-sm sm:text-base text-gray-500">
                Or reach me via: <a href="mailto:g.anastasiou.dev@gmail.com" className="text-[#78428F] hover:text-[#7a4f84] transition-colors">g.anastasiou.dev@gmail.com</a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* First Name */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[0] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree text-sm sm:text-base">
                    First Name
                  </label>
                  <svg className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6c0-1.66-1.34-3-3-3S8 7.34 8 9s1.34 3 3 3 3-1.34 3-3zm-6 6c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H8v-1z"/>
                  </svg>
                </div>

                {/* Last Name */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[1] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree text-sm sm:text-base">
                    Last Name
                  </label>
                  <svg className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6c0-1.66-1.34-3-3-3S8 7.34 8 9s1.34 3 3 3 3-1.34 3-3zm-6 6c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H8v-1z"/>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Email */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[2] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree text-sm sm:text-base">
                    Email
                  </label>
                  <svg className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>

                {/* Phone */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[3] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree text-sm sm:text-base">
                    Phone
                  </label>
                  <svg className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.44-.99-.99-.99z"/>
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="input-wrap textarea relative">
                <textarea
                  ref={el => { inputRefs.current[4] = el; }}
                  className="contact-input w-full min-h-[120px] sm:min-h-[150px] resize-none bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#78428F] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                  name="message"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label className="absolute top-5 left-[calc(1.35rem+2px)] text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree text-sm sm:text-base">
                  Message
                </label>
                <MessageSquare className="icon absolute right-[calc(1.35rem+2px)] top-5 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full bg-[#78428F] text-white font-medium py-3 sm:py-[1.1rem] px-6 sm:px-8 rounded-[40px] border-none font-figtree text-sm sm:text-base transition-colors duration-300 hover:bg-[#7a4f84] flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative hidden lg:block overflow-hidden">
          {/* Mountain Image wrapper */}
          <div className="absolute inset-0">
            <Image
              src="/contact-image.png"
              alt="Contact Image"
              fill
              className="object-cover"
              priority
            />
            
            {/* Wave Wrap */}
            <div className="absolute inset-0 right-full bg-white">
              <svg 
                className="absolute h-[calc(110%+100px)] top-2/2 transform -translate-y-3/5 left-[calc(1%-50px)]" 
                viewBox="0 150 783 1650" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path 
                  id="wave"
                  d="M236 1320 C180 1420 80 1460 30 1500 C10 1520 5 1530 1 1535 V1 H770 C795 70 790 200 620 235 C410 280 280 340 455 575 C630 810 505 825 345 950 C190 1070 285 1195 236 1320 Z" 
                  fill="white"
                />
              </svg>
            </div>
            
            {/* Dashed Wave */}
            <svg 
              className="absolute z-30 h-full bottom-0 left-[-30px]" 
              viewBox="0 0 845 677" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path 
                id="dashed-wave"
                d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1" 
                fill="none"
                stroke="#c4d1e0"
                strokeWidth="1"
                strokeDasharray="6.5"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-wrap.focus .contact-input {
          background-color: white;
          border-color: #78428F;
          box-shadow: 0 0 0 0px hsla(208, 91%, 55%, 0.11%);
        }
        .input-wrap.focus label {
          color: #78428F;
          font-size: 0.66rem;
          top: 0.75rem;
          transform: translateY(0);
        }
        .input-wrap.focus .icon {
          color: #78428F;
        }
        .input-wrap.not-empty label {
          font-size: 0.66rem;
          top: 0.75rem;
          transform: translateY(0);
        }
        .input-wrap.textarea.focus label,
        .input-wrap.textarea.not-empty label {
          top: 0.75rem;
        }
        .input-wrap.textarea .icon {
          top: 1.3rem;
        }
        .input-wrap.textarea.focus .icon,
        .input-wrap.textarea.not-empty .icon {
          top: 1.3rem;
        }
      `}</style>
    </section>
  );
}
