'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const services = [
  {
    label: 'Physiotherapy',
    heading: ['Diagnose', 'Recovery'],
    body: 'Evidence-based physiotherapy tailored to your body. From assessment and diagnosis to full recovery, we restore your movement, strength, and quality of life.',
    image: '/whatwedo-diagnoserecovery.jpg',
    imagePosition: 'center', // source aspect ratio nearly matches the container already
  },
  {
    label: 'Massage',
    heading: ['Release', 'Restore'],
    body: 'From sports massage to deep tissue techniques, our hands-on therapy relieves tension, aids recovery, and revitalizes your body and mind.',
    image: '/whatwedo-massage.jpg' as string | undefined,
    imagePosition: 'center', // source aspect ratio nearly matches the container already
  },
  {
    label: 'Therapy Training',
    heading: ['Move', 'Thrive'],
    body: 'Functional movement and therapeutic training to rebuild strength, correct posture, and unlock your full athletic potential.',
    image: '/whatwedo-move.jpg' as string | undefined,
    imagePosition: 'center',
  },
];

// ── Colour interpolation helpers ────────────────────────────────────────
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
  const imageLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Every panel shares the same py padding/structure, so panel 0's text block
  // (heading-top to body-bottom) is measured once and used as the target
  // height for both the image and the divider, on every panel.
  const textContentRef = useRef<HTMLDivElement>(null);
  const [mediaHeight, setMediaHeight] = useState<number | null>(null);

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
          // Selected/unselected share the same weight, size, tracking and colour —
          // only opacity distinguishes them (40% inactive, full at active).
          gsap.set(labelRefs.current[i], { opacity: 0.4 + active * 0.6 });
        }
        if (segmentRefs.current[i]) {
          gsap.set(segmentRefs.current[i], { backgroundColor: lerpColor(SEG_LIGHT, SEG_DARK, active) });
        }

        // Image layers — independent of the panel wipe above. The first image
        // is a static base (always fully shown, never touched here); each
        // later image reveals top-to-bottom over whatever was showing before
        // as its own segment starts, and — since nothing re-covers it after —
        // simply stays put through any later segment that has no image of its
        // own (e.g. Therapy Training), instead of reverting or disappearing.
        if (i > 0 && imageLayerRefs.current[i]) {
          const segStart = i * segW;
          const reveal = Math.min(Math.max((p - (segStart - blend)) / (2 * blend), 0), 1);
          gsap.set(imageLayerRefs.current[i], { clipPath: `inset(0% 0% ${(1 - reveal) * 100}% 0%)` });
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

  // Measure the text column's actual rendered span (title-top to
  // description-bottom) so the image/divider height can match it exactly,
  // instead of a viewport-relative guess. useLayoutEffect so it's applied
  // before first paint — no visible size jump on load.
  useLayoutEffect(() => {
    const measure = () => {
      const el = textContentRef.current;
      // Below xl the image/divider pairing is hidden entirely (see their
      // `hidden xl:flex` / `xl:h-[...]` classes) — reset so a stale wide-
      // viewport measurement can't leak into that layout after a resize.
      if (!el || window.innerWidth < 1280) { setMediaHeight(null); return; }
      setMediaHeight(el.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <>
      {/* Mobile/tablet — simple static stacked list, no scroll-jack (that interaction doesn't translate well to touch/short viewports) */}
      <section data-nav-theme="light" className="lg:hidden bg-[#EDE8DF] px-6 sm:px-10 py-16 sm:py-20">
        <div className="flex flex-col gap-14 sm:gap-16">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col">
              <h3 className="font-syne font-semibold text-4xl text-funky-black tracking-[-0.02em] leading-tight">
                {s.label}
              </h3>
              <p className="mt-2 font-syne text-2xl text-funky-black tracking-[-0.02em] leading-tight">
                {s.heading.join(' - ')}
              </p>
              <div className="mt-4 h-px w-full bg-funky-black/20" />
              {s.image && (
                <div className="relative mt-4 w-full aspect-[359/435] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: s.imagePosition }}
                  />
                </div>
              )}
              <p className="mt-4 font-syne text-base text-funky-black tracking-[-0.02em] leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop — scroll-scrubbed pinned panel wipe */}
      <div ref={wrapperRef} className="hidden lg:block" style={{ height: 'calc(100vh + 2400px)' }}>
      <section data-nav-theme="light" className="sticky top-0 z-[20] h-screen bg-[#EDE8DF] overflow-hidden">
        <div className="w-full h-full flex">

          {/* Left — service list */}
          <div className="w-[40%] flex flex-col justify-center px-10 md:px-16 lg:px-24">
            {services.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3 mb-2">
                <span
                  ref={(el) => { arrowRefs.current[i] = el; }}
                  className="flex-shrink-0"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <Image src="/codicon_arrow-up.svg" alt="" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6" />
                </span>
                <span
                  ref={(el) => { labelRefs.current[i] = el; }}
                  className="font-syne font-semibold text-[40px] tracking-[-0.02em]"
                  style={{ color: '#241F21', opacity: i === 0 ? 1 : 0.4 }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider — 3 segments. The image only renders at xl+ (hidden below
              that), so only there does the divider match its height (the
              measured text-column span, same as the image) and center the
              same way the image does; below xl it stretches full height same
              as before, since there's no image to line up with. The clamp()
              is just the pre-measurement/SSR fallback — mediaHeight overrides
              it the instant useLayoutEffect measures the real text column. */}
          <div
            className="flex flex-col self-stretch my-16 xl:self-center xl:my-0 xl:h-[clamp(320px,32vw,624px)] gap-1"
            style={{ width: '1px', height: mediaHeight ? `${mediaHeight}px` : undefined }}
          >
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
                className="absolute inset-0 flex flex-row items-center justify-between gap-8 xl:gap-6 pl-4 pr-10 md:pr-16 lg:pr-24 xl:pr-10 py-16 lg:py-24 bg-[#EDE8DF]"
                style={{ clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
              >
                <div
                  ref={i === 0 ? textContentRef : undefined}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    {s.heading.map((word) => (
                      <span
                        key={word}
                        className="block font-syne font-normal text-[40px] tracking-[-0.02em] leading-[1.1]"
                        style={{ color: '#241F21' }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                  <p className={`font-syne text-sm lg:text-base text-funky-black leading-relaxed ${s.image ? 'max-w-[200px]' : 'max-w-xs'}`}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Shared image stack — sits above the panels' own text/wipe, not
                inside any single one, so each new photo can reveal top-to-bottom
                over whichever photo was showing before without that older photo
                moving or re-animating at all. Width stays the same responsive
                clamp() already verified to leave a clean 24px gap against the
                text column at every screen size — that part never changes,
                since growing it in lockstep with height (plain aspect-square)
                is what used to collide with the text on tall viewports.
                Height instead now comes from mediaHeight (the measured
                title-top-to-body-bottom span), so the image's top/bottom
                edges line up with the title and description exactly, without
                the width ever exceeding its safe, collision-free size. The
                aspect-square class is just the pre-measurement/SSR fallback. */}
            <div className="absolute inset-0 hidden xl:flex items-center justify-end pr-10 md:pr-16 lg:pr-24 xl:pr-[clamp(118px,28vw_-_241px,300px)] py-16 lg:py-24 pointer-events-none">
              <div
                className="relative w-[clamp(320px,32vw,624px)] aspect-square flex-shrink-0"
                style={{ height: mediaHeight ? `${mediaHeight}px` : undefined }}
              >
                {services.map((s, i) => s.image && (
                  <div
                    key={s.image}
                    ref={(el) => { imageLayerRefs.current[i] = el; }}
                    className="absolute inset-0"
                    style={{ clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', zIndex: i }}
                  >
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="624px"
                      className="object-cover"
                      style={{ objectPosition: s.imagePosition }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      </div>
    </>
  );
}
