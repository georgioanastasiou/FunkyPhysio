// Location Configuration
// Update these values with your actual clinic address

const address = '123 Health Street, Medical District, NY 10001';

export const clinicLocation = {
  address: address,
  street: '123 Health Street',
  city: 'Medical District',
  state: 'NY',
  zipCode: '10001',
  // For Google Maps embed, get your embed URL from:
  // 1. Go to Google Maps
  // 2. Search for your address
  // 3. Click "Share" → "Embed a map"
  // 4. Copy the iframe src URL
  // Or use this format: `https://www.google.com/maps/embed?pb=!1m18!1m12!...`
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841329766233!2d-73.98815532470586!3d40.74844097138874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  
  // For directions link
  getDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
};