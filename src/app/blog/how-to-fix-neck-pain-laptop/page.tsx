import { Calendar, Clock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Fix Neck Pain from Working at a Laptop All Day | Funky Fisio',
  description: 'Learn effective strategies to prevent and relieve neck pain caused by prolonged laptop use. Essential tips for better posture and ergonomics from a professional physiotherapist.',
  keywords: [
    'neck pain relief',
    'laptop ergonomics',
    'workplace posture',
    'neck stretches',
    'desk setup',
    'computer posture',
    'neck pain prevention'
  ],
};

export default function NeckPainPost() {
  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#D84795]/10 to-[#D84795]/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#D84795] hover:text-[#c43d82] mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
            <span className="bg-[#D84795]/20 text-[#c43d82] px-3 py-1 rounded-full text-xs font-medium">
              Workplace Health
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              5 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Fix Neck Pain from Working at a Laptop All Day
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Prolonged laptop use can lead to chronic neck pain and poor posture. Here&apos;s how to 
            prevent and treat these common issues with simple ergonomic adjustments and exercises.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a physiotherapist with years of experience treating office workers, I&apos;ve seen 
                countless cases of neck pain caused by poor laptop ergonomics. The good news? Most 
                of these issues can be prevented and treated with simple adjustments to your workspace 
                and daily routine.
              </p>
              
              <div className="bg-[#D84795]/10 border-l-4 border-[#D84795] p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-[#D84795] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#a8316f] mb-2">Why Laptop Use Causes Neck Pain</h3>
                    <p className="text-[#c43d82]">
                      Laptops force you to look down at the screen, creating &quot;tech neck&quot; - a forward 
                      head posture that puts excessive strain on your cervical spine and surrounding muscles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ergonomic Setup */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Optimize Your Laptop Setup</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Do This</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Elevate your laptop screen to eye level using a laptop stand</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Use an external keyboard and mouse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Position your screen 20-26 inches from your eyes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Keep your feet flat on the floor or footrest</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">❌ Avoid This</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-0.5">•</span>
                      <span className="text-red-800">Working with laptop on your lap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-0.5">•</span>
                      <span className="text-red-800">Looking down at screen for hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-0.5">•</span>
                      <span className="text-red-800">Hunching shoulders forward</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-0.5">•</span>
                      <span className="text-red-800">Working in bed or on couch</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Exercises */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Essential Neck Exercises</h2>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Chin Tucks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-4">
                        This exercise strengthens the deep neck flexors and helps correct forward head posture.
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Sit or stand with good posture</li>
                        <li>Gently tuck your chin toward your chest</li>
                        <li>Hold for 5 seconds, then release</li>
                        <li>Repeat 10-15 times, 3 sets daily</li>
                      </ol>
                    </div>
                    <div className="bg-[#D84795]/10 rounded-lg p-4 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Neck Side Stretches</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-4">
                        Stretches the side muscles of your neck to relieve tension and improve flexibility.
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Sit or stand tall</li>
                        <li>Gently tilt your head to one side</li>
                        <li>Hold for 30 seconds</li>
                        <li>Repeat on the other side</li>
                        <li>Do 3 sets on each side</li>
                      </ol>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 flex items-center justify-center">
                      <span className="text-4xl">🔄</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Upper Trap Stretch</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-4">
                        Targets the upper trapezius muscle, which often becomes tight from poor posture.
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Sit or stand with good posture</li>
                        <li>Tilt your head to one side</li>
                        <li>Gently pull down with your hand</li>
                        <li>Hold for 30 seconds</li>
                        <li>Switch sides and repeat</li>
                      </ol>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-center">
                      <span className="text-4xl">🤲</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Daily Prevention Strategies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Take Regular Breaks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Take a 5-minute break every hour</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Stand up and walk around every 2 hours</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintain Good Posture</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Keep your shoulders relaxed and down</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Align your ears over your shoulders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Support your lower back</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When to Seek Help */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Seek Physiotherapy if you experience:</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                      <li>Persistent neck pain lasting more than a week</li>
                      <li>Pain that radiates to your arms or shoulders</li>
                      <li>Numbness or tingling in your arms or hands</li>
                      <li>Headaches associated with neck pain</li>
                      <li>Limited range of motion in your neck</li>
                      <li>Pain that interferes with daily activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Neck pain from laptop use is common but preventable. By implementing proper ergonomics, 
                regular exercises, and taking breaks, you can maintain a healthy neck and improve your 
                overall work performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Remember, consistency is key. Make these changes part of your daily routine, and you&apos;ll 
                notice significant improvements in your comfort and productivity.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-[#D84795]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Experiencing Neck Pain?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            If your neck pain persists or worsens, don&apos;t hesitate to seek professional help. 
            I&apos;m here to provide personalized treatment and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#D84795] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#D84795] transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
