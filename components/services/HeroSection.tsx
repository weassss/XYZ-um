'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos Services
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Des solutions innovantes pour optimiser votre production
        </motion.p>
      </div>
    </section>
  );
}