import Link from 'next/link';
import { Metadata } from 'next';
import { getBlogPosts, getCategories } from '@/lib/queries';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import { Suspense } from 'react';
import { BlogPostsSkeleton } from '@/components/SkeletonLoader';

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
  openGraph: {
    title: 'Physiotherapy Blog - Health Tips & Advice | Funky Physio',
    description: 'Expert physiotherapy advice, health tips, and wellness guidance. Learn about injury prevention, recovery, and maintaining optimal physical health.',
    url: 'https://funkyphysio.com/blog',
    type: 'website',
    images: [
      {
        url: '/og-image-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Funky Physio Blog',
      },
    ],
  },
};

async function BlogContent() {
  // Fetch blog posts and categories from Sanity
  const [blogPosts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories()
  ]);

  return (
    <>
      {blogPosts.length > 0 ? (
        <BlogPostsGrid posts={blogPosts} categories={categories} />
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
    </>
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#78428F] to-[#D84795] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Physiotherapy Blog
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Expert advice, health tips, and wellness guidance to help you maintain 
              optimal physical health and prevent common injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<BlogPostsSkeleton count={6} />}>
            <BlogContent />
          </Suspense>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#78428F] via-[#8B5A9E] to-[#A06BB0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-white/95 mb-8">
            Get the latest physiotherapy advice and health tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-[#78428F] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
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
