import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'George Anastasiou - Professional Physiotherapy Services',
    template: '%s | George Anastasiou'
  },
  description: 'Professional physiotherapy services by George Anastasiou. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.',
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
  authors: [{ name: 'George Anastasiou' }],
  creator: 'George Anastasiou',
  publisher: 'George Anastasiou',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://georgeanastasiou.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://georgeanastasiou.com',
    title: 'George Anastasiou - Professional Physiotherapy Services',
    description: 'Professional physiotherapy services by George Anastasiou. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.',
    siteName: 'George Anastasiou',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'George Anastasiou - Professional Physiotherapy Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Anastasiou - Professional Physiotherapy Services',
    description: 'Professional physiotherapy services by George Anastasiou. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.',
    images: ['/og-image.jpg'],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "George Anastasiou Physiotherapy",
              "description": "Professional physiotherapy services by George Anastasiou. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.",
              "url": "https://georgeanastasiou.com",
              "telephone": "+1-555-123-4567",
              "email": "info@georgeanastasiou.com",
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
      <body className={`${inter.className} antialiased`}>
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