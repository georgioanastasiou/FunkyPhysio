'use client';

import { Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '@/components/ContactForm';
import WhatWeDo from '@/components/WhatWeDo';


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const georgeImageRef = useRef<HTMLDivElement>(null);
  const georgeTextRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { name: "John Doe", title: "Marathon Runner", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sarah Johnson", title: "Yoga Instructor", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Mike Chen", title: "Fitness Coach", image: "https://randomuser.me/api/portraits/men/52.jpg" },
    { name: "Emily Williams", title: "Architect / Runner", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "David Kim", title: "Rock Climber", image: "https://randomuser.me/api/portraits/men/76.jpg" }
  ];

  // Video play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
    return () => {
      video?.pause();
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // Hero Logo — starts at viewport center, flies diagonally to navbar on scroll
      if (heroLogoRef.current) {
        const logoEl = heroLogoRef.current;
        const lw = logoEl.offsetWidth;
        const lh = logoEl.offsetHeight;

        // Start: centered in viewport
        gsap.set(logoEl, {
          x: window.innerWidth / 2 - lw / 2,
          y: window.innerHeight / 2 - lh / 2 - 150,
          scale: 1,
        });

        // End: next to burger button in navbar
        gsap.to(logoEl, {
          x: () => {
            const p = window.innerWidth >= 1024 ? 32 : window.innerWidth >= 640 ? 24 : 16;
            // burger is 56px wide + 16px gap
            return p + 35 + 50;
          },
          y: () => {
            // mt-9 = 36px, navbar h-16 = 64px, center of navbar = 36 + 32 = 68, minus half logo height
            const lhCurrent = heroLogoRef.current?.offsetHeight ?? 96;
            return 5 + 32 - lhCurrent * 0.22 / 2;
          },
          scale: 0.42,
          ease: 'power2.inOut',
          scrollTrigger: {
            start: 'top top',
            end: '+=480',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      }

      // Meet George parallax
      if (georgeImageRef.current) {
        gsap.fromTo(georgeImageRef.current,
          { yPercent: -8 },
          { yPercent: 8, ease: "none", scrollTrigger: { trigger: georgeImageRef.current.closest("section"), start: "top bottom", end: "bottom top", scrub: true } }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Logo — fixed overlay, GSAP animates it diagonally to navbar on scroll */}
      <div ref={heroLogoRef} className="fixed z-[55] pointer-events-none" style={{ left: 0, top: 0 }}>
        <Image src="/logo1.png" alt="Funky Physio Logo" width={96} height={96} className="h-24 w-auto" priority />
      </div>

      {/* Hero + WhatWeDo share a container so sticky hero only lives within it */}
      <div>
        <div className="sticky top-0 z-[1] h-screen">
          <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
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
            </video>
            <div ref={heroContentRef} className="relative z-20 text-center px-4">
              <h1 className="font-museo-moderno text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8">
                Funky Physio
              </h1>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold text-base md:text-lg rounded-[10px] hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-10" style={{ transform: 'translateY(1px)' }}>
              <svg width="1442" height="101" viewBox="0 0 1442 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
                <path d="M0 0C50.0042 106.18 243.242 93.9596 659.915 30.7419C1087.51 -34.1338 1352.6 37.0078 1442 100.304H721.5H1L0 0Z" fill="#0d0a1a" />
              </svg>
            </div>
          </section>
        </div>
        {/* WhatWeDo slides up over the hero — once done, container ends and hero scrolls away */}
        <WhatWeDo />
      </div>
      {/* Meet George Section */}
      <section className="relative bg-white py-16 px-8 md:px-20 lg:px-32">
        <p className="font-syne text-lg font-bold text-black mb-10 tracking-wide">\George Anastasiou</p>

        <div className="flex items-start gap-10">

          <div className="flex-1">
            {/* Image + first line, aligned to the bottom of the image */}
            <div className="flex items-end gap-10">
              <div
                ref={georgeImageRef}
                className="flex-shrink-0 overflow-hidden"
                style={{ width: 260, height: 320 }}
              >
                <Image
                  src="/basketball/DSC_0079.jpg"
                  alt="George Anastasiou"
                  width={260}
                  height={320}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <p className="text-black text-4xl font-normal font-syne leading-10">
                Lorem dolor sit amet consectetur  Nullam viverra purus 
              </p>
            </div>

            {/* Rest of the paragraph — spreads full width below */}
            <div ref={georgeTextRef} className="mt-2">
              <p className="text-black text-4xl font-normal font-syne leading-10">
                ac aliquet eget morbi non.
                Maliquet eget morbi non. Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod. aliquet eget morbi non.
                Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod. tis etiam lobortis tempor id. Sit aenean erat nunc
                amet et euismod. Sollicitudin at ipsum amet risus in proin cras condimenean erat nunc amet et euismod. Sollicitudinean
                erat nunc amet et euismod. Sollicitudin at ipsum amet risus in proin cras co at ipsum amet risus in proin cras coe&quot;
              </p>
            </div>
          </div>

          {/* Circular Learn More button — vertically centered against the whole text block */}
          <div className="flex-shrink-0 self-center">
            <Link href="/about" className="w-24 h-24 rounded-full border border-black flex flex-col items-center justify-center text-center hover:bg-black hover:text-white transition-colors duration-300 group">
              <span className="font-syne text-[10px] uppercase tracking-[2px] leading-tight text-black group-hover:text-white">LEARN<br />MORE</span>
              <span className="text-base mt-1 text-black group-hover:text-white">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Testimonials Section — flat cream strip, bleeds off the right edge */}
      <section className="relative bg-[#EDE8DF] py-16 md:py-20">
        <p className="font-syne text-lg font-bold text-black mb-10 tracking-wide px-8 md:px-20 lg:px-32">\Real People, Real Results</p>

        <div className="flex gap-5 overflow-x-auto no-scrollbar pl-8 md:pl-20 lg:pl-32 pr-8 pb-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative flex-shrink-0 w-64 h-80 rounded-[20px] overflow-hidden group cursor-pointer">
              <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors" aria-label="Play testimonial video">
                <div className="w-14 h-14 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                </div>
              </button>
              <div className="absolute bottom-0 left-0 w-52 h-14 bg-white rounded-tr-[10px] flex flex-col justify-center px-4">
                <div className="text-black text-base font-bold font-syne leading-tight">{testimonial.name}</div>
                <div className="text-black text-xs font-medium font-syne leading-tight">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="relative bg-[#412C46] overflow-hidden py-16 md:py-24 px-8 md:px-20 lg:px-32 min-h-[900px] flex items-start">
        {/* Decorative mask logo watermark, bleeding behind the left column */}
        <div className="absolute left-20 top-0 h-[750px] w-full max-w-2xl opacity-20 pointer-events-none translate-y-[60px]">
          <Image src="/MaskLogo.png" alt="" fill className="object-contain object-left-bottom" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-10 w-full lg:items-stretch">
          {/* Left column: label + big heading pinned left, intro paragraphs pinned top-right next to the photo */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_260px] lg:grid-rows-[auto_1fr] gap-x-8">
            <p className="font-syne text-lg font-bold text-[#F3E9D6] tracking-wide mb-10 lg:mb-0 lg:col-start-1 lg:row-start-1">\Our Philosophy</p>

            <div className="grid grid-cols-1 gap-5 max-w-xl mb-1 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-1 lg:max-w-none">
              <p className="text-[#F2FFAA] text-sm font-syne leading-6 text-justify">
                George holds a degree in Sports Science and Physiotherapy, and played
                professional basketball before moving into clinical practice — first-hand
                experience with how the body performs under load, and how it breaks down.
              </p>
              <p className="text-[#F2FFAA] text-sm font-syne leading-6 text-justify">
                Trained in Orthopaedic Manual Therapy (OMT), he practised for five years in
                Berlin before opening his own studio in Barcelona. His focus areas include
                sports injuries, post-surgical rehab, chronic pain, and shoulder, knee and hip conditions.
              </p>
            </div>

            <p className="pt-16 lg:pt-0 text-[#F2FFAA] text-3xl md:text-4xl font-bold font-syne leading-tight max-w-2xl lg:max-w-none lg:col-span-2 lg:row-start-2 lg:self-end text-justify">
              Five years of clinical practice, one approach: an accurate diagnosis and a treatment plan built around how you actually move.
            </p>
          </div>

          {/* Right column: interior photo, explicit larger height so it isn't capped by the text column's content height, no border radius */}
          <div className="relative w-full h-[600px] sm:h-[600px] lg:h-[650px] lg:w-[560px] flex-shrink-0 overflow-hidden">
            <Image src="/funkydesk.png" alt="Funky Physio studio interior" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-black text-xl font-medium font-syne uppercase leading-8 tracking-[6.40px]">Location of your choice</h2>
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
                  <rect x="1" y="1" width="98%" height="98%" rx="18" ry="18" fill="none" stroke={`url(#g-${card.title.replace(/\s/g, '')})`} strokeWidth="1.5" strokeDasharray="6 4" />
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
