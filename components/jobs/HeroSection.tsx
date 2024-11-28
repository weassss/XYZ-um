'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';

export default function HeroSection() {
  return (
    <Section className="bg-primary text-primary-foreground py-24">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Carrières chez UM
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Rejoignez notre équipe et faites partie de notre succès. Découvrez les opportunités qui vous attendent.
        </motion.p>
      </div>
    </Section>
  );
}