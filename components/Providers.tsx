'use client';

import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { CartProvider } from '@/lib/CartContext';
import { useContentStore } from '@/lib/store';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hydrate the store after mounting
    useContentStore.persist.rehydrate();
  }, []);

  return (
    <ParallaxProvider>
      <CartProvider>{children}</CartProvider>
    </ParallaxProvider>
  );
}