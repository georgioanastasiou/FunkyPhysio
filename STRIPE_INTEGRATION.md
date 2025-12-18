# Stripe Integration Guide

## Overview

This document explains how the Stripe payment integration works in the physiotherapy website.

## Components

### 1. ProgramsSection Component (`src/components/ProgramsSection.tsx`)

A React component that:
- Fetches programs from `/api/programs`
- Displays programs in a responsive grid layout
- Handles "Buy Now" button clicks
- Creates Stripe checkout sessions
- Shows loading states and error handling

### 2. API Routes

#### `/api/programs` (GET)
- Returns a list of available exercise programs
- Each program includes: id, title, description, price
- Can be extended to fetch from a database

#### `/api/create-checkout-session` (POST)
- Accepts a `programId` in the request body
- Creates a Stripe Checkout Session
- Returns the checkout URL for redirection
- Handles errors gracefully

### 3. Success Page (`src/app/success/page.tsx`)

Shown after successful payment completion.

## Setup Instructions

1. **Install Dependencies** (Already done)
   ```bash
   npm install stripe @stripe/stripe-js
   ```

2. **Get Stripe Keys**
   - Sign up at https://stripe.com
   - Go to Developers → API keys
   - Copy your test keys

3. **Configure Environment Variables**
   - Create `.env.local` file
   - Add your Stripe keys (see `ENV_SETUP.md`)

4. **Test the Integration**
   - Use Stripe test cards: https://stripe.com/docs/testing
   - Test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC

## How It Works

1. User visits `/programs` page
2. ProgramsSection component fetches programs from API
3. User clicks "Buy Now" on a program
4. Component calls `/api/create-checkout-session` with programId
5. API creates Stripe Checkout Session
6. User is redirected to Stripe Checkout
7. After payment, user is redirected to `/success`

## Customization

### Adding New Programs

Edit `src/app/api/programs/route.ts` and add to the `programs` array.

### Modifying Prices

Update prices in both:
- `src/app/api/programs/route.ts` (for display)
- `src/app/api/create-checkout-session/route.ts` (for Stripe)

### Styling

The component uses Tailwind CSS. Modify classes in `ProgramsSection.tsx` to customize appearance.

## Production Deployment

1. Switch to live Stripe keys
2. Update `NEXT_PUBLIC_BASE_URL` to your production domain
3. Configure webhooks for payment confirmation (optional)
4. Test thoroughly before going live

## Security Notes

- Never expose `STRIPE_SECRET_KEY` in client-side code
- Always validate program IDs on the server
- Use HTTPS in production
- Implement rate limiting for API routes


