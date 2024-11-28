'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { useContentStore } from '@/lib/store';

export default function StatsSection() {
  const { stats } = useContentStore();

  return (
    <Section className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}