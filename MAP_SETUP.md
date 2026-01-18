# Setup Guide

## 🗺️ Map Setup

1. Edit `src/config/location.ts` - Update your address
2. Get Google Maps embed URL from [Google Maps](https://www.google.com/maps) → Share → Embed
3. Paste URL into `googleMapsEmbedUrl` in location.ts

---

## 📅 Jane App Integration (TODO)

### Quick Setup:
1. Sign up: [jane.app/sign-up](https://jane.app/sign-up) (30-day free trial)
2. Configure services (Physiotherapy €60/70, Massage, Therapeutic Training)
3. Get your Jane URL (e.g., funkyphysio.jane.app)
4. Add to website:

```javascript
// layout.tsx - Add Jane embed script
<Script src="https://jane.app/embed.js" />

// Booking buttons
<button onClick={() => window.janeModal.open()}>Book Now</button>
```

**Files to update:** Navbar.tsx, page.tsx, Footer.tsx  
**Cost:** ~€50/month | **ROI:** High (24/7 booking, automated payments)

---

## 🎥 Remote Sessions Tech Stack

### Essential Tools:
- **Video:** Zoom Pro (€14/month) - HD quality, recording, screen share
- **Movement Analysis:** Hudl Technique (FREE) - Slow-mo, angle measurements
- **ROM Measurement:** Goniometer Pro (€5) - Patient uses on phone
- **Exercise Prescription:** Physitrack (€49/month) - Tracks compliance, integrates with Jane
- **Anatomy Visualization:** Complete Anatomy (€10/month) - 3D models, muscle layers, animations
- **Documentation:** Jane App EHR (€50/month) - SOAP notes, payments

**Total Cost:** €133/month | **Revenue per session:** €80 | **Break-even:** 2 sessions/month

### Anatomy Apps for Patient Education:

**1. Complete Anatomy (BEST)** - €10/month or €100/year
- 3D anatomy models you can rotate, zoom, dissect
- Show/hide muscle layers during screen share
- Animations of movements (e.g., "This is what happens when you squat")
- Highlight specific muscles: "See this hip flexor? It's tight here"
- [3d4medical.com](https://3d4medical.com)

**2. Visible Body** - €25/month or €300/year  
- Similar to Complete Anatomy, more detailed
- Muscle actions and common injuries
- Pathology visuals (herniated disc, torn meniscus)
- [visiblebody.com](https://visiblebody.com)

**3. Essential Anatomy (Budget)** - €25 one-time
- Good quality 3D models
- No subscription, one-time purchase
- iOS/iPad/Mac only

**4. Muscle & Motion (Exercise-specific)** - Free basic / €8/month pro
- Shows biomechanics of exercises
- "Here's the correct squat" with muscle activation
- [muscleandmotion.com](https://muscleandmotion.com)

**5. BioDigital Human (Web-based)** - Free basic / €29/month pro
- Works in browser (no app needed)
- Easy to screen share
- [biodigital.com](https://biodigital.com)

### How to Use During Session:

**Example: Sofia's lower back pain**
```
1. Open Complete Anatomy on iPad
2. Screen share via Zoom
3. Rotate to show spine from side view
4. "See this curve? Yours is too pronounced here"
5. Highlight psoas muscle in red
6. "This tight muscle pulls your pelvis forward"
7. Show animation of proper vs improper sitting
8. Patient sees exactly what's wrong
```

### Quick Session Flow:
1. **Pre-session:** Jane sends Zoom link + prep instructions
2. **Assessment (30min):** Posture screenshots → Hudl analysis, ROM with Goniometer Pro
3. **Explanation (10min):** Screen share anatomy app → Show problem areas visually
4. **Treatment (20min):** Live exercise demo → Send Physitrack program
5. **Close (5min):** SOAP notes in Jane → Auto-payment → Book follow-up

**Realistic Goal:** 15 online sessions/week = €4,696/month

### Start Guide:
- **Week 1:** Sign up for Zoom Pro + Jane trial
- **Week 2:** Practice with colleague
- **Week 3:** Offer 3 patients discounted session (€60)
- **Week 4:** Full launch at €80/session

---

## 📊 SEO TODO: Add More Links

**Current:** 7 internal links, 1 external (too few)  
**Target:** 10-15 internal, 3-5 external per page

**Quick Fixes:**
- Link between pages (About → Services, Blog → Contact)
- Add external links to: [Physiopedia](https://physio-pedia.com), [Mayo Clinic](https://mayoclinic.org), [PubMed](https://pubmed.ncbi.nlm.nih.gov/)
- Use descriptive anchor text (not "click here")

**Time:** 2-3 hours | **Impact:** Better SEO rankings

---

## 📚 Full Guides

For detailed step-by-step guides on remote assessment tools and session examples, see:
- Remote Assessment Tools: Check tools section above
- Example Session with Sofia (Lower Back Pain): Detailed 60-min walkthrough available
- Tech troubleshooting and best practices: Available on request

**Note:** This condensed guide covers essentials. Request detailed documentation for specific topics.


