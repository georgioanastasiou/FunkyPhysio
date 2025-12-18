# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
# Get these values from your Sanity project dashboard at https://sanity.io/manage
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe Configuration
# Get your keys from: https://dashboard.stripe.com/apikeys

# Stripe Secret Key (Server-side)
# Use test key for development: sk_test_...
# Use live key for production: sk_live_...
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Stripe Publishable Key (Client-side - if needed)
# Use test key for development: pk_test_...
# Use live key for production: pk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Optional: Stripe Price IDs (if using existing products in Stripe)
# STRIPE_PRICE_ID_LOWERBACK=price_xxxxx
# STRIPE_PRICE_ID_POSTSURGERY=price_xxxxx
# STRIPE_PRICE_ID_DESKWORKER=price_xxxxx
# STRIPE_PRICE_ID_ATHLETIC=price_xxxxx
# STRIPE_PRICE_ID_SENIOR=price_xxxxx
# STRIPE_PRICE_ID_BUNDLE=price_xxxxx

# Base URL for redirects (used in checkout success/cancel URLs)
# For local development:
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# For production, use your actual domain:
# NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# Vercel automatically sets this if deploying to Vercel:
# VERCEL_URL=your-project.vercel.app
```

## Getting Your Sanity Project Details

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Sign in to your Sanity account
3. Select your project or create a new one
4. Copy your **Project ID** from the project settings
5. The **Dataset** is typically `production` (default) or `development`
6. Add these values to your `.env.local` file

### If you don't have a Sanity project yet:

1. Run `npx sanity init` in your project directory
2. Follow the prompts to create a new project
3. The CLI will provide your Project ID and Dataset

## Getting Your Stripe Keys

1. Sign up for a Stripe account at https://stripe.com
2. Go to Developers → API keys
3. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
4. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)
5. Add them to your `.env.local` file

## Test Mode vs Live Mode

- **Test Mode**: Use keys starting with `test_` for development
- **Live Mode**: Use keys starting with `live_` for production
- Test cards: https://stripe.com/docs/testing

## Important Notes

- Never commit `.env.local` to git
- Use test keys during development
- Switch to live keys only in production
- Keep your secret keys secure


