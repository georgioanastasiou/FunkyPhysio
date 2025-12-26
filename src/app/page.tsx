'use client';

import { Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure hero video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

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
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Funky Physio Logo"
              width={120}
              height={120}
              className="h-24 w-auto drop-shadow-lg"
              priority
            />
          </div>
          
          {/* Title */}
          <h1 className="font-museo-moderno text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-lg">
            Funky Physio
          </h1>
          
          {/* Book Appointment Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-colors drop-shadow-lg"
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
      <section className="pt-24 pb-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="text-left mb-8">
            <h2 className="font-poppins text-h2 text-gray-900 mb-4">
              What we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Physiotherapy Card */}
            <div className="w-96 h-[470px] bg-white rounded-[20px] shadow-[0px_4px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-t-xl transition-transform duration-300 hover:scale-110"
                  style={{ 
                    backgroundImage: 'url("/physiotherapy.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute bottom-4 left-10">
                  <h3 className="font-figtree text-3xl font-semibold text-white leading-[51.20px]">
                    Physiotherapy
                  </h3>
                </div>
              </div>
              <div className="p-10 px-10 pb-10">
                <div className="w-64 inline-flex flex-col justify-start items-start gap-3 mb-6">
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Treatment Sessions</div>
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Rehabilitation</div>
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Prevention & Education</div>
                </div>
                <button className="w-full bg-[#78428F] text-white font-semibold py-3 mt-3 px-6 rounded-lg hover:bg-[#663876] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Massage Card */}
            <div className="w-96 h-[470px] bg-white rounded-[20px] shadow-[0px_4px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-t-xl transition-transform duration-300 hover:scale-110"
                  style={{ 
                    backgroundImage: 'url("/massage.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute bottom-4 left-10">
                  <h3 className="font-figtree text-3xl font-semibold text-white leading-[51.20px]">
                    Massage
                  </h3>
                </div>
              </div>
              <div className="p-10 px-10 pb-10">
                <div className="w-64 inline-flex flex-col justify-start items-start gap-3 mb-6">
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Sports Massage</div>
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Friction Massage</div>
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Deep Tissue Massage</div>
                </div>
                <button className="w-full bg-[#78428F] text-white font-semibold py-3 mt-3 px-6 rounded-lg hover:bg-[#663876] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Therapeutic Training Card */}
            <div className="w-96 h-[470px] bg-white rounded-[20px] shadow-[0px_4px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-t-xl transition-transform duration-300 hover:scale-110"
                  style={{ 
                    backgroundImage: 'url("/therapeutic-training.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute bottom-4 left-10">
                  <h3 className="font-figtree text-3xl font-semibold text-white leading-[51.20px]">
                    Therapeutic Training
                  </h3>
                </div>
              </div>
              <div className="p-10 px-10 pb-10">
                <div className="w-64 inline-flex flex-col justify-start items-start gap-3 mb-6">
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Postural Reeducation</div>
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Functional Exercise</div>
                  <div className="self-stretch opacity-80 justify-start text-black text-lg font-medium font-figtree leading-7">Movement Pattern Correction</div>
                </div>
                <button className="w-full bg-[#78428F] text-white font-semibold py-3 mt-3 px-6 rounded-lg hover:bg-[#663876] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet George Anastasiou Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[550px] h-[550px] rounded-[20px] overflow-hidden bg-gray-100">
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
              <h2 className="font-poppins text-h2 text-gray-900 mb-2 leading-tight whitespace-nowrap">  
              
                Meet George Anastasiou
              </h2>
              <h3 className="font-figtree text-h3 text-gray-600 mb-6">
                The Funky Physio
              </h3>
              
              <div className="space-y-4 font-figtree text-body text-gray-700 leading-relaxed">
                <p>
                  &quot;Lorem ipsum dolor sit amet consectetur. Nullam viverra purus pellentesque ac 
                  aliquet eget morbi non. Mattaliquet eget morbi non. Mattis etiam lobortis 
                  tempor id. Sit aenean erat nunc amet et euismod.aliquet eget morbi non. 
                  Mattis etiam lobortis tempor id. Sit aenean erat nunc amet et euismod.tis etiam 
                  lobortis tempor id. Sit aenean erat nunc amet et euismod.&quot;
                </p>
                
                <p>
                  Sollicitudin at ipsum amet risus in proin cras condimenean erat nunc amet et 
                  euismod. Sollicitudinenean erat nunc amet et euismod. Sollicitudin at ipsum 
                  amet risus in proin cras co at ipsum amet risus in proin cras coe&quot;
                </p>
              </div>
              
              <div className="mt-8">
                <button className="bg-[#78428F] text-white font-semibold py-4 px-12 rounded-xl hover:bg-[#7a4f84] transition-colors text-lg">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-20">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center ">
              <div className="relative w-72 h-96 rounded-[20px]  overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Doe"
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
                  <div className="text-black text-xl font-bold font-figtree leading-8">John Doe</div>
                  <div className="text-black text-base font-medium font-figtree leading-6 ">Marathon Runner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-72 h-96 rounded-[20px] overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
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
                  <div className="text-black text-xl font-bold font-figtree leading-8">Sarah Johnson</div>
                  <div className="text-black text-base font-medium font-figtree leading-6">Yoga Instructor</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-72 h-96 rounded-[20px] overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="Mike Chen"
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
                  <div className="text-black text-xl font-bold font-figtree leading-8">Mike Chen</div>
                  <div className="text-black text-base font-medium font-figtree leading-6">Fitness Coach</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="flex flex-col items-center">
              <div className="relative w-72 h-96 rounded-[20px] overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emily Williams"
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
                  <div className="text-black text-xl font-bold font-figtree leading-8">Emily Williams</div>
                  <div className="text-black text-base font-medium font-figtree leading-6">Architect / Runner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title - Outside Card */}
          <div className="mb-12">
            <h2 className="text-black text-5xl font-semibold font-poppins leading-tight">
              Location of your choice
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Studio Card */}
            <div className="relative bg-white rounded-[20px] shadow-[0px_0px_14.899999618530273px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              {/* Purple accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-5 bg-[#78428F] rounded-tl-[20px] rounded-bl-[20px]"></div>
              
              {/* Card content */}
              <div className="pl-14 pr-8 py-10">
                <h3 className="text-black text-3xl font-semibold font-figtree leading-tight mb-6">
                  At Funky Studio
                </h3>
                
                <p className="opacity-80 text-black text-base font-medium font-figtree leading-6 mb-8 h-12">
                  In-person sessions in a fully equipped, professional studio.
                </p>
                
                <div className="space-y-3">
                  <div className="opacity-80 text-black text-xl font-medium font-figtree leading-8">
                    45 min / EUR 60
                  </div>
                  <div className="opacity-80 text-black text-xl font-medium font-figtree leading-8">
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
              <div className="pl-14 pr-8 py-10">
                <h3 className="text-black text-3xl font-semibold font-figtree leading-tight mb-6">
                Online Sessions
                </h3>
                
                <p className="opacity-80 text-black text-base font-medium font-figtree leading-6 mb-8 h-12">
                Guided virtual sessions tailored to your needs, wherever you are.
                </p>
                
                <div className="space-y-3">
                  
                  <div className="opacity-80 text-black text-xl font-medium font-figtree leading-8">
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
              <div className="pl-14 pr-8 py-10">
                <h3 className="text-black text-3xl font-semibold font-figtree leading-tight mb-6">
                At your place
                </h3>
                
                <p className="opacity-80 text-black text-base font-medium font-figtree leading-6 mb-8 h-12">
                Personalized treatment delivered in the comfort of your home.
                </p>
                
                <div className="space-y-3">
                  
                  <div className="opacity-80 text-black text-xl font-medium font-figtree leading-8">
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
      background-color: #78428F !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}