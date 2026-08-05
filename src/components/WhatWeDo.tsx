'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  {
    label: 'Physiotherapy',
    heading: ['Diagnose', 'Recovery'],
    body: 'Evidence-based physiotherapy tailored to your body. From assessment and diagnosis to full recovery, we restore your movement, strength, and quality of life.',
  },
  {
    label: 'Massage',
    heading: ['Release', 'Restore'],
    body: 'From sports massage to deep tissue techniques, our hands-on therapy relieves tension, aids recovery, and revitalizes your body and mind.',
  },
  {
    label: 'Therapy Training',
    heading: ['Move', 'Thrive'],
    body: 'Functional movement and therapeutic training to rebuild strength, correct posture, and unlock your full athletic potential.',
  },
];

// ── Colour interpolation helpers ────────────────────────────────────────
const LABEL_LIGHT: [number, number, number] = [176, 168, 152]; // #B0A898
const LABEL_DARK: [number, number, number] = [17, 17, 17];     // #111111
const SEG_LIGHT: [number, number, number] = [200, 191, 180];   // #C8BFB4
const SEG_DARK: [number, number, number] = [26, 26, 26];       // #1a1a1a

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpColor = (a: [number, number, number], b: [number, number, number], t: number) =>
  `rgb(${Math.round(lerp(a[0], b[0], t))}, ${Math.round(lerp(a[1], b[1], t))}, ${Math.round(lerp(a[2], b[2], t))})`;

// Dwell-then-blend crossfade: each panel stays fully visible in the middle of
// its own scroll segment, then smoothly fades into the next panel over a
// short scroll distance around each boundary — a pure function of scroll
// position, so it can never desync or overlap even on fast scrolling.
function computeActive(i: number, p: number, N: number, segW: number, blend: number) {
  const segStart = i * segW;
  const segEnd = (i + 1) * segW;

  if (p >= segStart + blend && p <= segEnd - blend) return 1;
  if (i > 0 && p >= segStart - blend && p < segStart + blend) {
    return (p - (segStart - blend)) / (2 * blend);
  }
  if (i < N - 1 && p > segEnd - blend && p <= segEnd + blend) {
    return 1 - (p - (segEnd - blend)) / (2 * blend);
  }
  if (i === 0 && p < segStart + blend) return 1;
  if (i === N - 1 && p > segEnd - blend) return 1;
  return 0;
}

export default function WhatWeDo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rawProgress = useRef(0);
  const smoothProgress = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const N = services.length;
    const segW = 1 / N;
    const blend = segW * 0.3; // width of each smooth crossfade zone

    const applyFrame = (p: number) => {
      if (window.innerWidth < 1024) return; // desktop-only scroll-jack; mobile/tablet render a static stacked layout instead
      services.forEach((_, i) => {
        const active = computeActive(i, p, N, segW, blend);

        if (panelRefs.current[i]) {
          gsap.set(panelRefs.current[i], { clipPath: `inset(0% 0% ${(1 - active) * 100}% 0%)` });
        }
        if (arrowRefs.current[i]) {
          gsap.set(arrowRefs.current[i], { opacity: active, x: (1 - active) * -8 });
        }
        if (labelRefs.current[i]) {
          gsap.set(labelRefs.current[i], { color: lerpColor(LABEL_LIGHT, LABEL_DARK, active) });
          labelRefs.current[i]!.style.fontWeight = active > 0.5 ? '700' : '400';
        }
        if (segmentRefs.current[i]) {
          gsap.set(segmentRefs.current[i], { backgroundColor: lerpColor(SEG_LIGHT, SEG_DARK, active) });
        }
      });
    };

    // rAF loop — eases the visual progress toward the raw scroll progress
    // every frame so motion stays buttery even with choppy scroll/trackpad
    // input. Because the visuals are always a pure function of position,
    // this can never overlap or desync no matter how fast you scroll.
    const tick = () => {
      smoothProgress.current = lerp(smoothProgress.current, rawProgress.current, 0.15);
      applyFrame(smoothProgress.current);
      rafId.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrolled = -rect.top;
      rawProgress.current = Math.min(Math.max(scrolled / 2400, 0), 1);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    smoothProgress.current = rawProgress.current;
    applyFrame(smoothProgress.current); // paint immediately, no initial lag
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Mobile/tablet — simple static stacked list, no scroll-jack (that interaction doesn't translate well to touch/short viewports) */}
      <section className="lg:hidden bg-[#EDE8DF] px-6 sm:px-10 py-16 sm:py-20">
        <div className="flex flex-col gap-12 sm:gap-16">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col gap-3 sm:gap-4">
              <span className="font-syne text-sm sm:text-base uppercase tracking-[2px] text-[#7C6F63] font-semibold">
                {s.label}
              </span>
              <div>
                {s.heading.map((word) => (
                  <span key={word} className="block font-syne font-semibold text-4xl sm:text-5xl text-[#111] leading-[1.1]">
                    {word}
                  </span>
                ))}
              </div>
              <p className="font-syne text-sm sm:text-base text-[#888] leading-relaxed max-w-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop — scroll-scrubbed pinned panel wipe */}
      <div ref={wrapperRef} className="hidden lg:block" style={{ height: 'calc(100vh + 2400px)' }}>
      <section className="sticky top-0 z-[20] h-screen bg-[#EDE8DF] overflow-hidden">
        <div className="w-full h-full flex">

          {/* Left — service list */}
          <div className="w-[40%] flex flex-col justify-center px-10 md:px-16 lg:px-24">
            {services.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3 mb-6 lg:mb-8">
                <span
                  ref={(el) => { arrowRefs.current[i] = el; }}
                  className="font-syne text-lg lg:text-2xl text-[#111] flex-shrink-0"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  →
                </span>
                <span
                  ref={(el) => { labelRefs.current[i] = el; }}
                  className="font-syne text-xl lg:text-2xl xl:text-3xl"
                  style={{ color: i === 0 ? '#111111' : '#B0A898', fontWeight: i === 0 ? 700 : 400 }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider — 3 segments */}
          <div className="flex flex-col self-stretch my-16 gap-1" style={{ width: '1px' }}>
            {services.map((_, i) => (
              <div
                key={i}
                ref={(el) => { segmentRefs.current[i] = el; }}
                className="flex-1"
                style={{ backgroundColor: i === 0 ? '#1a1a1a' : '#C8BFB4' }}
              />
            ))}
          </div>

          {/* Right — content panels */}
          <div className="flex-1 relative overflow-hidden">
            {services.map((s, i) => (
              <div
                key={s.label}
                ref={(el) => { panelRefs.current[i] = el; }}
                className="absolute inset-0 flex flex-col justify-between px-10 md:px-16 lg:px-24 py-16 lg:py-24 bg-[#EDE8DF]"
                style={{ clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
              >
                <div>
                  {s.heading.map((word) => (
                    <span key={word} className="block font-syne font-semibold text-5xl lg:text-6xl xl:text-7xl text-[#111] leading-[1.1]">
                      {word}
                    </span>
                  ))}
                </div>
                <p className="font-syne text-sm lg:text-base text-[#888] leading-relaxed max-w-xs">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
      </div>
    </>
  );
}
