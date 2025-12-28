'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLElement>(null);

  const timelineSteps = [
    {
      year: '2018',
      image: '/basketball/DSC_0079.jpg',
      imageAlt: 'George playing professional basketball',
      title: 'Pro basketball player',
      subtitle: 'Injuries & Challenges',
      description: 'Playing professional basketball taught me resilience and the importance of proper body mechanics. Through experiencing injuries, surgeries, and rehabilitation firsthand, I developed a deep understanding of what athletes and active individuals go through during recovery.',
      side: 'left'
    },
    {
      year: '2020',
      image: '/basketball/DSC_0114.jpg',
      imageAlt: 'Sports Science studies',
      title: 'Sports Science',
      subtitle: 'Academic Foundation',
      description: 'Pursued Sports Science to understand the body holistically—how everything connects rather than treating each part separately. This foundation gave me the scientific knowledge to approach movement and recovery systematically.',
      side: 'right'
    },
    {
      year: '2022',
      image: '/basketball/DSC_0231.jpg',
      imageAlt: 'Physiotherapy studies',
      title: 'Physiotherapy',
      subtitle: 'Professional Training',
      description: 'Combined my athletic experience with professional physiotherapy training. Learning evidence-based practices and manual therapy techniques to help others move without pain and achieve their goals.',
      side: 'left'
    },
    {
      year: '2024',
      image: '/basketball/DSC_0676.jpg',
      imageAlt: 'Working in Berlin',
      title: 'Berlin Practice',
      subtitle: 'Professional Growth',
      description: 'Gained diverse experience working in Berlin, treating a wide range of patients from athletes to office workers. Developed my approach to patient-centered care and learned the importance of education in the healing process.',
      side: 'right'
    },
    {
      year: '2026',
      image: '/basketball/DSC_0079.jpg',
      imageAlt: 'Barcelona studio',
      title: 'Barcelona Studio',
      subtitle: 'Current Practice',
      description: 'Now running my own practice in Barcelona, combining athlete mindset, scientific knowledge, and genuine care. Creating a space where movement becomes enjoyable, healing, and empowering.',
      side: 'left'
    }
  ];

  useEffect(() => {
    if (timelineLineRef.current && timelineSectionRef.current) {
      // Animate the timeline line from 0 to full height based on scroll
      gsap.fromTo(
        timelineLineRef.current,
        {
          height: '0%',
        },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            start: 'top center',
            end: 'bottom bottom',
            scrub: 0.5,
            markers: false, // Set to true for debugging
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wavy Banner */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        {/* Wavy SVG Background */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1443 618" 
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1443 0L0 -5.91278e-05V554.027C50.0042 639.916 243.242 630.031 659.915 578.894C1087.51 526.416 1353.6 559.696 1443 610.896V0Z" 
            fill="#A4A2AD"
          />
        </svg>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-semibold text-black text-center px-4">
            Meet George Anastasiou
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineSectionRef} className="timeline-section py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-32 relative">
            {/* Vertical timeline line - Animated with GSAP */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block" 
              style={{
                top: '275px',
                height: `calc(100% - 550px)`
              }}
            >
              {/* Animated line (purple dotted) - animates with GSAP */}
              <div 
                ref={timelineLineRef}
                className="absolute left-0 w-0.5 top-0" 
                style={{
                  height: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, #78428F 0px, #78428F 8px, transparent 8px, transparent 16px)',
                  willChange: 'height'
                }}
              ></div>
            </div>

            {timelineSteps.map((step, index) => (
              <div key={index} className="relative timeline-item">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-[#78428F] z-10 hidden lg:flex items-center justify-center" style={{
                  top: '275px' // Center of 550px image
                }}>
                  <div className="w-2 h-2 bg-[#78428F] rounded-full"></div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  step.side === 'right' ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`${step.side === 'right' ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="timeline-image relative w-full h-[550px] bg-[#D9D9D9] rounded-[20px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
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
                      {/* Year Badge */}
                      <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-white text-[#78428F] font-semibold rounded-full text-sm border-2 border-[#78428F] shadow-md">
                          {step.year}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl font-semibold text-black leading-tight">
                        {step.title}
                      </h2>
                      <h3 className="text-2xl font-medium text-[#78428F] leading-tight">
                        {step.subtitle}
                      </h3>
                      <p className="text-base font-normal text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA with Footer Background */}
      <section className="relative bg-[#78428F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your consultation today and experience personalized physiotherapy care tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#78428F] font-bold text-lg rounded-lg hover:bg-white/90 transition-colors shadow-xl hover:scale-105 transform duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Inline styles for animations */}
      <style jsx>{`
        :global(.timeline-image:hover) {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}