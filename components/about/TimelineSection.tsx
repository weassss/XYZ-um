'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';

const evenementsChronologiques = [
  {
    title: '1976',
    content: (
      <div>
        <p className="text-muted-foreground">Fondation d'UM Manufacturing</p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=300&text=Fondation+UM"
            alt="Fondation d'UM Manufacturing"
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: '1985',
    content: (
      <div>
        <p className="text-muted-foreground">
          Expansion des opérations pour inclure l'usinage CNC
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=300&text=Expansion+CNC"
            alt="Expansion CNC"
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: '1995',
    content: (
      <div>
        <p className="text-muted-foreground">
          Ouverture du premier bureau international
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=300&text=Bureau+International"
            alt="Premier bureau international"
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: '2005',
    content: (
      <div>
        <p className="text-muted-foreground">
          Lancement d'une gamme de produits innovants
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=300&text=Nouveaux+Produits"
            alt="Nouveaux produits innovants"
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: '2015',
    content: (
      <div>
        <p className="text-muted-foreground">
          Obtention de la certification ISO 9001:2015
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=300&text=Certification+ISO"
            alt="Certification ISO 9001:2015"
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div>
        <p className="text-muted-foreground">
          Célébration de 47 ans d'excellence
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/placeholder.svg?height=200&width=300&text=47+Ans+d'Excellence"
            alt="47 ans d'excellence"
            width={300}
            height={200}
            className="mt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Notre Parcours
        </motion.h2>
        <Timeline data={evenementsChronologiques} />
      </div>
    </section>
  );
}