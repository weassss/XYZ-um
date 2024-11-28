'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { useContentStore } from '@/lib/store';
import { getIconByName } from '@/lib/utils/icons';

export default function BenefitsSection() {
  const { jobBenefits } = useContentStore();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Section>
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        POURQUOI TRAVAILLER CHEZ UM ?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto relative">
        {jobBenefits.map((benefit, index) => {
          const Icon = getIconByName(benefit.iconName);
          const isFirstOrLast = index === 0 || index === jobBenefits.length - 1;
          
          return (
            <motion.div
              key={benefit.title}
              layoutId={`card-${index}`}
              onClick={() => setSelected(index)}
              className={`relative rounded-xl cursor-pointer overflow-hidden ${
                isFirstOrLast ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
              } ${
                selected !== null && selected !== index ? "opacity-40 scale-95 blur-sm" : ""
              }`}
              style={{ height: isFirstOrLast ? '400px' : '300px' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-sm opacity-80">Cliquez pour en savoir plus</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setSelected(null)}
            />
            <motion.div
              layoutId={`card-${selected}`}
              className="fixed top-1/2 left-1/2 w-[90vw] max-w-4xl z-50 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              style={{ x: '-50%', y: '-50%' }}
            >
              <div className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={jobBenefits[selected].image}
                    alt={jobBenefits[selected].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="bg-primary text-primary-foreground p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.createElement(getIconByName(jobBenefits[selected].iconName), { className: "h-6 w-6" })}
                    </motion.div>
                    <h3 className="text-2xl font-bold">{jobBenefits[selected].title}</h3>
                  </div>
                  <motion.div 
                    className="text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {Array.isArray(jobBenefits[selected].description) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {jobBenefits[selected].description.map((point, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p>{jobBenefits[selected].description}</p>
                    )}
                  </motion.div>
                </div>
                <motion.button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}