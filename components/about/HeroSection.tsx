'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À Propos d'UM
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-semibold mb-6">Qui Sommes-Nous</h2>
            <p className="text-lg text-muted-foreground">
              UM est un leader innovant dans l'industrie manufacturière,
              fournissant des solutions de pointe aux entreprises du monde
              entier. Avec plus de quatre décennies d'expérience, nous nous
              sommes imposés comme un partenaire de confiance pour les
              entreprises cherchant à optimiser leurs processus de
              fabrication.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre engagement envers la qualité, l'innovation et la
              satisfaction client guide tout ce que nous faisons. Des machines
              de pointe aux services de conseil expert, nous sommes dédiés à
              aider nos clients à atteindre des niveaux sans précédent
              d'efficacité et de productivité.
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600&text=UM+Manufacturing"
              alt="Usine UM Manufacturing"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}