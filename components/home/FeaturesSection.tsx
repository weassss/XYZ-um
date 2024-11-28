'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { useContentStore } from '@/lib/store';

export default function FeaturesSection() {
  const { features } = useContentStore();

  return (
    <Section>
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Pourquoi nous choisir ?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <Image
                  src={`/${feature.vd}.mp4?&text=${feature.title}`}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="mb-4 rounded"
                />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}