'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        rotate: 20,
        scale: 0.85,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        rotate: 0,
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.2 });
    const onMouseEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.2 });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
      style={{
        width: 48,
        height: 48,
        transform: 'translate(-8px, -4px)',
        transformOrigin: '8px 4px',
        mixBlendMode: 'difference',
      }}
    >
      <img src="/mousecursor.svg" alt="" width={48} height={48} style={{ display: 'block' }} />
    </div>
  );
}
