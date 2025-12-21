# FunkyPhysio Project Notes

## Project Overview
**Project Name**: FunkyPhysio - George Anastasiou Physiotherapy Website  
**Repository**: https://github.com/georgioanastasiou/FunkyPhysio.git  
**Technology Stack**: Next.js 15, TypeScript, Tailwind CSS, Sanity CMS  
**Last Updated**: December 18, 2025

## 🎨 Typography System
### Font Hierarchy Implemented:
- **H2**: Poppins 48px Semibold
- **H3**: Figtree 24px Semibold  
- **H4**: Figtree 18px Medium
- **Body Text**: Figtree 16px Regular

### Font Configuration:
- Fonts loaded via Google Fonts in `globals.css`
- Custom Tailwind classes: `text-h2`, `text-h3`, `text-h4`, `text-body`
- Font families: `font-poppins`, `font-figtree`, `font-museo-moderno`

## 🎨 Color Palette
### Primary Colors:
- **Purple**: `#8B5A96` (buttons, accents)
- **Blue**: `#1A7BF0` (contact form highlights)
- **Pink**: `#D84795` (CTA buttons, testimonials play buttons)
- **Dark Purple**: `#331d3d` (testimonials background)

## 📁 Important File Locations

### Images & Media:
- **Logo**: `/public/logo.png`
- **Hero Video**: `/public/hero-video.mp4` ⚠️ (76.89MB - exceeds GitHub limit)
- **Contact Image**: `/public/contact-image.png`
- **Service Images**: 
  - `/public/physiotherapy.png`
  - `/public/massage.png` 
  - `/public/therapeutic-training.png`
- **Basketball Photos**: `/public/basketball/DSC_0079.jpg` (used in "Meet George" section)

### Key Components:
- **Homepage**: `/src/app/page.tsx`
- **Contact Form**: `/src/app/contact/page.tsx`
- **Navigation**: `/src/components/Navbar.tsx`
- **Footer**: `/src/components/Footer.tsx`

## 🏠 Homepage Sections

### 1. Hero Section
- Full-screen video background (`/public/hero-video.mp4`)
- Logo and title overlay
- Custom wavy bottom border using SVG from `Group 5223.svg`

### 2. What We Do Section
- 3 service cards with image overlays
- Purple tint overlay (70% opacity #3A306F)
- Services: Physiotherapy, Massage, Therapeutic Training

### 3. Meet George Anastasiou Section
- Side-by-side layout
- Basketball photo on left
- Bio content on right
- Purple "Learn More" button

### 4. Services Overview Section
- 3-column grid layout
- Sports Injury, Post-Surgical Recovery, Chronic Pain Management
- Icons and bullet points

### 5. Testimonials Section
- Dark purple background (`#331d3d`)
- Custom wave borders (top and bottom)
- 4 testimonial cards with placeholder images
- Pink play buttons (decorative, no functionality)

## 📧 Contact Form Features

### Form Fields:
- First Name & Last Name (side by side)
- Email & Phone (side by side)
- Message (full width)
- Single purple "Send Message" button

### Styling Features:
- Floating labels with animation
- Focus states with blue highlights
- Custom wave overlay on right side
- Mountain image background
- Decorative dashed wave SVG

### Form Functionality:
- React state management
- Input focus/blur animations
- Form validation (required fields)
- Console logging on submit (ready for backend integration)

## ⚠️ Important Issues & Recommendations

### 1. Large File Warning
- **Issue**: `hero-video.mp4` is 76.89MB (exceeds GitHub's 50MB limit)
- **Solutions**:
  - Compress video to reduce file size
  - Use Git LFS (Large File Storage)
  - Host video on CDN (Cloudinary, AWS S3, etc.)

### 2. Contact Image Format
- **Note**: Originally had `contact-image.pdf` 
- **Solution**: Converted to PNG format
- **Current**: Using `/public/contact-image.png`

### 3. Video Optimization
- **Current**: Videos removed from testimonials for performance
- **Future**: Add lightweight video testimonials when ready
- **Alternative**: Consider using optimized video formats (WebM, MP4 with smaller bitrate)

## 🚀 Deployment Considerations

### Environment Setup:
- Ensure all environment variables are set
- Configure Sanity CMS credentials
- Set up domain and SSL certificates

### Performance Optimizations Needed:
- [ ] Optimize hero video size
- [ ] Implement lazy loading for images
- [ ] Add video compression pipeline
- [ ] Set up CDN for media files

### SEO & Accessibility:
- [ ] Add meta descriptions
- [ ] Implement structured data
- [ ] Add alt text for all images
- [ ] Test keyboard navigation
- [ ] Validate color contrast ratios

## 🛠️ Development Setup

### Required Dependencies:
- Next.js 15
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Sanity CMS

### Custom Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Figtree:wght@400;500;600&display=swap');
```

### Key Configuration Files:
- `tailwind.config.ts` - Custom typography and font classes
- `globals.css` - Typography hierarchy and font imports
- `layout.tsx` - Favicon and meta configuration

## 📱 Responsive Design Notes

### Breakpoints Used:
- Mobile: Default (320px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

### Mobile Considerations:
- Hero video responsive sizing
- Contact form stacks vertically on mobile
- Testimonials grid collapses to single column
- Service cards stack on smaller screens

## 🎯 Future Enhancements

### High Priority:
1. **Backend Integration**: Connect contact form to email service
2. **Video Optimization**: Compress and optimize hero video
3. **Content Management**: Set up Sanity CMS for easy content updates
4. **Performance**: Implement image optimization and lazy loading

### Medium Priority:
1. **Blog System**: Complete blog functionality with Sanity
2. **Booking System**: Add appointment booking capability
3. **Testimonial Videos**: Add real patient testimonial videos
4. **Analytics**: Implement Google Analytics or similar

### Low Priority:
1. **Animations**: Add subtle scroll animations
2. **Dark Mode**: Consider dark mode toggle
3. **Multi-language**: Add Greek language support
4. **PWA**: Make the site a Progressive Web App

## 📞 Contact Information
- **Email**: g.anastasiou.dev@gmail.com
- **GitHub**: https://github.com/georgioanastasiou/FunkyPhysio
- **Project Type**: Professional Physiotherapy Website

## 🔗 Useful Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sanity CMS Documentation](https://www.sanity.io/docs)
- [Git LFS Documentation](https://git-lfs.github.com/)

---

**Last Updated**: December 18, 2025  
**Status**: Ready for deployment with minor optimizations needed