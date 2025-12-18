import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load environment variables from .env.local
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    define: {
      // Explicitly define the Sanity Studio environment variables
      'process.env.SANITY_STUDIO_PROJECT_ID': JSON.stringify(env.SANITY_STUDIO_PROJECT_ID || 'hhpdrvqn'),
      'process.env.SANITY_STUDIO_DATASET': JSON.stringify(env.SANITY_STUDIO_DATASET || 'development'),
      'process.env.SANITY_STUDIO_API_VERSION': JSON.stringify(env.SANITY_STUDIO_API_VERSION || '2025-12-16'),
      // Keep Next.js variables as fallback
      'process.env.NEXT_PUBLIC_SANITY_PROJECT_ID': JSON.stringify(env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hhpdrvqn'),
      'process.env.NEXT_PUBLIC_SANITY_DATASET': JSON.stringify(env.NEXT_PUBLIC_SANITY_DATASET || 'development'),
      'process.env.NEXT_PUBLIC_SANITY_API_VERSION': JSON.stringify(env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-16'),
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
  }
})