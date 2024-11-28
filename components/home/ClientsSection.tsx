'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { InfiniteSlider } from '@/components/ui/infiniteslider';
import { useContentStore } from '@/lib/store';

export default function ClientsSection() {
  const { clients } = useContentStore();

  return (
    <Section className="bg-gray-50">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos Clients
      </motion.h2>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <InfiniteSlider
          durationOnHover={120}
          gap={24}
          duration={50}
          className="py-4"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="h-[60px] w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </InfiniteSlider>
      </div>
    </Section>
  );
}