import Link from 'next/link';
import { Metadata } from 'next';
import { getBlogPosts, getCategories } from '@/lib/queries';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import { Suspense } from 'react';
import { BlogPostsSkeleton } from '@/components/SkeletonLoader';

export const metadata: Metadata = {
  title: 'Physiotherapy Blog - Health Tips & Advice',
  description: 'Expert physiotherapy advice, health tips, and wellness guidance from Funky Physio.',
};

async function BlogContent() {
  const [blogPosts, categories] = await Promise.all([getBlogPosts(), getCategories()]);

  return (
    <>
      {blogPosts.length > 0 ? (
        <BlogPostsGrid posts={blogPosts} categories={categories} />
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-400 font-syne text-sm uppercase tracking-[4px] mb-4">Coming soon</p>
          <h3 className="text-3xl font-semibold font-syne text-black mb-4">No posts yet</h3>
          <p className="text-gray-500 font-syne mb-8">Start creating content in Sanity Studio.</p>
          <Link href="/studio" className="text-sm uppercase tracking-[3px] font-syne text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
            Open Studio →
          </Link>
        </div>
      )}
    </>
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#f5f0eb] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[4px] text-gray-400 font-syne mb-6">Our Blog</p>
          <h1 className="text-5xl lg:text-6xl font-semibold font-syne text-black leading-tight mb-6">
            Health tips &<br />expert advice
          </h1>
          <p className="text-gray-500 font-syne text-lg max-w-xl leading-relaxed">
            Physiotherapy insights, injury prevention guides, and wellness tips — written by George.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200" />

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<BlogPostsSkeleton count={6} />}>
            <BlogContent />
          </Suspense>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#f5f0eb] py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[4px] text-gray-400 font-syne mb-4">Newsletter</p>
          <h2 className="text-3xl font-semibold font-syne text-black mb-4">Stay in the loop</h2>
          <p className="text-gray-500 font-syne mb-10">
            Get the latest health tips and physiotherapy advice straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-gray-300 px-5 py-3 text-sm font-syne text-black placeholder-gray-400 outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white text-sm uppercase tracking-[3px] font-syne hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 font-syne mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

    </div>
  );
}
