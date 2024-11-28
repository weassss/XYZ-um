'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <motion.div 
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Équipe</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Nous sommes toujours à la recherche de talents pour nous aider à
          façonner l'avenir de l'industrie manufacturière.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6 hover:shadow-lg transition-all duration-300"
          >
            Voir les Postes Ouverts
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}