'use client';

import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      title: "Marathon Runner",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      title: "Yoga Instructor",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mike Chen",
      title: "Fitness Coach",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Emily Williams",
      title: "Architect / Runner",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  useEffect(() => {
    // Ensure hero video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          preload="auto"
        >
          <source src="/hero-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Centered Content */}
        <div className="relative z-20 text-center px-4">
          {/* Logo */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <Image
              src="/logo1.png"
              alt="Funky Physio Logo"
              width={120}
              height={120}
              className="h-16 w-auto md:h-20 lg:h-24"
              priority
            />
          </div>
          
          {/* Title */}
          <h1 className="font-museo-moderno text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8">
            Funky Physio
          </h1>
          
          {/* Book Appointment Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold text-base md:text-lg rounded-[10px] hover:bg-white hover:text-gray-900 transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Wavy Transition at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 w-full z-10" style={{ transform: 'translateY(1px)' }}>
          <svg
            width="1442"
            height="101"
            viewBox="0 0 1442 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0C50.0042 106.18 243.242 93.9596 659.915 30.7419C1087.51 -34.1338 1352.6 37.0078 1442 100.304H721.5H1L0 0Z"
              fill="#0d0a1a"
            />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="pt-12 md:pt-24 pb-80 md:pb-[140px] bg-[#0d0a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-white text-xl font-medium font-syne uppercase leading-8 tracking-[6.40px] text-center">What we do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {[
              {
                title: 'Physiotherapy',
                items: ['Treatment Sessions', 'Rehabilitation', 'Prevention & Education'],
              },
              {
                title: 'Massage',
                items: ['Sports Massage', 'Friction Massage', 'Deep Tissue Massage'],
              },
              {
                title: 'Therapy Training',
                items: ['Postural Reeducation', 'Functional Exercise', 'Movement Pattern Correction'],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative w-full max-w-[384px] h-[320px] rounded-[20px] p-[2px] flex flex-col"
                style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7, #38bdf8)' }}
              >
                <div className="bg-[#1a1030] rounded-[18px] flex flex-col h-full p-8 gap-4">
                  <h3 className="text-white text-3xl font-semibold font-syne">{card.title}</h3>
                  <div className="flex flex-col gap-2 flex-1">
                    {card.items.map((item) => (
                      <div key={item} className="opacity-80 text-white text-base font-medium font-syne leading-7">{item}</div>
                    ))}
                  </div>
                  <button className="w-72 h-14 bg-fuchsia-800 hover:bg-fuchsia-700 text-white font-semibold rounded-[29px] transition-colors flex items-center justify-center gap-2 mx-auto">
                    Book Appointment <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet George Anastasiou Section */}
      <section className="relative bg-white">
        {/* Layout: image on left edge, text on right */}
        <div className="flex flex-col lg:flex-row min-h-[950px]">
          {/* Left Side - Image stretches full height to left edge */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto">
            <Image
              src="/basketball/DSC_0079.jpg"
              alt="George Anastasiou - The Funky Physio"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-20">
            <p className="text-black text-xl font-medium font-syne uppercase leading-8 tracking-[6.40px] mb-2">The Funky Physio</p>
            <h2 className="text-black text-5xl font-semibold font-syne leading-[76.80px] mb-6">
              Meet George Anastasiou
            </h2>
            
            <div className="space-y-4 font-syne text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                As a former professional athlete, I understand firsthand the physical demands and challenges that come with pushing your body to its limits. My journey from the court to the clinic has shaped my unique approach to physiotherapy—one that combines evidence-based treatment with real-world athletic experience.
              </p>
              
              <p>
                With years of specialized training and hands-on experience, I&apos;ve dedicated my career to helping individuals recover from injuries, improve their movement patterns, and achieve their peak physical performance. Whether you&apos;re an elite athlete, weekend warrior, or simply looking to move better and feel stronger, I&apos;m here to guide you every step of the way.
              </p>
            </div>
            
            <div className="mt-6 md:mt-8">
              <button className="bg-[#78428F] text-white font-semibold py-3 px-8 md:py-4 md:px-12 rounded-[10px] hover:bg-[#7a4f84] transition-colors text-base md:text-lg">
                Show More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-transparent overflow-hidden -mt-32 z-10">
        {/* Beige blob + purple wave in same SVG so they align perfectly */}
        <div className="absolute inset-0 w-full h-full z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 674" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 57.0935C213.965 -12.8637 649.849 -13.0232 941.5 46.2908C1199.77 98.815 1371.47 50.926 1441 0V541.919C1391.07 632.669 1198.09 694.219 782 640.187C354.993 584.739 89.2732 619.902 0 674V57.0935Z" fill="#E2D4CA"/>
            <path d="M1441 541.919C1391.07 632.669 1198.09 694.219 782 640.187C354.993 584.739 89.2732 619.902 0 674V655C89.2732 601 354.993 565.739 782 621.187C1198.09 675.219 1391.07 613.669 1441 522.919V541.919Z" fill="#78428F"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-40">
          <div className="text-center mb-20">
            <h2 className="text-fuchsia-800 text-xl font-medium font-syne uppercase leading-8 tracking-[6.40px] mb-4">Real People, Real Results</h2>
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden relative pb-12">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative w-full max-w-[320px] mx-auto h-[450px] rounded-[20px] overflow-hidden shadow-lg group cursor-pointer">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                        <button
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                          aria-label="Play testimonial video"
                        >
                          <div className="w-16 h-16 bg-[#D84795] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white ml-1" fill="#0d0a1a" />
                          </div>
                        </button>
                        
                        {/* Info overlay at bottom */}
                        <div className="absolute bottom-0 left-0 w-60 h-14 bg-white rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center px-4 mb-10">
                          <div className="text-black text-xl font-bold font-syne leading-8">{testimonial.name}</div>
                          <div className="text-black text-base font-medium font-syne leading-6">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-72 h-96 rounded-[20px] overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                    aria-label="Play testimonial video"
                  >
                    <div className="w-16 h-16 bg-[#D84795] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="#0d0a1a" />
                    </div>
                  </button>
                  
                  {/* Info overlay at bottom */}
                  <div className="absolute bottom-0 left-0 w-60 h-14 bg-white rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center px-4 mb-10">
                    <div className="text-black text-xl font-bold font-syne leading-8">{testimonial.name}</div>
                    <div className="text-black text-base font-medium font-syne leading-6">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* Location Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-black text-xl font-medium font-syne uppercase leading-8 tracking-[6.40px]">
              Location of your choice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'At Funky Studio', description: 'In-person sessions in a fully equipped, professional studio environment.', prices: ['45 min / EUR 60', '60 min / EUR 70'] },
              { title: 'Online Sessions', description: 'Guided virtual sessions tailored to your needs, wherever you are.', prices: ['60 min / EUR 60'] },
              { title: 'At your place', description: 'Personalized treatment delivered in the comfort of your home.', prices: ['60 min / EUR 90'] },
            ].map((card) => (
              <div key={card.title} className="relative rounded-[20px] p-8 flex flex-col gap-4 bg-white overflow-hidden">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`g-${card.title.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="98%" height="98%" rx="18" ry="18"
                    fill="none"
                    stroke={`url(#g-${card.title.replace(/\s/g, '')})`}
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                </svg>
                <h3 className="text-black text-3xl font-semibold font-syne leading-[51.20px]">{card.title}</h3>
                <p className="opacity-80 text-black text-base font-medium font-syne leading-6">{card.description}</p>
                <div className="flex flex-col gap-2 mt-4">
                  {card.prices.map((price) => (
                    <div key={price} className="opacity-80 text-black text-xl font-medium font-syne leading-8">{price}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </>
    
  );
}

