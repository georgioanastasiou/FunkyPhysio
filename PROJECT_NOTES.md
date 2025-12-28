# FunkyPhysio Project Notes

## Project Overview
**Project Name**: FunkyPhysio - George Anastasiou Physiotherapy Website  
**Repository**: https://github.com/georgioanastasiou/FunkyPhysio.git  
**Technology Stack**: Next.js 15, TypeScript, Tailwind CSS, Sanity CMS  
**Last Updated**: December 28, 2025



## 🎯 Future Enhancements

### High Priority:
1. **Backend Integration**: Connect contact form to email service (Resend/SendGrid)
2. **Analytics**: Implement Google Analytics or Plausible
3. **Real Testimonials**: Replace placeholder testimonials with real patient videos

### Planned Features:
1. **Customer Authentication & Dashboard** - See detailed plan below
2. **Booking System**: Calendar integration (Calendly/Cal.com)
3. **Multi-language**: Add Greek language support
4. **Newsletter**: Email subscription system

## 💳 FUTURE: Program Sales & Customer Authentication System

### Overview
Add full authentication and customer dashboard for selling exercise programs with Stripe integration.

### Implementation Plan:

#### 1. **Authentication System** (NextAuth.js)
**Dependencies to install:**
```bash
npm install next-auth@latest @auth/prisma-adapter prisma @prisma/client bcryptjs
npm install -D @types/bcryptjs
```

**Features:**
- Email/Password authentication
- Google OAuth (optional)
- Session management
- Protected routes

#### 2. **Database Setup** (Prisma + PostgreSQL/MongoDB)
**What to store:**
- User accounts (email, password hash, name)
- Purchased programs (user_id, program_id, purchase_date)
- Program access (which programs user owns)
- Stripe payment records

