'use client';

import { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  category?: string;
  categories?: Category[];
  readTime?: string;
  publishedAt: string;
}

interface BlogPostsGridProps {
  posts: BlogPost[];
  categories: Category[];
}

export default function BlogPostsGrid({ posts, categories }: BlogPostsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on selected category and search query
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((post) =>
        post.categories?.some((cat) => cat._id === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const excerptMatch = post.excerpt?.toLowerCase().includes(query);
        const categoryMatch = post.categories?.some((cat) =>
          cat.title.toLowerCase().includes(query)
        );
        return titleMatch || excerptMatch || categoryMatch;
      });
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for pain conditions, treatments, exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D84795] focus:outline-none text-gray-900 placeholder-gray-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-medium"
            >
              Clear
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-3 text-sm text-gray-600 text-center">
            Found {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for &quot;{searchQuery}&quot;
          </p>
        )}
      </div>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-[#D84795] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category._id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category._id
                    ? 'bg-[#D84795] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
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
                  {post.categories && post.categories.length > 0 && (
                    <span className="bg-[#D84795]/20 text-[#c43d82] px-2 py-1 rounded-full text-xs font-medium">
                      {post.categories[0].title}
                    </span>
                  )}
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
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

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

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
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {searchQuery ? 'No posts found matching your search' : 'No posts found in this category'}
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery 
              ? 'Try different keywords or browse all posts'
              : 'Try selecting a different category or view all posts'
            }
          </p>
          <div className="flex gap-4 justify-center">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#D84795] text-white font-semibold rounded-lg hover:bg-[#c43d82] transition-colors"
              >
                Clear Search
              </button>
            )}
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#D84795] text-[#D84795] font-semibold rounded-lg hover:bg-[#D84795]/10 transition-colors"
              >
                View All Posts
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
