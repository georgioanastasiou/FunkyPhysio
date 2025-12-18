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

**Current Setup**: The map is configured with a placeholder address. Update it with your actual clinic address!


