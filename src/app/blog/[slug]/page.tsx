import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Funky Physio`,
    description: post.excerpt || post.title,
    keywords: post.seo?.keywords || [],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const portableTextComponents: any = {
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl font-semibold font-syne text-black mt-12 mb-5">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-semibold font-syne text-black mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-xl font-semibold font-syne text-black mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-lg font-medium font-syne text-gray-800 mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="font-syne text-[24px] leading-[1.85] mb-6" style={{ color: "#4b5563", fontWeight: 450, maxWidth: "95ch" }}>{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-2 border-black pl-6 my-8 text-gray-500 font-syne text-lg italic leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="space-y-2 mb-6 pl-6 list-disc marker:text-gray-400">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="space-y-2 mb-6 pl-6 list-decimal marker:text-gray-400">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="font-syne text-[24px] leading-relaxed" style={{ color: "#4b5563", fontWeight: 450 }}>{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="font-syne text-[24px] leading-relaxed" style={{ color: "#4b5563", fontWeight: 450 }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-black">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer"
        className="text-black underline underline-offset-4 decoration-gray-400 hover:decoration-black transition-all">
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">

      {/* Back link */}
      <div className="pt-20 pb-4 px-6 lg:px-16 bg-white">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-black font-syne text-sm uppercase tracking-[3px] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>

      {/* Hero — full-width image with overlaid title */}
      <section className="relative w-full h-[70vh] min-h-[500px] bg-black">
        {post.mainImage?.asset ? (
          <Image
            src={urlFor(post.mainImage.asset).width(1800).height(900).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-[#f5f0eb]" />
        )}

        {/* Title block */}
        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-16 pb-14 z-10">
          <div className="max-w-4xl">
            {post.category && (
              <span className="inline-block text-[10px] uppercase tracking-[4px] text-white/70 font-syne mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-4xl lg:text-6xl font-semibold font-syne text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/60 font-syne text-xs uppercase tracking-[3px]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt strip */}
      {post.excerpt && (
        <section className="bg-[#f5f0eb] px-6 lg:px-16 py-10">
          <div className="max-w-3xl">
            <p className="text-gray-600 font-syne text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </section>
      )}

      <div className="w-full h-px bg-gray-200" />

      {/* Article body */}
      <article className="py-16 px-6 lg:px-16">
        <div className="mx-auto" style={{ maxWidth: "95ch" }}>
          {post.body && <PortableText value={post.body} components={portableTextComponents} />}
        </div>
      </article>

      <div className="w-full h-px bg-gray-200" />

      {/* Author */}
      {post.author && (
        <section className="py-12 px-6 lg:px-16 bg-white">
          <div className="max-w-3xl mx-auto flex items-center gap-5">
            {post.author.image?.asset && (
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src={urlFor(post.author.image.asset).width(56).height(56).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-syne mb-1">Written by</p>
              <p className="text-black font-semibold font-syne">{post.author.name}</p>
            </div>
          </div>
        </section>
      )}

      <div className="w-full h-px bg-gray-200" />

      {/* CTA */}
      <section className="bg-[#f5f0eb] py-24 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div>
            <p className="text-xs uppercase tracking-[4px] text-gray-400 font-syne mb-4">Ready to feel better?</p>
            <h2 className="text-4xl font-semibold font-syne text-black leading-tight">
              Book a consultation<br />with George
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact"
              className="px-8 py-4 bg-black text-white font-syne text-sm uppercase tracking-[3px] hover:bg-gray-800 transition-colors">
              Book now
            </Link>
            <Link href="/services"
              className="px-8 py-4 border border-black text-black font-syne text-sm uppercase tracking-[3px] hover:bg-black hover:text-white transition-colors">
              Our services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
