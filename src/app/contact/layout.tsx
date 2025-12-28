import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Book Appointment - Funky Physio',
  description: 'Book your physiotherapy appointment with George Anastasiou. Schedule a consultation for sports injury, pain relief, or rehabilitation. Available at studio, online, or at your location.',
  keywords: [
    'book physiotherapy appointment',
    'physiotherapy consultation',
    'schedule physiotherapy',
    'contact physiotherapist Barcelona',
    'book sports injury treatment',
    'online physiotherapy',
    'home visit physiotherapy'
  ],
  openGraph: {
    title: 'Contact & Book Appointment - Funky Physio',
    description: 'Schedule your personalized physiotherapy consultation. Choose between in-studio, online, or home visit sessions.',
    url: 'https://funkyphysio.com/contact',
    type: 'website',
    images: [
      {
        url: '/contact-image.png',
        width: 1200,
        height: 630,
        alt: 'Book Your Physiotherapy Appointment',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
