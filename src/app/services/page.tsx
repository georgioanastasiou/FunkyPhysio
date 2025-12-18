import { CheckCircle, Clock, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physiotherapy Services - Sports Injury, Post-Surgical Recovery & More',
  description: 'Comprehensive physiotherapy services including sports injury rehabilitation, post-surgical recovery, chronic pain management, manual therapy, and exercise prescription. Expert care for all your rehabilitation needs.',
  keywords: [
    'physiotherapy services',
    'sports injury rehabilitation',
    'post-surgical recovery',
    'chronic pain management',
    'manual therapy',
    'exercise prescription',
    'physical therapy services',
    'rehabilitation programs'
  ],
};

export default function Services() {
  const services = [
    {
      title: 'Sports Injury Rehabilitation',
      icon: '🏃‍♂️',
      description: 'Specialized treatment for athletes and active individuals recovering from sports-related injuries.',
      features: [
        'ACL Reconstruction Recovery',
        'Rotator Cuff Injuries',
        'Ankle Sprains & Strains',
        'Tennis Elbow Treatment',
        'Runner\'s Knee Rehabilitation',
        'Concussion Management'
      ],
      duration: '6-12 weeks',
      price: 'From $120/session'
    },
    {
      title: 'Post-Surgical Recovery',
      icon: '🏥',
      description: 'Comprehensive rehabilitation programs following surgical procedures to restore function and mobility.',
      features: [
        'Joint Replacement Therapy',
        'Spinal Surgery Recovery',
        'Soft Tissue Repair',
        'Fracture Rehabilitation',
        'Ligament Reconstruction',
        'Arthroscopic Surgery Recovery'
      ],
      duration: '8-16 weeks',
      price: 'From $130/session'
    },
    {
      title: 'Chronic Pain Management',
      icon: '😌',
      description: 'Evidence-based approaches to manage and reduce chronic pain conditions for improved quality of life.',
      features: [
        'Lower Back Pain Treatment',
        'Neck & Shoulder Pain Relief',
        'Arthritis Management',
        'Fibromyalgia Support',
        'Migraine & Headache Therapy',
        'Sciatica Treatment'
      ],
      duration: '4-8 weeks',
      price: 'From $110/session'
    },
    {
      title: 'Manual Therapy',
      icon: '✋',
      description: 'Hands-on techniques to improve joint mobility, reduce pain, and enhance tissue healing.',
      features: [
        'Joint Mobilization',
        'Soft Tissue Massage',
        'Trigger Point Therapy',
        'Myofascial Release',
        'Craniosacral Therapy',
        'Visceral Manipulation'
      ],
      duration: '4-6 weeks',
      price: 'From $100/session'
    },
    {
      title: 'Exercise Prescription',
      icon: '💪',
      description: 'Customized exercise programs designed to strengthen, stabilize, and improve functional movement.',
      features: [
        'Strength Training Programs',
        'Balance & Coordination Training',
        'Flexibility Programs',
        'Core Stability Exercises',
        'Functional Movement Training',
        'Sport-Specific Conditioning'
      ],
      duration: '6-12 weeks',
      price: 'From $90/session'
    },
    {
      title: 'Pediatric Physiotherapy',
      icon: '👶',
      description: 'Specialized care for children with developmental delays, injuries, or congenital conditions.',
      features: [
        'Developmental Delay Treatment',
        'Cerebral Palsy Management',
        'Sports Injuries in Children',
        'Coordination Disorders',
        'Postural Problems',
        'Genetic Condition Support'
      ],
      duration: 'Varies',
      price: 'From $100/session'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#D84795]/10 to-[#D84795]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Physiotherapy Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive, evidence-based physiotherapy treatments designed to help you recover, 
              rehabilitate, and achieve optimal physical health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D84795] text-white font-semibold rounded-lg hover:bg-[#c43d82] transition-colors"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#D84795] text-[#D84795] font-semibold rounded-lg hover:bg-[#D84795]/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#D84795]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#D84795] hover:text-[#c43d82] font-medium"
                  >
                    Learn More & Book
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to your recovery and rehabilitation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D84795]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#D84795]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your condition, medical history, and treatment goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Treatment Plan</h3>
              <p className="text-gray-600">
                Personalized rehabilitation program tailored to your specific needs and recovery timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Active Treatment</h3>
              <p className="text-gray-600">
                Hands-on therapy, exercises, and interventions to restore function and reduce pain.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recovery & Maintenance</h3>
              <p className="text-gray-600">
                Ongoing support and home exercise programs to maintain your progress and prevent re-injury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Funky Fisio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I combine expertise, compassion, and cutting-edge techniques to deliver exceptional physiotherapy care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D84795]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#D84795]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">
                Licensed and experienced physiotherapist with specialized training in various treatment modalities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based</h3>
              <p className="text-gray-600">
                Treatment approaches backed by the latest research and clinical evidence for optimal outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Individualized treatment plans tailored to your specific needs, goals, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#D84795]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Book your consultation today and take the first step towards better health and mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#D84795] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#D84795] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
