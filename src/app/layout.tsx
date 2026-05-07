import type { Metadata } from 'next';
import { Inter, MuseoModerno } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceWorkerCleanup from '@/components/ServiceWorkerCleanup';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });
const museoModerno = MuseoModerno({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-museo-moderno',
});

export const metadata: Metadata = {
  title: {
    default: 'Funky Physio - Physiotherapist in Barcelona | Fisioterapeuta Barcelona',
    template: '%s | Funky Physio'
  },
  description: 'Expert physiotherapy in Barcelona for sports injuries, chronic pain, and post-surgical recovery. Fisioterapeuta en Barcelona — personalized treatment plans to get you moving pain-free.',
  keywords: [
    'physiotherapy Barcelona',
    'fisioterapeuta Barcelona',
    'fisioterapia Barcelona',
    'fisioterapia deportiva Barcelona',
    'sports physio Barcelona',
    'physiotherapist Barcelona',
    'masaje deportivo Barcelona',
    'rehabilitacion Barcelona',
    'sports injury rehabilitation',
    'post-surgical recovery',
    'chronic pain management',
    'manual therapy',
    'Funky Physio',
    'George Anastasiou physiotherapist',
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://funkyphysio.com',
    title: 'Funky Physio - Professional Physiotherapy Services',
    description: 'Expert physiotherapy in Barcelona for sports injuries, chronic pain, and post-surgical recovery. Fisioterapeuta en Barcelona — personalized treatment plans to get you moving pain-free.',
    siteName: 'Funky Physio',
    images: [
      {
        url: '/logo1.png',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Funky Physio Physiotherapy",
              "description": "Professional physiotherapy services by Funky Physio. Expert care for sports injury rehabilitation, post-surgical recovery, chronic pain management, and manual therapy.",
              "url": "https://www.funkyphysio.com",
              "telephone": "+34675335798",
              "email": "george@funkyphysio.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barcelona",
                "addressRegion": "Catalonia",
                "addressCountry": "ES"
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
              ],
              "logo": "https://www.funkyphysio.com/logo1.png"
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${museoModerno.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4VVBW0BEVL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4VVBW0BEVL');
          `}
        </Script>

        <ServiceWorkerCleanup />
        <SmoothScroll />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton phone="34675335798" bgStyle="gradient" />
        <SpeedInsights />
      </body>
    </html>
  );
}