import ProgramsSection from '@/components/ProgramsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exercise Programs - Professional Physiotherapy Programs',
  description: 'Browse our comprehensive collection of exercise programs designed by professional physiotherapists. From injury rehabilitation to performance enhancement.',
  keywords: [
    'exercise programs',
    'physiotherapy programs',
    'online exercise programs',
    'rehabilitation exercises',
    'home workout programs',
    'physical therapy programs'
  ],
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <ProgramsSection />
    </div>
  );
}


