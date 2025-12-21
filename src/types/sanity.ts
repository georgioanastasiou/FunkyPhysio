export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  body: Array<Record<string, unknown>> // Portable Text content
  category: string
  readTime: string
  author: {
    name: string
    image?: {
      _id: string
      url: string
    }
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
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
}

export interface Testimonial {
  _id: string
  name: string
  text: string
  rating: number
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  video?: {
    asset: {
      _id: string
      url: string
    }
  }
  service?: string
  isVideo: boolean
}