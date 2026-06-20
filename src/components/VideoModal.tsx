'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player').then(m => m.default), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#D84795] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface VideoModalProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, title, onClose }: VideoModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-900">
          <p className="text-white font-semibold text-sm truncate pr-4">▶ Preview — {title}</p>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player — v3 uses "src" not "url" */}
        <div className="relative aspect-video w-full">
          <ReactPlayer
            src={videoUrl}
            width="100%"
            height="100%"
            controls
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-gray-900 text-center">
          <p className="text-gray-400 text-xs">
            🎬 This is a sample preview. Purchase the full program for complete access.
          </p>
        </div>
      </div>
    </div>
  );
}
