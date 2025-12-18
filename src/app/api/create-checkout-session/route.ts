import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe lazily (only when needed)
const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-12-15.clover',
    typescript: true,
  });
};

// Program data - In production, fetch from database
const programs = [
  {
    id: '1',
    title: 'Lower Back Pain Relief Program',
    description: 'A comprehensive 6-week program designed to strengthen your core, improve flexibility, and alleviate lower back pain.',
    price: 4999, // Price in cents
    priceId: process.env.STRIPE_PRICE_ID_LOWERBACK || 'price_lowerback_relief',
  },
  {
    id: '2',
    title: 'Post-Surgery Rehabilitation Guide',
    description: 'Specialized exercises for post-surgical recovery. Customized routines for common surgeries.',
    price: 7999,
    priceId: process.env.STRIPE_PRICE_ID_POSTSURGERY || 'price_post_surgery_rehab',
  },
  {
    id: '3',
    title: 'Desk Worker Stretch Routine',
    description: 'Perfect for office workers. Daily stretches and exercises to combat neck pain and poor posture.',
    price: 2999,
    priceId: process.env.STRIPE_PRICE_ID_DESKWORKER || 'price_desk_worker_stretch',
  },
  {
    id: '4',
    title: 'Athletic Performance Enhancement',
    description: 'Advanced training program for athletes looking to improve performance and prevent injuries.',
    price: 9999,
    priceId: process.env.STRIPE_PRICE_ID_ATHLETIC || 'price_athletic_performance',
  },
  {
    id: '5',
    title: 'Senior Fitness & Mobility',
    description: 'Safe and effective exercises for seniors to maintain mobility and balance.',
    price: 3999,
    priceId: process.env.STRIPE_PRICE_ID_SENIOR || 'price_senior_fitness',
  },
  {
    id: '6',
    title: 'Complete Home Workout Bundle',
    description: 'All-inclusive package with multiple exercise programs covering all fitness aspects.',
    price: 14999,
    priceId: process.env.STRIPE_PRICE_ID_BUNDLE || 'price_complete_bundle',
  },
];

export async function POST(request: NextRequest) {
  try {
    const { programId } = await request.json();

    if (!programId) {
      return NextResponse.json(
        { error: 'Program ID is required' },
        { status: 400 }
      );
    }

    // Find the program
    const program = programs.find((p) => p.id === programId);

    if (!program) {
      return NextResponse.json(
        { error: 'Program not found' },
        { status: 404 }
      );
    }

    // Get the base URL for success/cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                    'http://localhost:3000';

    // Initialize Stripe
    const stripe = getStripe();

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: program.title,
              description: program.description,
              images: [], // Add product images if available
            },
            unit_amount: program.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/programs?canceled=true`,
      metadata: {
        programId: program.id,
        programTitle: program.title,
      },
      // Optional: Add customer email collection
      // customer_email: email,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
