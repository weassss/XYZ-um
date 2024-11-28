'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function CTASection() {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8">Prêt à relever de nouveaux défis ?</h2>
        <p className="mb-8 text-lg">
          Nous vous offrons l'opportunité de vivre une expérience enrichissante au sein d'une équipe compétente. Faites-nous parvenir votre CV!
        </p>
        <Button 
          size="lg" 
          asChild 
          className="w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105"
        >
          <Link href="/submit-application">Soumettre une candidature spontanée</Link>
        </Button>
      </div>
    </Section>
  );
}