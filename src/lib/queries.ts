import { client } from './sanity'
import { BlogPost, Service, Testimonial } from '@/types/sanity'

// Blog post queries
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await client.fetch(
    `*[_type == "post" || _type == "blogPost"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      category,
      categories[]-> {
        _id,
        title,
        slug
      },
      readTime,
      author-> {
        name,
        image
      },
      publishedAt
    }`
  )
  console.log('Fetched posts from Sanity:', posts)
  console.log('Number of posts:', posts.length)
  console.log('Environment:', {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  })
  return posts
}

export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  return await client.fetch(
    `*[(_type == "post" || _type == "blogPost") && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      body,
      category,
      categories[]-> {
        _id,
        title,
        slug
      },
      readTime,
      author-> {
        name,
        image
      },
      publishedAt,
      seo
    }`,
    { slug }
  )
}

// Get all categories
export const getCategories = async () => {
  return await client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }`
  )
}

// Get posts by category
export const getBlogPostsByCategory = async (categoryId: string): Promise<BlogPost[]> => {
  return await client.fetch(
    `*[(_type == "post" || _type == "blogPost") && $categoryId in categories[]._ref] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      category,
      categories[]-> {
        _id,
        title,
        slug
      },
      readTime,
      author-> {
        name,
        image
      },
      publishedAt
    }`,
    { categoryId }
  )
}

// Service queries
export const getServices = async (): Promise<Service[]> => {
  return await client.fetch(
    `*[_type == "service"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      description,
      shortDescription,
      icon,
      features,
      price,
      duration,
      image {
        asset,
        alt
      }
    }`
  )
}

// Testimonial queries
export const getTestimonials = async (): Promise<Testimonial[]> => {
  return await client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      text,
      rating,
      image {
        asset,
        alt
      },
      video {
        asset
      },
      service,
      isVideo
    }`
  )
}