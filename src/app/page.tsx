'use client';

import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

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
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
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
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-40 z-10"></div>
        
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
          <h1 className="font-museo-moderno text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Funky Physio
          </h1>
          
          {/* Name */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium drop-shadow-md">
            George Anastasiou
          </p>
        </div>

        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20 md:h-32 lg:h-40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="font-poppins text-h2 text-gray-900 mb-4">
              What we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Physiotherapy Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-t-xl"
                  style={{ 
                    backgroundColor: 'rgba(58, 48, 111, 0.7)',
                    backgroundImage: 'url("/physiotherapy.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-figtree text-h3 text-white mb-2">
                    Physiotherapy
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700">Treatment Sessions</li>
                  <li className="text-gray-700">Rehabilitation</li>
                  <li className="text-gray-700">Prevention & Education</li>
                </ul>
                <button className="w-full bg-[#8B5A96] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#7a4f84] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Massage Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-t-xl"
                  style={{ 
                    backgroundColor: 'rgba(58, 48, 111, 0.7)',
                    backgroundImage: 'url("/massage.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-figtree text-h3 text-white mb-2">
                    Massage
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700">Sports Massage</li>
                  <li className="text-gray-700">Friction Massage</li>
                  <li className="text-gray-700">Deep Tissue Massage</li>
                </ul>
                <button className="w-full bg-[#8B5A96] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#7a4f84] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Therapeutic Training Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-t-xl"
                  style={{ 
                    backgroundColor: 'rgba(58, 48, 111, 0.7)',
                    backgroundImage: 'url("/therapeutic-training.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-figtree text-h3 text-white mb-2">
                    Therapeutic Training
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700">Postural Reeducation</li>
                  <li className="text-gray-700">Functional Exercise</li>
                  <li className="text-gray-700">Movement Pattern Correction</li>
                </ul>
                <button className="w-full bg-[#8B5A96] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#7a4f84] transition-colors">
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
              <div className="relative w-80 h-96 lg:w-96  lg:h-[500px] rounded-3xl overflow-hidden bg-gray-100">
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
              <h2 className="font-poppins text-h2 text-gray-900 mb-4 leading-tight">
                Meet George Anastasiou
              </h2>
              <h3 className="font-figtree text-h3 text-gray-600 mb-8">
                The Funky Physio
              </h3>
              
              <div className="space-y-6 font-figtree text-body text-gray-700 leading-relaxed">
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
              
              <div className="mt-10">
                <button className="bg-[#8B5A96] text-white font-semibold py-4 px-12 rounded-2xl hover:bg-[#7a4f84] transition-colors text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-h2 text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="font-figtree text-body text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy treatments tailored to your specific needs and recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#D84795]/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="font-figtree text-h3 text-gray-900 mb-4">
                Sports Injury Rehabilitation
              </h3>
              <p className="font-figtree text-body text-gray-600 mb-6">
                Specialized treatment for athletes and active individuals recovering from sports-related injuries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ACL Reconstruction Recovery
                </li>
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Rotator Cuff Injuries
                </li>
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ankle Sprains & Strains
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-figtree text-h3 text-gray-900 mb-4">
                Post-Surgical Recovery
              </h3> 
              <p className="font-figtree text-body text-gray-600 mb-6">
                Comprehensive rehabilitation programs following surgical procedures to restore function and mobility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint Replacement Therapy
                </li>
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Spinal Surgery Recovery
                </li>
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Soft Tissue Repair
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">😌</span>
              </div>
              <h3 className="font-figtree text-h3 text-gray-900 mb-4">
                Chronic Pain Management
              </h3>
              <p className="font-figtree text-body text-gray-600 mb-6">
                Evidence-based approaches to manage and reduce chronic pain conditions for improved quality of life.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Lower Back Pain
                </li>
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Neck & Shoulder Pain
                </li>
                <li className="flex items-center font-figtree text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Arthritis Management
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-[#D84795] text-white font-semibold rounded-lg hover:bg-[#c43d82] transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section className="py-30 relative" style={{ backgroundColor: '#331d3d' }}>
        {/* Wavy Top Border */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            width="1441"
            height="714"
            viewBox="0 0 1441 714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20 md:h-32"
            preserveAspectRatio="none"
            style={{ transform: 'scaleY(-1)' }}
          >
            <path
              d="M1441 560.947C1358.5 659.447 1219 726.446 779.508 673.422C363.301 623.207 89.2732 662.75 0 713.947V674.081C89.2732 619.983 354.993 584.82 782 640.269C1198.09 694.3 1391.07 632.75 1441 542V560.947Z"
              fill="#E45896"
            />
            <path
              d="M0 57.0935C213.965 -12.8637 649.849 -13.0232 941.5 46.2908C1199.77 98.815 1371.47 50.926 1441 0V541.919C1391.07 632.669 1198.09 694.219 782 640.187C354.993 584.739 89.2732 619.902 0 674V57.0935Z"
              fill="#331D3D"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="font-poppins text-h2 text-white mb-4">
              Real People, Real Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[280px] mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
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
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] relative z-10">
                <h3 className="font-figtree text-h3 text-gray-900 mb-2">John Doe</h3>
                <p className="font-figtree text-body text-gray-600">
                  &quot;Amazing recovery experience. George helped me get back to my active lifestyle!&quot;
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[280px] mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
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
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] relative z-10">
                <h3 className="font-figtree text-h3 text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="font-figtree text-body text-gray-600">
                  &quot;Professional, caring, and effective. Best physiotherapy experience I&apos;ve had.&quot;
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[280px] mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
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
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] relative z-10">
                <h3 className="font-figtree text-h3 text-gray-900 mb-2">Mike Chen</h3>
                <p className="font-figtree text-body text-gray-600">
                  &quot;The holistic approach made all the difference. Highly recommended!&quot;
                </p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[280px] mb-4 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
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
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] relative z-10">
                <h3 className="font-figtree text-h3 text-gray-900 mb-2">Emily Williams</h3>
                <p className="font-figtree text-body text-gray-600">
                  &quot;I finally found someone who understands my needs. Thank you, Funky Physio!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            width="1441"
            height="714"
            viewBox="0 0 1441 714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20 md:h-32"
            preserveAspectRatio="none"
          >
            <path
              d="M1441 560.947C1358.5 659.447 1219 726.446 779.508 673.422C363.301 623.207 89.2732 662.75 0 713.947V674.081C89.2732 619.983 354.993 584.82 782 640.269C1198.09 694.3 1391.07 632.75 1441 542V560.947Z"
              fill="#E45896"
            />
            <path
              d="M0 57.0935C213.965 -12.8637 649.849 -13.0232 941.5 46.2908C1199.77 98.815 1371.47 50.926 1441 0V541.919C1391.07 632.669 1198.09 694.219 782 640.187C354.993 584.739 89.2732 619.902 0 674V57.0935Z"
              fill="#331D3D"
            />
          </svg>
        </div>
      </section>
    </>
  );
}