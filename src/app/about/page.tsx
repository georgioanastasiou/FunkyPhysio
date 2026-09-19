'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  const timelineSteps = [
    {
      year: '2010-2018',
      image: '/basketball/DSC_0114.jpg',
      imageAlt: 'George playing professional basketball',
      title: 'Pro basketball player',
      subtitle: 'Injuries & Challenges',
      description: [
        'Playing professional basketball taught me resilience and the importance of proper body mechanics. The kind of lesson that only comes from pushing a body to its limits day after day. It sharpened my eye for how small compensations and misalignments build up over time.',
        'Through experiencing injuries, surgeries, and rehabilitation, I developed a deep understanding of what athletes and active individuals go through during recovery. I learned how much patience and mental resilience the process demands, and that a good recovery plan has to be realistic, honest about setbacks, and built around what matters most to the person going through it.',
      ],
      side: 'left'
    },
    {
      year: '2014-2018',
      image: '/tefaa.jpg',
      imageAlt: 'Sports Science studies',
      title: 'BSc Sports Science',
      subtitle: 'Academic Foundation',
      description: [
        'Pursued Sports Science to understand the body holistically. How everything connects rather than treating each part separately. That way of thinking has stayed with me: it means I look beyond the injured joint or muscle to how the rest of the body is compensating, and treat the whole chain rather than just the point of pain.',
        "This foundation gave me the scientific knowledge to approach movement and recovery systematically. It taught me to base treatment on evidence rather than guesswork, to track progress methodically, and to adapt a plan as the data from each session tells me what's actually working.",
      ],
      side: 'right'
    },
    {
      year: '2018-2022',
      image: '/physiodegree.jpeg',
      imageAlt: 'Physiotherapy studies',
      title: 'BSc Physiotherapy',
      subtitle: 'Professional Training',
      description: [
        'Completed my BSc in Physiotherapy and learned proper diagnosis, treatment planning, and the anatomy and pathology behind an injury. I came in contact with a full range of conditions a physio treats, from post-surgical patients to chronic pain to elderly mobility.',
        "Working with such a wide range of patients during my studies taught me that every recovery looks different, and that a treatment plan has to be built around a person's specific body, lifestyle, and goals rather than a one-size-fits-all protocol.",
      ],
      side: 'left'
    },
    {
      year: '2022-2025',
      image: '/berlinpractice.jpg',
      imageAlt: 'Working in Berlin',
      title: 'Berlin Work Experience',
      subtitle: 'Professional Growth',
      description: [
        "Gaining clinical experience in Berlin exposed me to the precision and structure the German healthcare system is known for: rigorous documentation, close collaboration with doctors and specialists, and protocols that leave little room for guesswork. Working alongside experienced physiotherapists there pushed me to sharpen my assessment skills and be far more exact in how I test and track a patient's progress. It also meant treating a much broader, more international patient base, which taught me to adapt my communication and approach to each person rather than relying on a single method.",
      ],
      side: 'right'
    },
    {
      year: '2026',
      image: '/OMT.jpeg',
      imageAlt: 'Barcelona studio',
      title: 'OMT Kaltenborn Concept',
      subtitle: 'Current Practice',
      description: [
        "Training in the OMT Kaltenborn concept gave me a precise, structured approach to manual therapy. Testing each joint's mobility and end-feel individually to pinpoint exactly which movement is restricted and why, rather than treating an area in general terms. It's a method built on biomechanics and careful manual assessment, and it sharpened my hands to a level of precision I hadn't had before.",
        "That precision changed how I treat: rather than applying a generic technique, I assess a joint systematically, choose the specific mobilization it needs, and re-test immediately to confirm it worked. It's given me a clinical reasoning framework I rely on with nearly every patient, especially when a problem isn't responding to more general treatment.",
      ],
      side: 'left'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero title ──
      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      // ── Timeline line ──
      if (timelineLineRef.current && timelineSectionRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineSectionRef.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: 0.5,
            },
          }
        );
      }

      // ── Timeline items ──
      const timelineImages: { el: Element; isRight: boolean; item: Element }[] = [];
      document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const isRight = index % 2 !== 0;
        const image = item.querySelector('.timeline-image');
        const dot = item.querySelector('.timeline-dot');
        const children = item.querySelectorAll('.animate-child');

        if (dot) {
          gsap.from(dot, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (image) {
          timelineImages.push({ el: image, isRight, item });
        }

        if (children.length) {
          gsap.from(children, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // Image reveal differs by breakpoint: desktop keeps the alternating
      // slide-in from whichever side the text sits on, but that reads oddly
      // once the layout stacks to a single column on mobile — so mobile
      // instead wipes the image into view top-to-bottom via a clip-path
      // reveal (fully hidden below a receding top edge, rather than sliding
      // in from the side).
      const timelineImageMM = gsap.matchMedia();
      timelineImageMM.add('(min-width: 1024px)', () => {
        timelineImages.forEach(({ el, isRight, item }) => {
          gsap.from(el, {
            opacity: 0,
            x: isRight ? 100 : -100,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        });
      });
      timelineImageMM.add('(max-width: 1023.98px)', () => {
        timelineImages.forEach(({ el, item }) => {
          gsap.fromTo(el,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      });

      // ── CTA section ──
      if (ctaSectionRef.current) {
        gsap.from(ctaSectionRef.current.querySelectorAll('.cta-animate'), {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#EDE8DF]">
      {/* Hero Section */}
      <section data-nav-theme="purple" className="relative h-[350px] md:h-[400px] overflow-hidden bg-[#412C46]">
        {/* Decorative wave logo watermark — same mark used in the Our Philosophy
            section on the homepage, centered here behind the heading */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-20 pointer-events-none">
          <div className="relative w-[320px] sm:w-[450px] md:w-[550px] aspect-[1246/832]">
            <Image src="/MaskLogo.png" alt="" fill className="object-contain" />
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 ref={heroTitleRef} className="text-4xl md:text-5xl font-semibold text-center px-4" style={{ color: '#F2FFAB' }}>
            Meet George Anastasiou
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineSectionRef} data-nav-theme="light" className="timeline-section py-20 relative bg-[#EDE8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-32 relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
              style={{ top: '275px', height: 'calc(100% - 550px)' }}
            >
              <div
                ref={timelineLineRef}
                className="absolute left-0 w-0.5 top-0"
                style={{
                  height: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, #78428F 0px, #78428F 8px, transparent 8px, transparent 16px)',
                  willChange: 'height',
                }}
              />
            </div>

            {timelineSteps.map((step, index) => (
              <div key={index} className="relative timeline-item">
                {/* Timeline dot */}
                <div
                  className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#EDE8DF] rounded-full border-2 border-[#78428F] z-10 hidden lg:flex items-center justify-center"
                  style={{ top: '275px' }}
                >
                  <div className="w-2 h-2 bg-[#78428F] rounded-full" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${step.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`${step.side === 'right' ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="timeline-image relative w-full h-[550px] bg-[#D9D9D9] rounded-[6px] overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${step.side === 'right' ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="space-y-4">
                      <div className="animate-child inline-block mb-4">
                        <span className="px-4 py-2 text-funky-black font-semibold rounded-[5px] text-sm border-2 border-funky-black">
                          {step.year}
                        </span>
                      </div>
                      <h2 className="animate-child text-4xl font-semibold text-funky-black leading-tight">
                        {step.title}
                      </h2>
                      <h3 className="animate-child text-2xl font-medium text-funky-black leading-tight">
                        {step.subtitle}
                      </h3>
                      <div className="space-y-4">
                        {step.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="animate-child text-base font-normal text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} data-nav-theme="purple" className="relative bg-[#412C46] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="cta-animate text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="cta-animate text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your consultation today and experience personalized physiotherapy care tailored to your needs.
          </p>
          <div className="cta-animate">
            <a
              href="https://app.serenna.es/c/funky-physio"
              className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#78428F] font-bold text-lg rounded-lg hover:bg-white/90 transition-colors shadow-xl hover:scale-105 transform duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
