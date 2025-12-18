import { Calendar, Clock, ArrowLeft, CheckCircle, AlertCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Simple Stretches for People Working from Home | Funky Fisio',
  description: 'Easy stretches you can do at home to combat stiffness, improve flexibility, and maintain good posture during remote work. Professional physiotherapy guidance.',
  keywords: [
    'work from home stretches',
    'home exercises',
    'desk stretches',
    'remote work wellness',
    'office stretches',
    'posture exercises',
    'home workout'
  ],
};

export default function StretchesPost() {
  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              Home Exercises
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 10, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              4 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            5 Simple Stretches for People Working from Home
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Combat the stiffness and discomfort of remote work with these easy stretches you can do 
            right at your home office. No equipment needed!
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
                Working from home has become the new norm, but it often comes with its own set of 
                physical challenges. Poor ergonomics, extended sitting, and limited movement can lead 
                to stiffness, tension, and discomfort. As a physiotherapist, I&apos;ve designed these 
                simple stretches specifically for remote workers.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Why These Stretches Matter</h3>
                    <p className="text-green-800">
                      Regular stretching improves circulation, reduces muscle tension, prevents injury, 
                      and boosts your energy levels throughout the workday.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stretch 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Neck and Shoulder Roll</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to do it:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Sit or stand with good posture</li>
                      <li>Slowly roll your shoulders backward 5 times</li>
                      <li>Then roll them forward 5 times</li>
                      <li>Gently tilt your head side to side</li>
                      <li>Hold each tilt for 10 seconds</li>
                    </ol>
                    <div className="mt-4 p-4 bg-[#D84795]/10 rounded-lg">
                      <p className="text-sm text-[#c43d82]">
                        <strong>Benefits:</strong> Relieves tension in neck and shoulders, improves circulation
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#D84795]/10 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-2 block">🔄</span>
                      <p className="text-sm text-[#c43d82] font-medium">Shoulder Rolls</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stretch 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Chest Opener Stretch</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to do it:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Stand or sit tall</li>
                      <li>Clasp your hands behind your back</li>
                      <li>Gently pull your arms back and up</li>
                      <li>Lift your chest and open your shoulders</li>
                      <li>Hold for 30 seconds</li>
                    </ol>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Benefits:</strong> Counteracts forward head posture, opens chest muscles
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-2 block">🤲</span>
                      <p className="text-sm text-green-700 font-medium">Chest Opener</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stretch 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Seated Spinal Twist</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to do it:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Sit on the edge of your chair</li>
                      <li>Place your right hand on the back of the chair</li>
                      <li>Place your left hand on your right knee</li>
                      <li>Gently twist to the right</li>
                      <li>Hold for 30 seconds, then switch sides</li>
                    </ol>
                    <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Benefits:</strong> Improves spinal mobility, relieves lower back tension
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-2 block">🪑</span>
                      <p className="text-sm text-purple-700 font-medium">Spinal Twist</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stretch 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Wrist and Forearm Stretch</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to do it:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Extend your right arm straight out</li>
                      <li>Point your fingers toward the ceiling</li>
                      <li>Use your left hand to gently pull fingers back</li>
                      <li>Hold for 15 seconds</li>
                      <li>Flip hand and pull fingers down for 15 seconds</li>
                      <li>Repeat with left arm</li>
                    </ol>
                    <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Benefits:</strong> Prevents carpal tunnel, relieves typing tension
                      </p>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-2 block">✋</span>
                      <p className="text-sm text-orange-700 font-medium">Wrist Stretch</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stretch 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Standing Hip Flexor Stretch</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to do it:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Stand with feet hip-width apart</li>
                      <li>Step your right foot forward into a lunge</li>
                      <li>Keep your left leg straight behind you</li>
                      <li>Push your hips forward gently</li>
                      <li>Hold for 30 seconds, then switch legs</li>
                    </ol>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Benefits:</strong> Counteracts sitting posture, improves hip flexibility
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-2 block">🏃</span>
                      <p className="text-sm text-red-700 font-medium">Hip Flexor</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Routine */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick 5-Minute Routine</h2>
              
              <div className="bg-gradient-to-r from-[#D84795]/10 to-green-50 border border-[#D84795]/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for breaks throughout your day:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Morning Routine (2 minutes):</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        Neck and Shoulder Roll
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        Chest Opener Stretch
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Afternoon Routine (3 minutes):</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-[#D84795] mr-2 flex-shrink-0" />
                        Seated Spinal Twist
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-[#D84795] mr-2 flex-shrink-0" />
                        Wrist and Forearm Stretch
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-[#D84795] mr-2 flex-shrink-0" />
                        Standing Hip Flexor Stretch
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips for Success</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Make it a Habit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Set reminders every 2 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Start with just 2-3 stretches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Gradually increase frequency</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Listen to Your Body</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Never stretch to the point of pain</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Stop if you feel sharp pain</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Focus on gentle, sustained stretches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These simple stretches can make a significant difference in your comfort and productivity 
                while working from home. Remember, consistency is more important than perfection. 
                Even doing just a few stretches throughout your day can help prevent the common 
                aches and pains associated with remote work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Make these stretches part of your daily routine, and you&apos;ll notice improved energy, 
                better posture, and reduced tension in your body.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Personalized Exercise Guidance?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            If you&apos;re experiencing persistent pain or need a customized exercise program, 
            I&apos;m here to help with personalized physiotherapy treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
