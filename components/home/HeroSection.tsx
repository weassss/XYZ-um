'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useContentStore } from '@/lib/store';

export default function HeroSection() {
  const { heroVideos } = useContentStore();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [heroVideos.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        src={heroVideos[currentVideoIndex]}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Solutions de Fabrication Innovantes
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transformez votre production avec notre expertise de pointe
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/catalogue">Découvrir nos produits</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}