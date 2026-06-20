import { NextResponse } from 'next/server';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Program {
  id: string;
  title: string;
  description: string;
  price: number;
  priceId?: string;
  videoUrl: string;
  thumbnail: string;
  difficulty: Difficulty;
  duration: string;
  exercises: number;
  category: string;
  features: string[];
}

const programs: Program[] = [
  {
    id: '1',
    title: 'Lower Back Pain Relief',
    description: 'A comprehensive 6-week program to strengthen your core, improve flexibility, and alleviate lower back pain with expert video guidance throughout.',
    price: 49.99,
    priceId: 'price_lowerback_relief',
    videoUrl: 'https://www.youtube.com/watch?v=4BOTvaRaDjI',
    thumbnail: 'https://img.youtube.com/vi/4BOTvaRaDjI/maxresdefault.jpg',
    difficulty: 'Beginner',
    duration: '6 weeks',
    exercises: 24,
    category: 'Rehabilitation',
    features: ['HD video demos', 'Progress tracking', 'Expert guidance', 'Printable plans'],
  },
  {
    id: '2',
    title: 'Post-Surgery Rehabilitation',
    description: 'Specialized exercises for post-surgical recovery. ACL reconstruction, joint replacements, and spinal procedures covered with step-by-step guidance.',
    price: 79.99,
    priceId: 'price_post_surgery_rehab',
    videoUrl: 'https://www.youtube.com/watch?v=sTGBY3TY_BA',
    thumbnail: 'https://img.youtube.com/vi/sTGBY3TY_BA/maxresdefault.jpg',
    difficulty: 'Intermediate',
    duration: '12 weeks',
    exercises: 40,
    category: 'Post-Surgery',
    features: ['Custom recovery phases', 'Pain monitoring', 'Therapist notes', 'Weekly check-ins'],
  },
  {
    id: '3',
    title: 'Desk Worker Stretch Routine',
    description: 'Daily stretches for office workers. Combat neck pain, shoulder tension, and poor posture from extended desk sessions.',
    price: 29.99,
    priceId: 'price_desk_worker_stretch',
    videoUrl: 'https://www.youtube.com/watch?v=6CyPDFLBYac',
    thumbnail: 'https://img.youtube.com/vi/6CyPDFLBYac/maxresdefault.jpg',
    difficulty: 'Beginner',
    duration: '4 weeks',
    exercises: 18,
    category: 'Office Health',
    features: ['10-min daily routines', 'Chair-based exercises', 'Ergonomics guide', 'Reminder tips'],
  },
  {
    id: '4',
    title: 'Athletic Performance Enhancement',
    description: 'Advanced training for athletes. Improve performance, prevent injuries, and enhance recovery with sport-specific physiotherapy exercises.',
    price: 99.99,
    priceId: 'price_athletic_performance',
    videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    thumbnail: 'https://img.youtube.com/vi/IODxDxX7oi4/maxresdefault.jpg',
    difficulty: 'Advanced',
    duration: '8 weeks',
    exercises: 52,
    category: 'Sports',
    features: ['Sport-specific drills', 'Nutrition tips', 'Recovery protocols', 'Performance metrics'],
  },
  {
    id: '5',
    title: 'Senior Fitness & Mobility',
    description: 'Safe and effective exercises for seniors to maintain mobility, balance, and independence. Low-impact routines with age-appropriate modifications.',
    price: 39.99,
    priceId: 'price_senior_fitness',
    videoUrl: 'https://www.youtube.com/watch?v=cbKkB3POqaY',
    thumbnail: 'https://img.youtube.com/vi/cbKkB3POqaY/maxresdefault.jpg',
    difficulty: 'Beginner',
    duration: '8 weeks',
    exercises: 30,
    category: 'Senior Health',
    features: ['Balance training', 'Fall prevention', 'Chair modifications', 'Family guide'],
  },
  {
    id: '6',
    title: 'Complete Home Workout Bundle',
    description: 'All-inclusive package covering strength, flexibility, cardio, and recovery. Best value — all programs in one lifetime access purchase.',
    price: 149.99,
    priceId: 'price_complete_bundle',
    videoUrl: 'https://www.youtube.com/watch?v=ml6cT4AZdqI',
    thumbnail: 'https://img.youtube.com/vi/ml6cT4AZdqI/maxresdefault.jpg',
    difficulty: 'Intermediate',
    duration: '16 weeks',
    exercises: 90,
    category: 'Bundle',
    features: ['All 5 programs', 'Lifetime access', 'Priority support', 'Monthly updates'],
  },
];

export async function GET() {
  try {
    return NextResponse.json(programs, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching programs:', error);
    return NextResponse.json({ error: 'Failed to fetch programs' }, { status: 500 });
  }
}
