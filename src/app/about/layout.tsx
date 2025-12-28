import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About George Anastasiou - The Funky Physio',
  description: 'Meet George Anastasiou, a former professional basketball player turned physiotherapist. Learn about his journey from the court to the clinic and his unique approach to physiotherapy.',
  keywords: [
    'George Anastasiou',
    'physiotherapist Barcelona',
    'sports physiotherapy',
    'athlete physiotherapist',
    'professional basketball player',
    'sports injury specialist',
    'Barcelona physiotherapy'
  ],
  openGraph: {
    title: 'About George Anastasiou - The Funky Physio',
    description: 'Former professional basketball player turned physiotherapist. Experience the unique approach combining athletic experience with evidence-based treatment.',
    url: 'https://funkyphysio.com/about',
    type: 'profile',
    images: [
      {
        url: '/basketball/DSC_0079.jpg',
        width: 1200,
        height: 630,
        alt: 'George Anastasiou - The Funky Physio',
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
