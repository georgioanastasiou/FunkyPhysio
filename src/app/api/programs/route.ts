import { NextResponse } from 'next/server';

interface Program {
  id: string;
  title: string;
  description: string;
  price: number;
  priceId?: string;
}

// Sample programs data - In production, you would fetch this from a database
const programs: Program[] = [
  {
    id: '1',
    title: 'Lower Back Pain Relief Program',
    description: 'A comprehensive 6-week program designed to strengthen your core, improve flexibility, and alleviate lower back pain. Includes video demonstrations, progress tracking, and expert guidance.',
    price: 49.99,
    priceId: 'price_lowerback_relief', // Stripe Price ID
  },
  {
    id: '2',
    title: 'Post-Surgery Rehabilitation Guide',
    description: 'Specialized exercises for post-surgical recovery. Customized routines for common surgeries including ACL reconstruction, joint replacements, and spinal procedures.',
    price: 79.99,
    priceId: 'price_post_surgery_rehab',
  },
  {
    id: '3',
    title: 'Desk Worker Stretch Routine',
    description: 'Perfect for office workers and remote employees. Daily stretches and exercises to combat neck pain, shoulder tension, and poor posture from extended desk work.',
    price: 29.99,
    priceId: 'price_desk_worker_stretch',
  },
  {
    id: '4',
    title: 'Athletic Performance Enhancement',
    description: 'Advanced training program for athletes looking to improve performance, prevent injuries, and enhance recovery. Includes sport-specific exercises and nutrition tips.',
    price: 99.99,
    priceId: 'price_athletic_performance',
  },
  {
    id: '5',
    title: 'Senior Fitness & Mobility',
    description: 'Safe and effective exercises for seniors to maintain mobility, balance, and independence. Low-impact routines designed with age-appropriate modifications.',
    price: 39.99,
    priceId: 'price_senior_fitness',
  },
  {
    id: '6',
    title: 'Complete Home Workout Bundle',
    description: 'All-inclusive package with multiple exercise programs covering strength, flexibility, cardio, and recovery. Best value for comprehensive home fitness.',
    price: 149.99,
    priceId: 'price_complete_bundle',
  },
];

export async function GET() {
  try {
    // In production, you might want to:
    // - Fetch from a database
    // - Add authentication checks
    // - Cache the response
    // - Filter based on user preferences
    
    return NextResponse.json(programs, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching programs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch programs' },
      { status: 500 }
    );
  }
}


