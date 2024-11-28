'use client';

import { motion } from 'framer-motion';

export function HelpHeader() {
  return (
    <motion.h1 
      className="text-4xl font-bold mb-8 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Centre d'aide
    </motion.h1>
  );
}