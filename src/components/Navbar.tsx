'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavTheme = 'default' | 'light' | 'purple';

// Sections opt into a background theme via data-nav-theme="light" | "purple"
// so the burger button can stay legible against whatever's scrolled behind it.
const BURGER_THEME_CLASSES: Record<NavTheme, string> = {
  default: 'border-white text-white hover:bg-white/10',
  light: 'border-funky-black text-funky-black hover:bg-funky-black/10',
  purple: 'border-[#F2FFAB] text-[#F2FFAB] hover:bg-[#F2FFAB]/10',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bgTheme, setBgTheme] = useState<NavTheme>('default');

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Track which themed section (if any) is currently scrolled behind the fixed
  // burger button, via a thin intersection band roughly where the button sits.
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-nav-theme]');
    if (!targets.length) {
      setBgTheme('default');
      return;
    }

    const active = new Map<Element, NavTheme>();
    const recompute = () => {
      const themes = Array.from(active.values());
      setBgTheme(themes.includes('purple') ? 'purple' : themes.includes('light') ? 'light' : 'default');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const themeName = (entry.target as HTMLElement).dataset.navTheme as NavTheme;
          if (entry.isIntersecting) active.set(entry.target, themeName);
          else active.delete(entry.target);
        });
        recompute();
      },
      { rootMargin: '-90px 0px -85% 0px', threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // The full-screen menu backdrop is dark regardless of scroll position, so
  // the icon should stay white while it's open rather than follow bgTheme.
  const burgerTheme: NavTheme = isOpen ? 'default' : bgTheme;

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Figma node 4641:8 — email/Instagram/WhatsApp row along the bottom of the
  // full-screen menu. WhatsApp uses a downloaded copy of that design's own
  // outline icon (public/whatsapp-outline.svg) since the project's only
  // existing WhatsApp asset is a colored brand badge that wouldn't match
  // these clean white line icons; Mail/Instagram reuse lucide-react, same as
  // Footer.tsx already does.
  const socialLinks: Array<{
    href: string;
    label: string;
    external?: boolean;
    icon?: typeof Mail;
    iconSrc?: string;
  }> = [
    { href: 'mailto:george@funkyphysio.com', label: 'Email', icon: Mail },
    { href: 'https://www.instagram.com/funky_physio/', label: 'Instagram', icon: Instagram, external: true },
    {
      href: `https://wa.me/34675335798?text=${encodeURIComponent("Hi! I'd like to book a physio session at Funky Physio.")}`,
      label: 'WhatsApp',
      iconSrc: '/whatsapp-outline.svg',
      external: true,
    },
  ];

  return (
    <>
      {/* pointer-events-none here because this nav is transparent apart from
          the burger button — without it, its full-width fixed box silently
          swallows clicks on anything else that renders underneath its top
          strip (e.g. the "Back to Blog" link on blog post pages), even
          though nothing is visibly there to click on. The button re-enables
          pointer-events on itself so it stays clickable. */}
      <nav className="fixed top-0 w-full z-50 bg-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4 mt-9">

            {/* Burger button */}
            <div className="relative z-[60] pointer-events-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center w-14 h-14 rounded-[6px] border focus:outline-none transition-colors duration-200 ${BURGER_THEME_CLASSES[burgerTheme]}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Full-screen Menu. overflow-y-auto matters here: the link text is
          large enough (up to 120px) that on shorter viewports (a laptop at
          ~700px tall, say) the list + social row can exceed the screen
          height — without this, "Contact" and the icons row would be
          silently clipped off-screen with no way to reach them. */}
      <div
        className={`fixed inset-0 z-40 bg-[#161118] flex flex-col overflow-y-auto transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col justify-center flex-1 px-8 sm:px-12 lg:px-24" onMouseLeave={() => setHoveredIndex(null)}>
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => setHoveredIndex(i)}
              className="relative w-full flex items-center justify-center z-10"
              style={{ marginTop: i === 0 ? 0 : '-40px' }}
            >
              <span
                className="font-syne text-white font-medium transition-opacity duration-150"
                style={{
                  // 120px (7.5rem) matches Figma exactly at desktop width;
                  // clamp still scales it down on narrow/mobile viewports
                  // so it doesn't overflow the screen sideways there.
                  fontSize: 'clamp(2.5rem, 11vw, 7.5rem)',
                  opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.4,
                }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Email / Instagram / WhatsApp — per Figma node 4641:8 */}
        <div className="px-8 sm:px-12 lg:px-24 pb-6 sm:pb-8 flex flex-wrap items-center justify-center gap-x-[58px] gap-y-3 sm:gap-x-[74px]">
          {socialLinks.map(({ href, label, icon: Icon, iconSrc, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
            >
              {Icon ? (
                <Icon className="w-[36px] h-[36px]" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={iconSrc} alt="" className="w-[36px] h-[36px]" />
              )}
              <span className="font-syne text-[18px] uppercase tracking-[-0.02em]">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
