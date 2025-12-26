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
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Centered Content */}
        <div className="relative z-20 text-center px-4">
          {/* Logo */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Funky Physio Logo"
              width={120}
              height={120}
              className="h-16 w-auto md:h-20 lg:h-24 drop-shadow-lg"
              priority
            />
          </div>
          
          {/* Title */}
          <h1 className="font-museo-moderno text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
            Funky Physio
          </h1>
          
          {/* Book Appointment Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold text-base md:text-lg rounded-[10px] hover:bg-white hover:text-gray-900 transition-colors drop-shadow-lg"
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
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="pt-12 md:pt-24 pb-16 md:pb-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="text-left mb-8 md:mb-12">
            <h2 className="font-poppins text-3xl md:text-h2 text-gray-900 mb-4">
              What we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {/* Physiotherapy Card */}
            <div className="w-full max-w-[384px] h-[470px] bg-white rounded-[20px] shadow-[0px_4px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-[20px]">
                <Image
                  src="/physiotherapy.png"
                  alt="Physiotherapy"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-4 left-6 md:left-10 z-10">
                  <h3 className="font-figtree text-2xl md:text-3xl font-semibold text-white leading-tight drop-shadow-lg">
                    Physiotherapy
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-col justify-start items-start gap-3 mb-6">
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Treatment Sessions</div>
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Rehabilitation</div>
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Prevention & Education</div>
                </div>
                <button className="w-full bg-[#78428F] text-white font-semibold py-3 mt-3 px-6 rounded-[10px] hover:bg-[#663876] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Massage Card */}
            <div className="w-full max-w-[384px] h-[470px] bg-white rounded-[20px] shadow-[0px_4px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-[20px]">
                <Image
                  src="/massage.png"
                  alt="Massage"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-4 left-6 md:left-10 z-10">
                  <h3 className="font-figtree text-2xl md:text-3xl font-semibold text-white leading-tight drop-shadow-lg">
                    Massage
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-col justify-start items-start gap-3 mb-6">
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Sports Massage</div>
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Friction Massage</div>
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Deep Tissue Massage</div>
                </div>
                <button className="w-full bg-[#78428F] text-white font-semibold py-3 mt-3 px-6 rounded-[10px] hover:bg-[#663876] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Therapeutic Training Card */}
            <div className="w-full max-w-[384px] h-[470px] bg-white rounded-[20px] shadow-[0px_4px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-[20px]">
                <Image
                  src="/therapeutic-training.png"
                  alt="Therapeutic Training"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-4 left-6 md:left-10 z-10">
                  <h3 className="font-figtree text-2xl md:text-3xl font-semibold text-white leading-tight drop-shadow-lg">
                    Therapeutic Training
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-col justify-start items-start gap-3 mb-6">
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Postural Reeducation</div>
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Functional Exercise</div>
                  <div className="opacity-80 text-black text-base md:text-lg font-medium font-figtree leading-7">Movement Pattern Correction</div>
                </div>
                <button className="w-full bg-[#78428F] text-white font-semibold py-3 mt-3 px-6 rounded-[10px] hover:bg-[#663876] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet George Anastasiou Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[400px] h-[400px] md:max-w-[500px] md:h-[500px] lg:max-w-[550px] lg:h-[550px] rounded-[20px] overflow-hidden bg-gray-100">
                <Image
                  src="/basketball/DSC_0079.jpg"
                  alt="George Anastasiou - The Funky Physio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:pl-8">
              <h2 className="font-poppins text-3xl md:text-4xl lg:text-h2 text-gray-900 mb-4 leading-tight">  
                 George Anastasiou
              </h2>
              <h3 className="font-figtree text-xl md:text-2xl lg:text-h3 text-gray-600 mb-6">
                The Funky Physio
              </h3>
              
              <div className="space-y-4 font-figtree text-sm md:text-base lg:text-body text-gray-700 leading-relaxed">
                <p>
                  As a former professional athlete, I understand firsthand the physical demands and challenges that come with pushing your body to its limits. My journey from the court to the clinic has shaped my unique approach to physiotherapy—one that combines evidence-based treatment with real-world athletic experience.
                </p>
                
                <p>
                  With years of specialized training and hands-on experience, I&apos;ve dedicated my career to helping individuals recover from injuries, improve their movement patterns, and achieve their peak physical performance. Whether you&apos;re an elite athlete, weekend warrior, or simply looking to move better and feel stronger, I&apos;m here to guide you every step of the way.
                </p>
              </div>
              
              <div className="mt-6 md:mt-8">
                <button className="bg-[#78428F] text-white font-semibold py-3 px-8 md:py-4 md:px-12 rounded-[10px] hover:bg-[#7a4f84] transition-colors text-base md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section py-16 relative min-h-screen flex items-center justify-center bg-white" style={{ 
        backgroundImage: 'url("/testimonial-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left mb-10">
            <h2 className="font-poppins text-h2 text-white mb-4">
              Real People, Real Results
            </h2>
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
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </button>
                        
                        {/* Info overlay at bottom */}
                        <div className="absolute bottom-0 left-0 w-60 h-14 bg-white rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center px-4 mb-10">
                          <div className="text-black text-xl font-bold font-figtree leading-8">{testimonial.name}</div>
                          <div className="text-black text-base font-medium font-figtree leading-6">{testimonial.title}</div>
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
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-20">
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
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  
                  {/* Info overlay at bottom */}
                  <div className="absolute bottom-0 left-0 w-60 h-14 bg-white rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center px-4 mb-10">
                    <div className="text-black text-xl font-bold font-figtree leading-8">{testimonial.name}</div>
                    <div className="text-black text-base font-medium font-figtree leading-6">{testimonial.title}</div>
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
          {/* Section Title - Outside Card */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins leading-tight">
              Location of your choice
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Studio Card */}
            <div className="relative bg-white rounded-[20px] shadow-[0px_0px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              {/* Purple accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-5 bg-[#78428F] rounded-tl-[20px] rounded-bl-[20px]"></div>
              
              {/* Card content */}
              <div className="pl-10 md:pl-14 pr-6 md:pr-8 py-8 md:py-10">
                <h3 className="text-black text-2xl md:text-3xl font-semibold font-figtree leading-tight mb-4 md:mb-6">
                  At Funky Studio
                </h3>
                
                <p className="opacity-80 text-black text-sm md:text-base font-medium font-figtree leading-6 mb-6 md:mb-8 min-h-[48px]">
                  In-person sessions in a fully equipped, professional studio.
                </p>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="opacity-80 text-black text-lg md:text-xl font-medium font-figtree leading-8">
                    45 min / EUR 60
                  </div>
                  <div className="opacity-80 text-black text-lg md:text-xl font-medium font-figtree leading-8">
                    60 min / EUR 70
                  </div>
                </div>
              </div>
            </div>

            {/* Home Visit Card */}
            <div className="relative bg-white rounded-[20px] shadow-[0px_0px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              {/* Pink accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-5 bg-[#E45896] rounded-tl-[20px] rounded-bl-[20px]"></div>
              
              {/* Card content */}
              <div className="pl-10 md:pl-14 pr-6 md:pr-8 py-8 md:py-10">
                <h3 className="text-black text-2xl md:text-3xl font-semibold font-figtree leading-tight mb-4 md:mb-6">
                Online Sessions
                </h3>
                
                <p className="opacity-80 text-black text-sm md:text-base font-medium font-figtree leading-6 mb-6 md:mb-8 min-h-[48px]">
                Guided virtual sessions tailored to your needs, wherever you are.
                </p>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="opacity-80 text-black text-lg md:text-xl font-medium font-figtree leading-8">
                    60 min / EUR 80
                  </div>
                </div>
              </div>
            </div>

            {/* Online Card */}
            <div className="relative bg-white rounded-[20px] shadow-[0px_0px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              {/* Blue accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-5 bg-[#93BCC4] rounded-tl-[20px] rounded-bl-[20px]"></div>
              
              {/* Card content */}
              <div className="pl-10 md:pl-14 pr-6 md:pr-8 py-8 md:py-10">
                <h3 className="text-black text-2xl md:text-3xl font-semibold font-figtree leading-tight mb-4 md:mb-6">
                At your place
                </h3>
                
                <p className="opacity-80 text-black text-sm md:text-base font-medium font-figtree leading-6 mb-6 md:mb-8 min-h-[48px]">
                Personalized treatment delivered in the comfort of your home.
                </p>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="opacity-80 text-black text-lg md:text-xl font-medium font-figtree leading-8">
                    60 min / EUR 60
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
    
  );
}

// Add custom styles for testimonial section responsive behavior
const styles = `
  @media (max-width: 1023px) {
    .testimonial-section {
      background-image: none !important;
      background-color: #331d3d !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}