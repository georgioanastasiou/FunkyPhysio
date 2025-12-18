export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: any
    alt?: string
  }
  body: any[] // Portable Text content
  category: string
  readTime: string
  author: {
    name: string
    image?: any
  }
  publishedAt: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  shortDescription: string
  icon: string
  features: string[]
  price?: number
  duration?: string
  image?: {
    asset: any
    alt?: string
  }
}

export interface Testimonial {
  _id: string
  name: string
  text: string
  rating: number
  image?: {
    asset: any
    alt?: string
  }
  video?: {
    asset: any
  }
  service?: string
  isVideo: boolean
}