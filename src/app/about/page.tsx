import { Award, Users, Clock, Heart, CheckCircle, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About George Anastasiou - Expert Physiotherapist',
  description: 'Learn about George Anastasiou\'s physiotherapy expertise, professional journey from Greece to Berlin, and commitment to patient-centered care.',
  keywords: [
    'George Anastasiou',
    'physiotherapist',
    'Berlin physiotherapy',
    'Greece physiotherapy',
    'sports injury rehabilitation',
    'manual therapy specialist',
    'physiotherapy experience'
  ],
};

export default function About() {
  const timeline = [
    {
      year: '2023 - Present',
      title: 'Independent Practice',
      location: 'Current Location',
      description: 'Established independent physiotherapy practice, providing personalized care and specialized treatments.',
      icon: '🏥'
    },
    {
      year: '2020 - 2023',
      title: 'Senior Physiotherapist',
      location: 'Berlin Charlottenburg Physiotherapy',
      description: 'Worked as a senior physiotherapist in one of Berlin\'s leading physiotherapy clinics, specializing in sports injuries and post-surgical rehabilitation.',
      icon: '🇩🇪'
    },
    {
      year: '2018 - 2020',
      title: 'Freelance Physiotherapist',
      location: 'Greece',
      description: 'Provided freelance physiotherapy services across Greece, gaining diverse experience in various treatment modalities and patient populations.',
      icon: '🇬🇷'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is tailored to your unique needs, goals, and lifestyle.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Evidence-Based Practice',
      description: 'My treatments are grounded in the latest research and clinical evidence.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Collaborative Approach',
      description: 'I work closely with you, your family, and other healthcare providers.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Continuous Learning',
      description: 'I stay current with the latest techniques and treatment modalities.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About George Anastasiou
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced physiotherapist with over 5 years of professional practice, 
              dedicated to helping you recover, rehabilitate, and achieve optimal physical health.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                My passion for physiotherapy began with a deep understanding of human movement 
                and the body&apos;s incredible capacity for healing. Over the past 5+ years, I&apos;ve 
                dedicated myself to helping patients recover from injuries, manage chronic conditions, 
                and achieve their optimal level of physical function.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From my early days as a freelance practitioner in Greece to my experience at 
                Berlin Charlottenburg Physiotherapy, I&apos;ve developed a comprehensive approach 
                to treatment that combines evidence-based techniques with personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  My Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🇩🇪</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Berlin Charlottenburg</h4>
                    <p className="text-sm text-gray-600">3 years (2020-2023)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🇬🇷</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Greece Freelancing</h4>
                    <p className="text-sm text-gray-600">2 years (2018-2020)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Independent Practice</h4>
                    <p className="text-sm text-gray-600">Current (2023-Present)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in physiotherapy, from Greece to Berlin and beyond.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-blue-600 font-medium">{item.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-2" />
                        {item.location}
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide my approach to physiotherapy and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Areas of expertise developed through years of practice and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports Injury Rehabilitation</h3>
              <p className="text-gray-600 mb-4">
                Specialized training in treating athletes and active individuals, with experience 
                from Berlin&apos;s sports-focused clinics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ACL Reconstruction Recovery
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Rotator Cuff Injuries
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ankle Sprains & Strains
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual Therapy</h3>
              <p className="text-gray-600 mb-4">
                Hands-on techniques refined through years of practice, combining traditional 
                methods with modern approaches.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint Mobilization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Soft Tissue Massage
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Trigger Point Therapy
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Surgical Recovery</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive rehabilitation programs for patients recovering from various 
                surgical procedures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint Replacement Therapy
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Spinal Surgery Recovery
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Soft Tissue Repair
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book your consultation today and experience personalized physiotherapy care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}