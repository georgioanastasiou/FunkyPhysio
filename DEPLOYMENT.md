# 🚀 Deployment Guide for George Anastasiou Physiotherapy Website

## Option 1: Vercel (Recommended - Free & Easy)

### Step 1: Prepare for Deployment
```bash
# Build the project to check for errors
npm run build

# If successful, you're ready to deploy!
```

### Step 2: Deploy with Vercel CLI
```bash
# Login to Vercel (will open browser)
npx vercel login

# Deploy your project
npx vercel

# For production deployment
npx vercel --prod
```

### Step 3: Connect to GitHub (Optional but Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Automatic deployments on every push to main branch

---

## Option 2: Netlify (Free Alternative)

### Step 1: Build Command
```bash
npm run build
npm run export  # Add this to package.json scripts
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `out` folder
3. Or connect your GitHub repository

---

## Option 3: GitHub Pages (Free)

### Step 1: Update package.json
```json
{
  "scripts": {
    "export": "next export",
    "deploy": "npm run build && npm run export"
  }
}
```

### Step 2: Deploy
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions

---

## Environment Variables (If Needed)

Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Update your metadata:
Update `src/app/layout.tsx`:
```typescript
metadataBase: new URL('https://your-domain.com')
```

---

## Pre-Deployment Checklist

- [ ] Test `npm run build` locally
- [ ] Update domain URLs in metadata
- [ ] Update contact email if needed
- [ ] Test all pages and forms
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags

---

## Quick Deploy Commands

```bash
# Build and test locally
npm run build
npm start

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify (after building)
npm run build
# Then drag 'out' folder to Netlify
```

---

## Troubleshooting

### Build Errors:
- Check for TypeScript errors: `npm run build`
- Fix any linting issues: `npm run lint`
- Ensure all imports are correct

### Deployment Issues:
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check for missing environment variables

### Domain Issues:
- Verify DNS settings
- Check SSL certificate status
- Ensure domain is properly configured
