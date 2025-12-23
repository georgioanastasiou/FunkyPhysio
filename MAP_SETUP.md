# Interactive Map Setup Guide

## 🗺️ How to Update the Map with Your Address

### Step 1: Update Your Address

Edit `src/config/location.ts` and update the address fields:

```typescript
export const clinicLocation = {
  address: 'YOUR FULL ADDRESS HERE',
  street: 'YOUR STREET ADDRESS',
  city: 'YOUR CITY',
  state: 'YOUR STATE',
  zipCode: 'YOUR ZIP CODE',
  // ... rest of config
};
```

### Step 2: Get Your Google Maps Embed URL

**Method 1: Using Google Maps (Easiest)**

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your clinic address
3. Click on the **Share** button (left sidebar)
4. Click on **"Embed a map"** tab
5. Choose your map size (recommended: Medium or Large)
6. Copy the **iframe src URL** (starts with `https://www.google.com/maps/embed?...`)
7. Paste it into `googleMapsEmbedUrl` in `src/config/location.ts`

**Method 2: Using Google Maps Embed API**

1. Go to [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
2. Use the place ID or address
3. Generate embed code

### Step 3: Test Your Map

1. Save the `location.ts` file
2. Refresh your website
3. Navigate to the Contact page
4. Verify the map shows your correct location

### Example Configuration

```typescript
export const clinicLocation = {
  address: '123 Main Street, Berlin, Germany 10115',
  street: '123 Main Street',
  city: 'Berlin',
  state: '',
  zipCode: '10115',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...',
  // ...
};
```

### Features Included

✅ **Interactive Google Maps embed** - Users can zoom, pan, and explore  
✅ **Get Directions button** - Opens Google Maps directions in new tab  
✅ **Responsive design** - Works on mobile, tablet, and desktop  
✅ **Easy to update** - Change address in one place (location.ts)  

### Alternative: Using OpenStreetMap (Free, No API Key)

If you prefer not to use Google Maps, you can use Leaflet with OpenStreetMap:

1. Install: `npm install react-leaflet leaflet`
2. Create a Leaflet component
3. Use your coordinates

---

## 📊 SEO TODO: Improve Links Ratio

### Current Issue
- **Internal links**: 7 (too few)
- **External links**: 1
- **Status**: ⚠️ Needs improvement for better SEO

### What This Means
Google wants to see that your pages link to both:
1. **Internal links** - Other pages on your own website
2. **External links** - High-quality, relevant external resources

### 🎯 Action Items

#### 1. Add More Internal Links
Link to other pages on your site naturally within content:

**Examples:**
- Contact page → Link to "About" page when mentioning George
- Contact page → Link to "Services" page when mentioning treatments
- Contact page → Link to "Blog" page for health tips
- About page → Link to "Programs" page
- Services page → Link to specific blog posts about each service
- Blog posts → Link to related blog posts and service pages

**Best Practices:**
- Use descriptive anchor text (not just "click here")
- Link naturally within the content flow
- Aim for 10-15 internal links per page
- Make sure links are relevant to the context

#### 2. Add External Links to High-Quality Resources
Link to authoritative external websites that provide value to readers:

**Recommended External Resources for Physiotherapy Site:**

**Medical/Health Organizations:**
- [World Health Organization (WHO)](https://www.who.int/)
- [American Physical Therapy Association](https://www.apta.org/)
- [Chartered Society of Physiotherapy](https://www.csp.org.uk/)
- [National Institutes of Health (NIH)](https://www.nih.gov/)

**Educational Resources:**
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/) - Medical research
- [Physiopedia](https://www.physio-pedia.com/) - Physiotherapy wiki
- [Mayo Clinic](https://www.mayoclinic.org/) - Health information

**Local Resources:**
- Link to local health authorities
- Link to sports organizations if you work with athletes
- Link to relevant medical journals or studies

**Where to Add External Links:**
- Blog posts - Link to studies, research papers, or authoritative health sites
- Services page - Link to medical resources explaining conditions you treat
- About page - Link to professional associations you're affiliated with
- Contact page - Could link to health insurance info or local health department

#### 3. Example Implementation

**On Contact Page:**
```markdown
"We specialize in treating sports injuries and chronic pain. 
Learn more about [common sports injuries](https://www.mayoclinic.org/sports-injuries) 
and how [physiotherapy can help](https://www.physio-pedia.com/)."

"Book an appointment to discuss our [massage therapy services](/services#massage) 
or read our latest [blog post about preventing injuries](/blog/injury-prevention)."
```

**On Services Page:**
```markdown
"Our physiotherapy treatments are based on evidence-based practices 
recommended by the [American Physical Therapy Association](https://www.apta.org/).

Check out our [success stories](/about#testimonials) or 
[schedule a consultation](/contact) today."
```

**On Blog Posts:**
```markdown
"According to research published on [PubMed](https://pubmed.ncbi.nlm.nih.gov/), 
regular stretching can reduce back pain by up to 30%.

Want to learn more? Read our guide on [therapeutic exercises](/services#therapeutic-training) 
or explore our [other blog posts](/blog)."
```

### ⚠️ Important SEO Guidelines

**DO:**
✅ Link to high-quality, authoritative websites (.gov, .edu, established medical sites)
✅ Use relevant, descriptive anchor text
✅ Make links naturally fit within your content
✅ Link to pages that add value for your readers
✅ Keep external links opening in new tabs (target="_blank")

**DON'T:**
❌ Link to spammy or low-quality websites
❌ Use the same anchor text repeatedly
❌ Add links just for the sake of having links
❌ Link to competitors' websites
❌ Use "click here" as anchor text

### 📈 Target Goals
- **Internal links**: 10-15 per page (currently 7)
- **External links**: 3-5 per page to authoritative sites (currently 1)
- **Total links**: 15-20 per page
- **Link quality**: All links should be relevant and valuable

### 🔧 Implementation Checklist

- [ ] Audit all pages and count current internal/external links
- [ ] Identify opportunities to add internal links between pages
- [ ] Research and compile list of authoritative external resources
- [ ] Add internal links naturally within existing content
- [ ] Add external links to high-quality health/medical resources
- [ ] Ensure all external links open in new tabs
- [ ] Use descriptive anchor text for all links
- [ ] Test all links to ensure they work correctly
- [ ] Update blog posts with relevant internal and external links
- [ ] Monitor Google Search Console for improvements

---

**Priority**: Medium-High  
**Estimated Time**: 2-3 hours to implement across all pages  
**SEO Impact**: High - Better link structure improves rankings and user experience

**Current Setup**: The map is configured with a placeholder address. Update it with your actual clinic address!


