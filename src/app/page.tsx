'use client';

import { Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '@/components/ContactForm';
import WhatWeDo from '@/components/WhatWeDo';
import LocationSection from '@/components/LocationSection';


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const georgeImageRef = useRef<HTMLDivElement>(null);
  const georgeTextRef = useRef<HTMLDivElement>(null);
  const healingSectionRef = useRef<HTMLElement>(null);
  const healingHeadingRef = useRef<HTMLDivElement>(null);
  const healingImageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Order here is also the reveal order (index feeds healingImageRefs), chosen
  // to alternate sides — left, right, left, right — for a nicer scroll rhythm.
  const healingImages = [
    { src: '/physiotherapy.png', side: 'left', rotate: '-rotate-3' },
    { src: '/therapeutic-training.png', side: 'right', rotate: 'rotate-2' },
    { src: '/massage.png', side: 'left', rotate: 'rotate-2' },
    { src: '/funkydesk.png', side: 'right', rotate: '-rotate-2' },
  ];

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

      // Hero Logo — starts above the "Funky Physio" heading, flies to sit left of the
      // burger button on scroll. Both positions are measured live off real DOM rects
      // (the heading, the burger button) instead of hardcoded breakpoint numbers, so
      // it lines up correctly at any screen size — including after a resize, via
      // onRefreshInit re-measuring the centered start position from scratch (a plain
      // gsap.set only ran once at mount, so it went stale and drifted off-center on
      // narrower viewports).
      if (heroLogoRef.current && heroContentRef.current) {
        const logoEl = heroLogoRef.current;
        const contentEl = heroContentRef.current;
        const END_SCALE = 0.42;
        const GAP = 16;

        // Scale from the top-left corner so translateX/Y keep lining up with that
        // corner as the logo shrinks, instead of drifting from a center-origin scale.
        gsap.set(logoEl, { transformOrigin: 'left top' });

        // Start: centered horizontally, sitting just above the heading text
        const setStartPosition = () => {
          const lw = logoEl.offsetWidth;
          const lh = logoEl.offsetHeight;
          const contentTop = contentEl.getBoundingClientRect().top;
          gsap.set(logoEl, {
            x: window.innerWidth / 2 - lw / 2,
            y: contentTop - lh - 24,
            scale: 1,
          });
        };
        setStartPosition();

        // End: always to the left of the burger button, whatever the screen size
        gsap.to(logoEl, {
          x: () => {
            const burger = document.querySelector<HTMLElement>('button[aria-label="Toggle menu"]');
            if (!burger) return 16;
            const rect = burger.getBoundingClientRect();
            return rect.left - GAP - logoEl.offsetWidth * END_SCALE;
          },
          y: () => {
            const burger = document.querySelector<HTMLElement>('button[aria-label="Toggle menu"]');
            if (!burger) return 20;
            const rect = burger.getBoundingClientRect();
            return rect.top + rect.height / 2 - (logoEl.offsetHeight * END_SCALE) / 2;
          },
          scale: END_SCALE,
          ease: 'power2.inOut',
          scrollTrigger: {
            start: 'top top',
            end: '+=480',
            scrub: 1.2,
            invalidateOnRefresh: true,
            onRefreshInit: setStartPosition,
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

      // Healing images — the whole section pins in place the moment the heading
      // hits viewport center (trigger = heading, pin = section), so scrolling no
      // longer moves the page at all; that captured scroll instead drives each
      // image on a continuous rise: up from below the viewport, through its
      // slot, and on past the top edge while fading out — it never parks in
      // place. The next image only starts once the current one has fully
      // exited, so only one is ever in motion at a time.
      // Desktop only: the flanking photos are only visually shown at lg+ (the
      // mobile block above is a separate, static, unanimated layout), but both
      // blocks are always mounted in the DOM — Tailwind's responsive classes
      // just toggle display:none, they don't unmount anything. Skipping this
      // below lg matters because pinning/triggering off a display:none element
      // measures a zero-size rect, which would fire the pin immediately at the
      // top of the page instead of at the intended scroll position.
      const healingEls = healingImageRefs.current.filter(Boolean);
      if (window.innerWidth >= 1024 && healingSectionRef.current && healingHeadingRef.current && healingEls.length) {
        // Start each image a full viewport height below its resting slot, so it
        // begins below the fold. Using innerHeight rather than the element's own
        // getBoundingClientRect() matters here: rect.top is measured at mount
        // time, before the page has scrolled anywhere near this pinned section,
        // so it reflects a stale pre-scroll position — innerHeight doesn't
        // depend on scroll position at all, so it can't go stale like that.
        gsap.set(healingEls, { y: () => window.innerHeight, opacity: 1 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: healingHeadingRef.current,
            pin: healingSectionRef.current,
            start: 'center center',
            end: '+=2400',
            scrub: 1,
            pinSpacing: true,
          },
        });
        healingEls.forEach((el) => {
          tl.to(el, { y: 0, ease: 'none', duration: 1 })
            .to(el, { y: () => -window.innerHeight, opacity: 0, ease: 'none', duration: 1 });

          });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Logo — fixed overlay, GSAP animates it diagonally to navbar on scroll */}
      <div ref={heroLogoRef} className="fixed z-[55] pointer-events-none" style={{ left: 0, top: 0 }}>
        <Image src="/logonew.png" alt="Funky Physio Logo" width={96} height={96} className="h-24 w-auto" priority />
      </div>

      {/* Hero + WhatWeDo share a container so sticky hero only lives within it */}
      <div>
        <div className="lg:sticky lg:top-0 z-[1] h-screen">
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
      <section className="relative bg-white py-12 sm:py-16 px-6 sm:px-8 md:px-20 lg:px-32">
        <p className="font-syne text-lg font-bold text-black mb-8 sm:mb-10 tracking-wide">\George Anastasiou</p>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

          <div className="flex-1 w-full min-w-0">
            {/* Image + first line, aligned to the bottom of the image on sm+, stacked on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
              <div
                ref={georgeImageRef}
                className="flex-shrink-0 overflow-hidden w-40 h-52 sm:w-[200px] sm:h-[246px] md:w-[260px] md:h-[320px]"
              >
                <Image
                  src="/basketball/DSC_0079.jpg"
                  alt="George Anastasiou"
                  width={260}
                  height={320}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <p className="text-black text-2xl sm:text-3xl md:text-4xl font-normal font-syne leading-snug sm:leading-tight md:leading-10">
                Lorem dolor sit amet consectetur  Nullam viverra purus
              </p>
            </div>

            {/* Rest of the paragraph — spreads full width below */}
            <div ref={georgeTextRef} className="mt-4 sm:mt-2">
              <p className="text-black text-2xl sm:text-3xl md:text-4xl font-normal font-syne leading-snug sm:leading-tight md:leading-10">
                ac aliquet eget morbi non.
                Maliquet eget morbi non. Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod. aliquet eget morbi non.
                Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod. tis etiam lobortis tempor id. Sit aenean erat nunc
                amet et euismod. Sollicitudin at ipsum amet risus in proin cras condimenean erat nunc amet et euismod. Sollicitudinean
                erat nunc amet et euismod. Sollicitudin at ipsum amet risus in proin cras co at ipsum amet risus in proin cras coe&quot;
              </p>
            </div>
          </div>

          {/* Circular Learn More button — vertically centered against the whole text block on desktop, left-aligned below on mobile */}
          <div className="flex-shrink-0 self-start lg:self-center">
            <Link href="/about" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-black flex flex-col items-center justify-center text-center hover:bg-black hover:text-white transition-colors duration-300 group">
              <span className="font-syne text-[9px] lg:text-[10px] uppercase tracking-[2px] leading-tight text-black group-hover:text-white">LEARN<br />MORE</span>
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
      <section className="relative bg-[#412C46] overflow-hidden py-16 md:py-24 px-6 sm:px-8 md:px-20 lg:px-32 lg:min-h-[900px] flex items-start">
        {/* Decorative mask logo watermark, bleeding behind the left column */}
        <div className="absolute left-4 sm:left-20 top-0 h-[500px] sm:h-[650px] lg:h-[750px] w-full max-w-2xl opacity-20 pointer-events-none translate-y-[60px]">
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
          <div className="relative w-full h-[380px] sm:h-[460px] md:h-[550px] lg:h-[650px] lg:w-[560px] flex-shrink-0 overflow-hidden">
            <Image src="/funkydesk.png" alt="Funky Physio studio interior" fill className="object-cover" />
          </div>
        </div>
      </section>

      <LocationSection />

      {/* Healing Quote Section */}
      <section ref={healingSectionRef} className="relative bg-white py-16 md:py-24 lg:py-10 px-6 overflow-hidden mt-[50px]">
        {/* Mobile/tablet — simple static grid, no pin/scroll-jack (doesn't translate to touch) */}
        <div className="lg:hidden flex flex-col items-center text-center gap-8">
          <div className="w-full max-w-[360px] text-stone-800 text-4xl font-semibold font-syne leading-[1.3]">
            Healing isn&apos;t a return to before. It&apos;s a new way of moving forward.
          </div>
          <Image src="/logonew.png" alt="Funky Physio" width={64} height={40} className="w-16 h-10 object-contain brightness-0" />
          <div className="max-w-md text-stone-800 text-base font-medium font-syne leading-6">
            <p>Start your healing with us.</p>
            <p>Healing isn&apos;t something that happens to you. It&apos;s something you do, one session at a time, with people who are paying attention.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-xl">
            {healingImages.map((img) => (
              <div key={img.src} className={`bg-white p-2 pb-6 shadow-md ${img.rotate}`}>
                <div className="relative w-full aspect-square">
                  <Image src={img.src} alt="" fill sizes="300px" className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop — photos flank the text and slide up into place, pinned scroll-jack */}
        <div className="hidden lg:flex items-center justify-center gap-10 xl:gap-16 max-w-6xl mx-auto">
          <div className="flex flex-col gap-10">
            {[0, 2].map((i) => (
              <div
                key={healingImages[i].src}
                ref={(el) => { healingImageRefs.current[i] = el; }}
                className={`bg-white p-2 pb-6 shadow-md ${healingImages[i].rotate}`}
              >
                <div className="relative w-72 h-72">
                  <Image src={healingImages[i].src} alt="" fill sizes="300px" className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center gap-8 max-w-[456px] flex-shrink-0">
            <div ref={healingHeadingRef} className="w-full text-stone-800 text-5xl font-semibold font-syne leading-[62.40px]">
              Healing isn&apos;t a return to before. It&apos;s a new way of moving forward.
            </div>
            <Image src="/logonew.png" alt="Funky Physio" width={64} height={40} className="w-16 h-10 object-contain brightness-0" />
            <div className="max-w-md text-stone-800 text-base font-medium font-syne leading-6">
              <p>Start your healing with us.</p>
              <p>Healing isn&apos;t something that happens to you. It&apos;s something you do, one session at a time, with people who are paying attention.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {[1, 3].map((i) => (
              <div
                key={healingImages[i].src}
                ref={(el) => { healingImageRefs.current[i] = el; }}
                className={`bg-white p-2 pb-6 shadow-md ${healingImages[i].rotate}`}
              >
                <div className="relative w-72 h-72">
                  <Image src={healingImages[i].src} alt="" fill sizes="300px" className="object-cover" />
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
