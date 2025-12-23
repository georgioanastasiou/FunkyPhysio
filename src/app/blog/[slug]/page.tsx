import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Funky Physio`,
    description: post.excerpt || post.title,
    keywords: post.seo?.keywords || [],
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

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
            {post.category && (
              <span className="bg-[#D84795]/20 text-[#c43d82] px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            )}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            )}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage?.asset && (
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage.asset).width(1200).height(600).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none 
            [&_h1]:text-gray-600 
            [&_h2]:text-gray-600 
            [&_h3]:text-gray-600 
            [&_h4]:text-gray-600 
            [&_p]:text-gray-600 
            [&_li]:text-gray-600 
            [&_strong]:text-gray-600
            [&_a]:text-[#D84795] [&_a]:no-underline hover:[&_a]:underline">
            {post.body && <PortableText value={post.body} />}
          </div>

          {/* Author Info */}
          {post.author && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                {post.author.image?.asset && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image.asset).width(64).height(64).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Written by</p>
                  <p className="text-lg font-semibold text-gray-900">{post.author.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-[#D84795]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Help?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a consultation for personalized treatment and guidance.
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