**Prisma Schema Example:**
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  password      String
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  purchases     Purchase[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Purchase {
  id              String   @id @default(cuid())
  userId          String
  programId       String
  stripePaymentId String   @unique
  amount          Int
  purchaseDate    DateTime @default(now())
  user            User     @relation(fields: [userId], references: [id])
}
```

#### 3. **Customer Flow**
```
Step 1: Browse Programs (No login needed)
  ↓
Step 2: Click "Buy Now" 
  ↓
Step 3: Check if logged in
  - Not logged in → Redirect to /auth/signup or /auth/login
  - Already logged in → Proceed to checkout
  ↓
Step 4: Stripe Checkout (existing)
  ↓
Step 5: After successful payment:
  - Save purchase to database (user_id + program_id)
  - Send confirmation email
  - Redirect to /dashboard
  ↓
Step 6: Customer Dashboard
  - View purchased programs
  - Access program content (videos, PDFs, exercises)
  - Download resources
  - Track progress
```

#### 4. **Pages to Create**

**Authentication Pages:**
- `/auth/login` - Login form
- `/auth/signup` - Registration form
- `/auth/forgot-password` - Password reset

**Customer Pages:**
- `/dashboard` - Main customer dashboard
- `/dashboard/programs` - List of purchased programs
- `/dashboard/programs/[id]` - Individual program content
- `/dashboard/settings` - Account settings
- `/dashboard/billing` - Payment history

#### 5. **Components to Create**

```
/src/components/auth/
  - LoginForm.tsx
  - SignupForm.tsx
  - ProtectedRoute.tsx
  - AuthProvider.tsx

/src/components/dashboard/
  - DashboardLayout.tsx
  - ProgramCard.tsx
  - ProgramContent.tsx (videos, exercises, PDFs)
  - ProgressTracker.tsx
  - BillingHistory.tsx
```

#### 6. **API Routes to Create**

```
/src/app/api/auth/
  - [...nextauth]/route.ts (NextAuth configuration)
  - register/route.ts (user registration)
  
/src/app/api/
  - purchases/route.ts (get user purchases)
  - programs/[id]/route.ts (get program content)
  - webhook/route.ts (Stripe webhook to save purchases)
```

#### 7. **Stripe Webhook Integration**
**Purpose:** After successful payment, Stripe sends webhook to save purchase

**Implementation:**
```typescript
// /src/app/api/webhook/route.ts
// Listen for 'checkout.session.completed' event
// Extract user_id and program_id from metadata
// Save purchase to database
// Send confirmation email
```

#### 8. **Environment Variables Needed**

```env
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database (choose one)
DATABASE_URL=postgresql://user:password@localhost:5432/funkyphysio
# OR
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/funkyphysio

# Email Service (for confirmations)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Stripe (already have these)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### 9. **Program Content Storage Options**

**Option A: Sanity CMS** (Recommended - already using)
- Store program videos in Sanity
- Store exercise descriptions
- Store downloadable PDFs
- Easy content management

**Option B: AWS S3 / Cloudflare R2**
- Store large video files
- Generate signed URLs for access
- More cost-effective for large files

**Option C: Hybrid**
- Metadata in Sanity
- Large files in S3/R2
- Best of both worlds

#### 10. **Security Considerations**

**Must Implement:**
- ✅ Password hashing (bcrypt)
- ✅ Protected API routes (check authentication)
- ✅ Secure session management
- ✅ CSRF protection (NextAuth handles this)
- ✅ Rate limiting on auth endpoints
- ✅ Email verification (optional but recommended)
- ✅ Stripe webhook signature verification

**Content Protection:**
- ✅ Check user owns program before showing content
- ✅ Use signed URLs for video/PDF downloads
- ✅ Implement video DRM (optional, for high-value content)
- ✅ Watermark PDFs with user email (prevents sharing)

#### 11. **Email Notifications**

**When to send:**
- Account creation (welcome email)
- Purchase confirmation (with receipt)
- Program access instructions
- Password reset
- Payment failed/declined

**Email Service Options:**
- SendGrid (free tier: 100 emails/day)
- Resend (modern, developer-friendly)
- AWS SES (cost-effective for high volume)
- Postmark (reliable, good deliverability)

#### 12. **User Experience Enhancements**

**Dashboard Features:**
```typescript
// Example dashboard sections:
- "My Programs" - Grid of purchased programs
- "Recently Accessed" - Quick access to programs
- "Progress Tracking" - Mark exercises as complete
- "Recommendations" - Suggest related programs
- "Support" - Contact form for program questions
```

**Program Content Features:**
```typescript
// Example program page:
- Video player with progress tracking
- Exercise list with checkboxes
- Downloadable PDF workout sheets
- Notes section (user can add personal notes)
- FAQ section
- Email support button
```

#### 13. **Testing Checklist**

**Before Launch:**
- [ ] Test signup/login flow
- [ ] Test password reset
- [ ] Test Stripe checkout
- [ ] Test webhook (purchase saving)
- [ ] Test program access after purchase
- [ ] Test protected routes (can't access without login)
- [ ] Test email notifications
- [ ] Test on mobile devices
- [ ] Load test with multiple concurrent users

#### 14. **Estimated Implementation Time**

**Phase 1: Basic Auth (1-2 days)**
- NextAuth.js setup
- Login/signup pages
- Database setup

**Phase 2: Purchase Integration (1 day)**
- Stripe webhook
- Save purchases to database

**Phase 3: Dashboard (2-3 days)**
- Dashboard layout
- Display purchased programs
- Program content pages

**Phase 4: Content Management (1-2 days)**
- Upload program content to Sanity
- Video player integration
- PDF download system

**Phase 5: Testing & Polish (1-2 days)**
- Email notifications
- Bug fixes
- Mobile optimization

**Total: ~1-2 weeks** (depending on complexity and features)

#### 15. **Revenue Optimization Ideas**

**Upsell Opportunities:**
- Bundle programs (buy 3, get 1 free)
- Subscription model (access all programs for monthly fee)
- Add consultation calls (program + 1 video call)
- Progress coaching (paid accountability partner)

**Marketing Integration:**
- Abandoned cart emails (if they don't complete purchase)
- Re-engagement emails (come back and buy more programs)
- Referral system (give friends 10% off, you get $10)
- Affiliate program (trainers promote your programs)

---

**Status**: Implementation planned for future development  
**Priority**: Medium-High (revenue-generating feature)  
**Dependencies**: Stripe integration ✅ (already complete)

---

**Last Updated**: December 28, 2025  
**Status**: Production-ready. All performance optimizations complete. Authentication system planned for future implementation.