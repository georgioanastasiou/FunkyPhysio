'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';
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
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10">
          <div className="w-full max-w-lg">
            <div className="mb-12">
              <h1 className="font-poppins text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 font-semibold">
                Let&apos;s work together<span className="text-[#1A7BF0]">.</span>
              </h1>
              <p className="font-figtree text-body text-gray-500">
                Or reach me via: <a href="mailto:g.anastasiou.dev@gmail.com" className="text-[#1A7BF0] hover:text-[#0F5DBD] transition-colors">g.anastasiou.dev@gmail.com</a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[0] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-body font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#5BA7FF] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree">
                    First Name
                  </label>
                  <User className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Last Name */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[1] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-body font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#5BA7FF] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree">
                    Last Name
                  </label>
                  <User className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[2] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-body font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#5BA7FF] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree">
                    Email
                  </label>
                  <Mail className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" />
                </div>

                {/* Phone */}
                <div className="input-wrap relative">
                  <input
                    ref={el => { inputRefs.current[3] = el; }}
                    className="contact-input w-full bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-body font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#5BA7FF] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                    autoComplete="off"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute top-1/2 left-[calc(1.35rem+2px)] transform -translate-y-1/2 text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree">
                    Phone
                  </label>
                  <svg className="icon absolute right-[calc(1.35rem+2px)] top-1/2 transform -translate-y-1/2 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="input-wrap textarea relative">
                <textarea
                  ref={el => { inputRefs.current[4] = el; }}
                  className="contact-input w-full min-h-[150px] resize-none bg-[hsla(208,50%,50%,0.065)] border-2 border-transparent rounded-[20px] px-[1.35rem] pt-6 pb-3 font-figtree text-body font-semibold text-gray-900 outline-none transition-all duration-300 focus:bg-white focus:border-[#5BA7FF] focus:shadow-[0_0_0_0px_hsla(208,91%,55%,0.11%)]"
                  name="message"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label className="absolute top-5 left-[calc(1.35rem+2px)] text-[#8c9aaf] pointer-events-none transition-all duration-250 font-figtree">
                  Message
                </label>
                <MessageSquare className="icon absolute right-[calc(1.35rem+2px)] top-5 pointer-events-none text-[#8c9aaf] w-5 h-5 transition-colors duration-300" />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full bg-[#8B5A96] text-white font-medium py-[1.1rem] px-8 rounded-[40px] border-none font-figtree transition-colors duration-300 hover:bg-[#7a4f84] flex items-center justify-center gap-2"
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
                className="absolute h-[calc(120%+10px)] top-2/5 transform -translate-y-1/2 left-[calc(100%-2px)]" 
                viewBox="0 0 783 1536" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  id="wave"
                  d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z" 
                  fill="white"
                />
              </svg>
            </div>
            
            {/* Dashed Wave */}
            <svg 
              className="absolute z-30 h-[130%] bottom-[60%] left-[-28px] transform translate-y-1/2" 
              viewBox="0 0 345 877" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
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
          border-color: #5BA7FF;
          box-shadow: 0 0 0 0px hsla(208, 91%, 55%, 0.11%);
        }
        .input-wrap.focus label {
          color: 'rgba(58, 48, 111, 0.7)';
          font-size: 0.66rem;
          top: 0.75rem;
          transform: translateY(0);
        }
        .input-wrap.focus .icon {
          color: 'rgba(58, 48, 111, 0.7)';
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
