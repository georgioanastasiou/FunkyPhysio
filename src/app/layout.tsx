import type { Metadata } from 'next';
import { Inter, MuseoModerno } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceWorkerCleanup from '@/components/ServiceWorkerCleanup';

const inter = Inter({ subsets: ['latin'] });
const museoModerno = MuseoModerno({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-museo-moderno',
});

export const metadata: Metadata = {
  title: {
    default: 'Funky Physio - Professional Physiotherapy Services',
    template: '%s | Funky Physio'
  },
  description: 'Professional physiotherapy services by Funky Physio. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.',
  keywords: [
    'physiotherapy',
    'physical therapy',
    'sports injury rehabilitation',
    'post-surgical recovery',
    'chronic pain management',
    'manual therapy',
    'exercise prescription',
    'rehabilitation',
    'physical health',
    'wellness'
  ],
  authors: [{ name: 'Funky Physio' }],
  creator: 'Funky Physio',
  publisher: 'Funky Physio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.funkyphysio.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://funkyphysio.com',
    title: 'Funky Physio - Professional Physiotherapy Services',
    description: 'Professional physiotherapy services by Funky Physio. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.',
    siteName: 'Funky Physio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Funky Physio - Professional Physiotherapy Services',
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Funky Physio Physiotherapy",
              "description": "Professional physiotherapy services by Funky Physio. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.",
              "url": "https://www.funkyphysio.com",
              "telephone": "+1-555-123-4567",
              "email": "info@funkyphysio.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Health Street",
                "addressLocality": "Medical District",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-14:00"
              ],
              "medicalSpecialty": "Physiotherapy",
              "serviceType": [
                "Sports Injury Rehabilitation",
                "Post-Surgical Recovery",
                "Chronic Pain Management",
                "Manual Therapy",
                "Exercise Prescription"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${museoModerno.variable} antialiased`}>
        <ServiceWorkerCleanup />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}