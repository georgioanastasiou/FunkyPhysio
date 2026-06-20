'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    document.documentElement.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.12, ease: 'power2.out' });
    };

    const onMouseDown = () => gsap.to(dot, { scale: 0.6, duration: 0.1 });
    const onMouseUp = () => gsap.to(dot, { scale: 1, duration: 0.15 });
    const onMouseLeave = () => gsap.to(dot, { opacity: 0, duration: 0.2 });
    const onMouseEnter = () => gsap.to(dot, { opacity: 1, duration: 0.2 });
    const onLinkEnter = () => gsap.to(dot, { scale: 2.5, duration: 0.2 });
    const onLinkLeave = () => gsap.to(dot, { scale: 1, duration: 0.2 });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    const hoverables = document.querySelectorAll('a, button, [role="button"]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onLinkEnter);
      el.addEventListener('mouseleave', onLinkLeave);
    });

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onLinkEnter);
        el.removeEventListener('mouseleave', onLinkLeave);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#D84795',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
