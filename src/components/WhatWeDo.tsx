'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dot0 = useRef<HTMLDivElement>(null);
  const dot1 = useRef<HTMLDivElement>(null);
  const dot2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const vw = window.innerWidth;
    const isMobile = vw < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: isMobile ? '+=3000' : '+=3200',
          scrub: isMobile ? 2.5 : 2,
          onUpdate: (self) => {
            const p = self.progress;
            const dots = [dot0.current, dot1.current, dot2.current];
            const active = p < 0.38 ? 0 : p < 0.75 ? 1 : 2;
            dots.forEach((d, i) => {
              if (!d) return;
              gsap.to(d, {
                width: i === active ? 40 : 20,
                opacity: i === active ? 1 : 0.35,
                duration: 0.3,
                overwrite: 'auto',
              });
            });
          },
        },
      });

      tl.from('.p1-label',  { opacity: 0, y: 24, x: 20, duration: 1, ease: 'power3.out' }, 0)
        .from('.p1-h1',     { opacity: 0, y: 60, x: 30, duration: 1, ease: 'power3.out' }, 0.3)
        .from('.p1-h2',     { opacity: 0, y: 60, x: 30, duration: 1, ease: 'power3.out' }, 0.55)
        .from('.p1-h3',     { opacity: 0, y: 60, x: 30, duration: 1, ease: 'power3.out' }, 0.8)
        .from('.p1-body',   { opacity: 0, y: 30, x: 20, duration: 1, ease: 'power3.out' }, 1.1)
        .from('.p1-items',  { opacity: 0, y: 20, x: 16, stagger: 0.15, duration: 1, ease: 'power3.out' }, 1.4)
        .to(track, { x: -vw, ease: 'power2.inOut', duration: 1 }, 2)
        .from('.p2-label', { opacity: 0, y: 24, x: 20, duration: 1, ease: 'power3.out' }, 3)
        .from('.p2-head',  { opacity: 0, y: 60, x: 30, stagger: 0.2, duration: 1, ease: 'power3.out' }, 3.25)
        .from('.p2-body',  { opacity: 0, y: 30, x: 20, duration: 1, ease: 'power3.out' }, 3.9)
        .from('.p2-items', { opacity: 0, y: 20, x: 16, stagger: 0.15, duration: 1, ease: 'power3.out' }, 4.2)
        .to(track, { x: -2 * vw, ease: 'power2.inOut', duration: 1 }, 4.8)
        .from('.p3-label', { opacity: 0, y: 24, x: 20, duration: 1, ease: 'power3.out' }, 5.8)
        .from('.p3-head',  { opacity: 0, y: 60, x: 30, stagger: 0.2, duration: 1, ease: 'power3.out' }, 6.05)
        .from('.p3-body',  { opacity: 0, y: 30, x: 20, duration: 1, ease: 'power3.out' }, 6.7)
        .from('.p3-items', { opacity: 0, y: 20, x: 16, stagger: 0.15, duration: 1, ease: 'power3.out' }, 7.0);
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: '4200px' }} className="relative">
      <section
        ref={sectionRef}
        className="sticky top-0 overflow-hidden bg-black"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <p className="text-white/40 font-syne text-[10px] uppercase tracking-[6px]">What We Do</p>
        </div>

        <div ref={trackRef} className="flex h-full will-change-transform" style={{ width: '300vw' }}>

          {/* PANEL 1 — Physiotherapy */}
          <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/hero-video1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-32">
              <p className="p1-label text-[10px] uppercase tracking-[5px] text-white/50 font-syne mb-4 md:mb-8">01 — Physiotherapy</p>
              <h2 className="font-syne font-semibold text-white leading-none mb-4 md:mb-8">
                <span className="p1-h1 block text-4xl sm:text-5xl md:text-8xl">Heal.</span>
                <span className="p1-h2 block text-4xl sm:text-5xl md:text-8xl">Recover.</span>
                <span className="p1-h3 block text-4xl sm:text-5xl md:text-8xl">Perform.</span>
              </h2>
              <p className="p1-body text-white/60 font-syne text-xs md:text-base max-w-[260px] md:max-w-sm leading-relaxed mb-4 md:mb-8">
                Evidence-based physiotherapy tailored to your body. From rehabilitation to injury prevention, we restore your movement and strength.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Treatment Sessions', 'Rehabilitation', 'Prevention & Education'].map((item) => (
                  <li key={item} className="p1-items text-white/45 font-syne text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[3px] flex items-center gap-3">
                    <span className="inline-block w-4 md:w-6 h-px bg-white/30 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-8 right-6 md:bottom-12 md:right-14 text-white/25 font-syne text-[9px] uppercase tracking-[3px] hidden sm:flex items-center gap-2 z-10">
              Scroll <span className="text-sm">→</span>
            </div>
          </div>

          {/* PANEL 2 — Movement Training */}
          <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
            <Image src="/therapeutic-training.png" alt="Movement Training" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-32">
              <p className="p2-label text-[10px] uppercase tracking-[5px] text-white/50 font-syne mb-4 md:mb-8">02 — Movement Training</p>
              <h2 className="font-syne font-semibold text-white leading-none mb-4 md:mb-8">
                {['Move.', 'Train.', 'Thrive.'].map((word) => (
                  <span key={word} className="p2-head block text-4xl sm:text-5xl md:text-8xl">{word}</span>
                ))}
              </h2>
              <p className="p2-body text-white/60 font-syne text-xs md:text-base max-w-[260px] md:max-w-sm leading-relaxed mb-4 md:mb-8">
                Functional movement and therapeutic training to rebuild strength, correct posture, and unlock your athletic potential.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Postural Reeducation', 'Functional Exercise', 'Movement Pattern Correction'].map((item) => (
                  <li key={item} className="p2-items text-white/45 font-syne text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[3px] flex items-center gap-3">
                    <span className="inline-block w-4 md:w-6 h-px bg-white/30 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PANEL 3 — Wellness Massage */}
          <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
            <Image src="/massage.png" alt="Wellness Massage" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-32">
              <p className="p3-label text-[10px] uppercase tracking-[5px] text-white/50 font-syne mb-4 md:mb-8">03 — Wellness Massage</p>
              <h2 className="font-syne font-semibold text-white leading-none mb-4 md:mb-8">
                {['Release.', 'Restore.', 'Renew.'].map((word) => (
                  <span key={word} className="p3-head block text-4xl sm:text-5xl md:text-8xl">{word}</span>
                ))}
              </h2>
              <p className="p3-body text-white/60 font-syne text-xs md:text-base max-w-[260px] md:max-w-sm leading-relaxed mb-4 md:mb-8">
                From sports massage to deep tissue techniques, our hands-on therapy relieves tension, aids recovery, and revitalizes your body.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Sports Massage', 'Friction Massage', 'Deep Tissue Massage'].map((item) => (
                  <li key={item} className="p3-items text-white/45 font-syne text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[3px] flex items-center gap-3">
                    <span className="inline-block w-4 md:w-6 h-px bg-white/30 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 pointer-events-none">
          <div ref={dot0} style={{ width: 40, height: 1, opacity: 1 }} className="bg-white rounded-full" />
          <div ref={dot1} style={{ width: 20, height: 1, opacity: 0.35 }} className="bg-white rounded-full" />
          <div ref={dot2} style={{ width: 20, height: 1, opacity: 0.35 }} className="bg-white rounded-full" />
        </div>
      </section>
    </div>
  );
}
