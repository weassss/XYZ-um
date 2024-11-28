'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';

export default function HeroSection() {
  return (
    <Section className="relative h-[50vh] overflow-hidden" animate={false}>
      <Image
        src="/placeholder.svg?height=1080&width=1920&text=Contact+Us"
        alt="Contact Us"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nous Joindre
        </motion.h1>
      </div>
    </Section>
  );
}