import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Physiotherapy Blog - Health Tips & Advice',
  description: 'Expert physiotherapy advice, health tips, and wellness guidance from Funky Fisio. Learn about injury prevention, recovery, and maintaining optimal physical health.',
  keywords: [
    'physiotherapy blog',
    'health tips',
    'injury prevention',
    'neck pain relief',
    'workplace ergonomics',
    'home exercises',
    'physical therapy advice'
  ],
};

// Remove hardcoded blogPosts array - we'll fetch from Sanity instead

export default async function Blog() {
  // Fetch blog posts from Sanity
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#D84795]/10 to-[#D84795]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Physiotherapy Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, health tips, and wellness guidance to help you maintain 
              optimal physical health and prevent common injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Post Image */}
                  <div className="h-48 bg-gradient-to-br from-[#D84795]/20 to-[#D84795]/20 relative overflow-hidden">
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage.asset).width(800).height(400).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-6xl">📝</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      {post.category && (
                        <span className="bg-[#D84795]/20 text-[#c43d82] px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      )}
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      {post.readTime && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center text-[#D84795] hover:text-[#c43d82] font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            // No posts yet - show placeholder
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Yet</h3>
              <p className="text-gray-600 mb-6">
                Start creating content in Sanity Studio to see posts here.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#D84795] text-white font-semibold rounded-lg hover:bg-[#c43d82] transition-colors"
              >
                Open Sanity Studio
              </Link>
            </div>
          )}

          {/* Coming Soon */}
          {blogPosts.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Articles Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  I&apos;m constantly working on new content to help you maintain optimal health and prevent injuries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#D84795] text-white font-semibold rounded-lg hover:bg-[#c43d82] transition-colors"
                  >
                    Request a Topic
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#D84795] text-[#D84795] font-semibold rounded-lg hover:bg-[#D84795]/10 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#D84795]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest physiotherapy advice and health tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-[#D84795] font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-white/80 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
