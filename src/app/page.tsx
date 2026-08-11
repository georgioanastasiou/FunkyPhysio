'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import WhatWeDo from '@/components/WhatWeDo';
import LocationSection from '@/components/LocationSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const georgeImageRef = useRef<HTMLDivElement>(null);
  const georgeTextRef = useRef<HTMLDivElement>(null);
  const philosophyImageRef = useRef<HTMLDivElement>(null);
  const healingSectionRef = useRef<HTMLElement>(null);
  const healingHeadingRef = useRef<HTMLDivElement>(null);
  const healingImageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Order here is also the reveal order (index feeds healingImageRefs), chosen
  // to alternate sides — left, right, left, right — for a nicer scroll rhythm.
  const healingImages = [
    { src: '/physiotherapy.png', side: 'left', rotate: '' },
    { src: '/therapeutic-training.png', side: 'right', rotate: '' },
    { src: '/massage.png', side: 'left', rotate: '' },
    { src: '/funkydesk.png', side: 'right', rotate: '' },
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

  // GSAP animations — useGSAP (not a plain useEffect) matters here specifically because
  // the Healing section below is pinned by ScrollTrigger, which physically relocates that
  // <section> into an injected .pin-spacer wrapper outside React's knowledge. A plain
  // useEffect's cleanup (ctx.revert()) runs *after* React's own commit-phase DOM removal,
  // so on unmount/remount while pinned, React tries to removeChild the section from a
  // parent it no longer actually has — "NotFoundError: node is not a child of this node".
  // useGSAP cleans up synchronously before that removal (it's built for this).
  useGSAP(() => {
      /* ── Hero Logo fly-to-navbar-on-scroll animation (disabled) ──────────
      // Previously the logo lived outside this container as a fixed,
      // page-level sibling (so it could end up pinned near the navbar
      // regardless of scroll), and this block animated it from centered
      // above the heading to sitting left of the burger button as you
      // scrolled. Both positions were measured live off real DOM rects (the
      // heading, the burger button) instead of hardcoded breakpoint numbers,
      // so it lined up correctly at any screen size — including after a
      // resize, via onRefreshInit re-measuring the centered start position
      // from scratch (a plain gsap.set only ran once at mount, so it went
      // stale and drifted off-center on narrower viewports).
      //
      // The logo now just lives in normal document flow inside heroContentRef
      // (see the JSX below) so it scrolls away with the hero/WhatWeDo
      // container instead of staying fixed over every section on the page.
      // Re-enabling this would mean moving it back out to a fixed sibling.
      if (heroLogoRef.current && heroContentRef.current) {
        const logoEl = heroLogoRef.current;
        const contentEl = heroContentRef.current;
        const END_SCALE = 0.42;
        const GAP = 16;

        gsap.set(logoEl, { transformOrigin: 'left top' });

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
      ── end disabled block ────────────────────────────────────────────── */

      // Meet George — image reveal + parallax
      if (georgeImageRef.current) {
        // Reveal: clipped fully closed from the bottom up, then wiped open
        // top-to-bottom once as the image scrolls into view (plays once,
        // doesn't reverse on scroll-out — a one-shot entrance, not a scrub).
        gsap.fromTo(georgeImageRef.current,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: georgeImageRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );

        // Parallax: continuous subtle drift while the section is in view.
        gsap.fromTo(georgeImageRef.current,
          { yPercent: -8 },
          { yPercent: 8, ease: "none", scrollTrigger: { trigger: georgeImageRef.current.closest("section"), start: "top bottom", end: "bottom top", scrub: true } }
        );
      }

      // Our Philosophy — studio photo, same one-shot top-to-bottom reveal as
      // the Meet George image above.
      if (philosophyImageRef.current) {
        gsap.fromTo(philosophyImageRef.current,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: philosophyImageRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
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
            // Trigger and pin are the same element on purpose: pinning off a
            // different trigger (the heading, or anything not vertically centered
            // within the section) locks the section at whatever offset the
            // trigger condition happened to fire at, not at the viewport top —
            // leaving a permanent gap above it for the entire pinned duration.
            trigger: healingSectionRef.current,
            pin: healingSectionRef.current,
            start: 'top top',
            end: '+=2500',
            scrub: 1,
            pinSpacing: true,
          },
        });
        healingEls.forEach((el) => {
          tl.to(el, { y: 0, ease: 'none', duration: 1 })
            .to(el, { y: () => -window.innerHeight, opacity: 0, ease: 'none', duration: 1 });

          });
      }
  }, []);

  return (
    <>
      {/* Hero + WhatWeDo share a container so sticky hero only lives within it */}
      <div>
        <div className="lg:sticky lg:top-0 z-[1] h-screen">
          <section className="relative h-screen overflow-hidden flex items-center justify-center bg-funky-black">
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
              {/* Logo — lives in normal flow with the rest of the hero content now
                  (not position:fixed), so it scrolls away with the hero/WhatWeDo
                  container instead of staying pinned over every section on the
                  page. See the disabled fly-to-navbar block below for the old
                  behavior; re-enabling it would need this moved back out to a
                  fixed, page-level sibling the way it was before. */}
              <div ref={heroLogoRef} className="mx-auto mb-6 md:mb-8 w-fit">
                <Image src="/logonew.png" alt="Funky Physio Logo" width={96} height={96} className="h-16 md:h-24 w-auto" priority />
              </div>
              <h1 className="font-museo-moderno text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8">
                Funky Physio
              </h1>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white text-white font-semibold text-base md:text-lg rounded-[4px] hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </section>
        </div>
        {/* WhatWeDo slides up over the hero — once done, container ends and hero scrolls away */}
        <WhatWeDo />
      </div>
      {/* Meet George Section */}
      <section data-nav-theme="light" className="relative bg-white py-12 sm:py-16 px-6 sm:px-8 md:px-20 lg:px-32">
        <p className="font-syne font-semibold text-2xl tracking-[-0.02em] mb-8 sm:mb-10" style={{ color: '#241F21' }}>\George Anastasiou</p>

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

          <div className="flex-1 w-full min-w-0">
            {/* Image + first line, aligned to the bottom of the image on sm+, stacked on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
              <div
                ref={georgeImageRef}
                className="flex-shrink-0 overflow-hidden w-32 h-40 sm:w-[150px] sm:h-[185px] md:w-[195px] md:h-[240px]"
              >
                <Image
                  src="/basketball/DSC_0079.jpg"
                  alt="George Anastasiou"
                  width={195}
                  height={240}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <p className="text-funky-black text-2xl sm:text-3xl md:text-4xl font-normal font-syne leading-snug sm:leading-tight md:leading-10">
                Lorem dolor sit amet consectetur  Nullam viverra purus
              </p>
            </div>

            {/* Rest of the paragraph — spreads full width below */}
            <div ref={georgeTextRef} className="mt-4 sm:mt-2">
              <p className="text-funky-black text-2xl sm:text-3xl md:text-4xl font-normal font-syne leading-snug sm:leading-tight md:leading-10">
                ac aliquet eget morbi non.
                Maliquet eget morbi non. Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod. aliquet eget morbi non.
                Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod. tis etiam lobortis tempor id. Sit aenean erat nunc
                amet et euismod. Sollicitudin at ipsum amet risus in proin cras condimenean erat nunc amet et euismod. Sollicitudinean
                erat nunc amet et euismod. Sollicitudin at ipsum amet risus in proin cras co at ipsum amet risus in proin cras coe&quot;
              </p>
            </div>
          </div>

          {/* Circular Learn More button — vertically centered against the whole text block on desktop, left-aligned below on mobile.
              Inlined (rather than <Image>) so the arrow can be animated independently of the circle/lettering on hover. */}
          <div className="flex-shrink-0 self-start lg:self-center">
            <Link href="/about" className="group block w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
                <defs>
                  {/* Static window the arrow slides behind — clips it with a hard
                      edge (no fade) once it's translated outside these bounds. */}
                  <clipPath id="arrow-mask">
                    <rect x="27" y="65" width="57" height="16" />
                  </clipPath>
                </defs>
                <circle cx="55" cy="55" r="54.5" stroke="#241F21" />
                <path d="M34.9042 52.1362H34.2482L39.3522 42.6162H40.8882V53.0002H39.3522V45.0322L39.6882 45.1122L35.3842 53.0002H33.7682L29.4642 45.1282L29.8002 45.0482V53.0002H28.2642V42.6162H29.8002L34.9042 52.1362Z" fill="#241F21" />
                <path d="M49.1644 53.1762C48.0871 53.1762 47.1271 52.9575 46.2844 52.5202C45.4524 52.0829 44.7964 51.4642 44.3164 50.6642C43.8471 49.8642 43.6124 48.9149 43.6124 47.8162C43.6124 46.7069 43.8471 45.7522 44.3164 44.9522C44.7964 44.1522 45.4524 43.5335 46.2844 43.0962C47.1271 42.6589 48.0871 42.4402 49.1644 42.4402C50.2524 42.4402 51.2124 42.6589 52.0444 43.0962C52.8764 43.5335 53.5324 44.1522 54.0124 44.9522C54.4924 45.7522 54.7324 46.7069 54.7324 47.8162C54.7324 48.9149 54.4924 49.8642 54.0124 50.6642C53.5324 51.4642 52.8764 52.0829 52.0444 52.5202C51.2124 52.9575 50.2524 53.1762 49.1644 53.1762ZM49.1644 51.7842C49.9324 51.7842 50.6151 51.6349 51.2124 51.3362C51.8097 51.0375 52.2844 50.5949 52.6364 50.0082C52.9884 49.4215 53.1644 48.6909 53.1644 47.8162C53.1644 46.9415 52.9884 46.2109 52.6364 45.6242C52.2844 45.0375 51.8097 44.5949 51.2124 44.2962C50.6151 43.9869 49.9324 43.8322 49.1644 43.8322C48.4177 43.8322 47.7404 43.9869 47.1324 44.2962C46.5244 44.5949 46.0444 45.0375 45.6924 45.6242C45.3404 46.2109 45.1644 46.9415 45.1644 47.8162C45.1644 48.6909 45.3404 49.4215 45.6924 50.0082C46.0444 50.5949 46.5244 51.0375 47.1324 51.3362C47.7404 51.6349 48.4177 51.7842 49.1644 51.7842Z" fill="#241F21" />
                <path d="M57.4504 53.0002V42.6162H62.7944C63.5411 42.6162 64.1811 42.7282 64.7144 42.9522C65.2584 43.1655 65.6744 43.4962 65.9624 43.9442C66.2504 44.3815 66.3944 44.9415 66.3944 45.6242C66.3944 46.0935 66.3144 46.4935 66.1544 46.8242C66.0051 47.1442 65.7971 47.4109 65.5304 47.6242C65.2637 47.8375 64.9491 48.0029 64.5864 48.1202C64.2237 48.2375 63.8344 48.3122 63.4184 48.3442L63.3064 48.2482C63.9357 48.2695 64.4637 48.3389 64.8904 48.4562C65.3171 48.5735 65.6424 48.7869 65.8664 49.0962C66.1011 49.3949 66.2184 49.8429 66.2184 50.4402V53.0002H64.6664V50.4882C64.6664 50.0722 64.5971 49.7469 64.4584 49.5122C64.3197 49.2775 64.0797 49.1122 63.7384 49.0162C63.3971 48.9202 62.9171 48.8722 62.2984 48.8722H58.9864V53.0002H57.4504ZM58.9864 47.5282H62.7944C63.4771 47.5282 63.9891 47.3575 64.3304 47.0162C64.6824 46.6749 64.8584 46.2269 64.8584 45.6722C64.8584 45.1389 64.6824 44.7282 64.3304 44.4402C63.9891 44.1522 63.4771 44.0082 62.7944 44.0082H58.9864V47.5282Z" fill="#241F21" />
                <path d="M70.8139 48.5042V51.6242H77.5019V53.0002H69.2779V42.6162H77.4859V43.9922H70.8139V47.1602H76.2699V48.5042H70.8139Z" fill="#241F21" />
                <path d="M29.8002 26.6162V35.6242H35.9122V37.0002H28.2642V26.6162H29.8002Z" fill="#241F21" />
                <path d="M40.1433 32.5042V35.6242H46.8313V37.0002H38.6073V26.6162H46.8153V27.9922H40.1433V31.1602H45.5993V32.5042H40.1433Z" fill="#241F21" />
                <path d="M50.9964 34.4242V33.0482H56.5644V34.4242H50.9964ZM48.7404 37.0002L52.9804 26.6162H54.6124L58.8844 37.0002H57.2204L53.5084 27.6242H54.0844L50.3884 37.0002H48.7404Z" fill="#241F21" />
                <path d="M61.0904 37.0002V26.6162H66.4344C67.1811 26.6162 67.8211 26.7282 68.3544 26.9522C68.8984 27.1655 69.3144 27.4962 69.6024 27.9442C69.8904 28.3815 70.0344 28.9415 70.0344 29.6242C70.0344 30.0935 69.9544 30.4935 69.7944 30.8242C69.6451 31.1442 69.4371 31.4109 69.1704 31.6242C68.9037 31.8375 68.5891 32.0029 68.2264 32.1202C67.8637 32.2375 67.4744 32.3122 67.0584 32.3442L66.9464 32.2482C67.5757 32.2695 68.1037 32.3389 68.5304 32.4562C68.9571 32.5735 69.2824 32.7869 69.5064 33.0962C69.7411 33.3949 69.8584 33.8429 69.8584 34.4402V37.0002H68.3064V34.4882C68.3064 34.0722 68.2371 33.7469 68.0984 33.5122C67.9597 33.2775 67.7197 33.1122 67.3784 33.0162C67.0371 32.9202 66.5571 32.8722 65.9384 32.8722H62.6264V37.0002H61.0904ZM62.6264 31.5282H66.4344C67.1171 31.5282 67.6291 31.3575 67.9704 31.0162C68.3224 30.6749 68.4984 30.2269 68.4984 29.6722C68.4984 29.1389 68.3224 28.7282 67.9704 28.4402C67.6291 28.1522 67.1171 28.0082 66.4344 28.0082H62.6264V31.5282Z" fill="#241F21" />
                <path d="M81.7019 35.3042L81.2539 35.4642V26.6162H82.8059V37.0002H81.2539L74.0059 28.3442L74.4539 28.1842V37.0002H72.9179V26.6162H74.4539L81.7019 35.3042Z" fill="#241F21" />
                {/* Arrow — the only piece that animates on hover. Clipped by the
                    static mask above so it cuts off hard at that window's edge
                    instead of fading as it slides out/in. */}
                <g clipPath="url(#arrow-mask)">
                  <g className="[transform-box:fill-box] [transform-origin:center] group-hover:animate-arrow-out-in">
                    <path d="M83.7071 73.7071C84.0976 73.3166 84.0976 72.6834 83.7071 72.2929L77.3431 65.9289C76.9526 65.5384 76.3195 65.5384 75.9289 65.9289C75.5384 66.3195 75.5384 66.9526 75.9289 67.3431L81.5858 73L75.9289 78.6569C75.5384 79.0474 75.5384 79.6805 75.9289 80.0711C76.3195 80.4616 76.9526 80.4616 77.3431 80.0711L83.7071 73.7071ZM27 73V74H83V73V72H27V73Z" fill="#241F21" />
                  </g>
                </g>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Testimonials Section — flat cream strip, bleeds off the right edge */}
      <section data-nav-theme="light" className="relative bg-[#EDE8DF] py-16 md:py-20">
        <p className="font-syne font-semibold text-2xl tracking-[-0.02em] mb-10 px-8 md:px-20 lg:px-32" style={{ color: '#241F21' }}>\Real People, Real Results</p>

        <div className="flex gap-5 overflow-x-auto no-scrollbar pl-8 md:pl-20 lg:pl-32 pr-8 pb-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative flex-shrink-0 w-64 h-80 overflow-hidden group cursor-pointer">
              <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-funky-black/10 hover:bg-funky-black/20 transition-colors" aria-label="Play testimonial video">
                <Image src="/Button Play Testimonial.svg" alt="" width={68} height={67} className="w-16 h-16 group-hover:scale-110 transition-transform" />
              </button>
              <div className="absolute bottom-6 left-0 w-52 h-14 bg-white rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center px-4">
                <div className="text-funky-black text-base font-bold font-syne leading-tight">{testimonial.name}</div>
                <div className="text-funky-black text-xs font-medium font-syne leading-tight">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section data-nav-theme="purple" className="relative bg-[#412C46] overflow-hidden py-16 md:py-24 px-6 sm:px-8 md:px-20 lg:px-32 lg:min-h-[900px] flex items-start">
        {/* Decorative mask logo watermark, bleeding behind the left column */}
        <div className="absolute left-4 sm:left-20 top-0 h-[500px] sm:h-[650px] lg:h-[750px] w-full max-w-2xl opacity-20 pointer-events-none translate-y-[60px]">
          <Image src="/MaskLogo.png" alt="" fill className="object-contain object-left-bottom" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-10 w-full lg:items-stretch">
          {/* Left column: label + big heading pinned left, intro paragraphs pinned top-right next to the photo */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_260px] lg:grid-rows-[auto_1fr] gap-x-8">
            <p className="font-syne font-semibold text-2xl tracking-[-0.02em] text-[#F2FFAB] mb-10 lg:mb-0 lg:col-start-1 lg:row-start-1">\Our Philosophy</p>

            <div className="grid grid-cols-1 gap-5 max-w-xl mb-1 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-1 lg:max-w-none">
              <p className="text-[#F2FFAA] text-base font-syne leading-[130%] text-left">
                George holds a degree in Sports Science and Physiotherapy, and played
                professional basketball before moving into clinical practice — first-hand
                experience with how the body performs under load, and how it breaks down.
              </p>
              <p className="text-[#F2FFAA] text-base font-syne leading-[130%] text-left">
                Trained in Orthopaedic Manual Therapy (OMT), he practised for five years in
                Berlin before opening his own studio in Barcelona. His focus areas include
                sports injuries, post-surgical rehab, chronic pain, and shoulder, knee and hip conditions.
              </p>
            </div>

            <p className="pt-16 lg:pt-0 text-[#F2FFAB] text-[48px] font-normal font-syne tracking-[-0.02em] leading-[110%] max-w-2xl lg:max-w-none lg:col-span-2 lg:row-start-2 lg:self-end text-left">
              Five years of clinical practice, one approach: an accurate diagnosis and a treatment plan built around how you actually move.
            </p>
          </div>

          {/* Right column: interior photo, explicit larger height so it isn't capped by the text column's content height, no border radius */}
          <div ref={philosophyImageRef} className="relative w-full h-[380px] sm:h-[460px] md:h-[550px] lg:h-[650px] lg:w-[560px] flex-shrink-0 overflow-hidden">
            <Image src="/funkydesk.png" alt="Funky Physio studio interior" fill className="object-cover" />
          </div>
        </div>
      </section>

      <LocationSection />

      {/* Healing Quote Section — lg:min-h-screen so the pinned section always fills the
          viewport exactly; without it, the section's own (shorter) content height left a
          gap below it while pinned/fixed, showing the page's white background through and
          making it look like a white box was being shoved in from below. */}
      <section ref={healingSectionRef} data-nav-theme="light" className="relative bg-[#EDE8DF] pt-[114px] md:pt-[146px] pb-16 md:pb-24 lg:py-0 lg:min-h-screen lg:flex lg:items-center lg:justify-center px-6 overflow-hidden">
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
    </>
  );
}
