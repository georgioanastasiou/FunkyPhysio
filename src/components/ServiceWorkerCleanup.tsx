'use client';

import { useEffect } from 'react';

export default function ServiceWorkerCleanup() {
  useEffect(() => {
    // Unregister any existing service workers
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Wait for page to be fully loaded
      if (document.readyState === 'complete') {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister().catch(() => {
              // Silently fail if unregistration fails
            });
          });
        });
      } else {
        window.addEventListener('load', () => {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            registrations.forEach((registration) => {
              registration.unregister().catch(() => {
                // Silently fail if unregistration fails
              });
            });
          });
        });
      }
    }
  }, []);

  return null;
}

