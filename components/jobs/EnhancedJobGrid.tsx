'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { getIconByName } from '@/lib/utils/icons';
import { X } from 'lucide-react';

interface JobItem {
  id: number;
  title: string;
  description: string | string[];
  iconName: string;
  image: string;
}

export function EnhancedJobGrid({ items }: { items: JobItem[] }) {
  const [selected, setSelected] = useState<JobItem | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (item: JobItem) => {
    setSelected(selected?.id === item.id ? null : item);
  };

  const handleMouseEnter = (id: number) => {
    if (!selected) {
      setHovered(id);
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="relative min-h-[600px] p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {items.map((item, index) => {
          const Icon = getIconByName(item.iconName);
          const isFirstOrLast = index === 0 || index === items.length - 1;
          
          return (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => handleClick(item)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "relative rounded-xl cursor-pointer overflow-hidden",
                "transform transition-all duration-500 ease-out",
                isFirstOrLast ? "md:col-span-2" : "col-span-1",
                selected && selected.id !== item.id && "opacity-40 scale-95 blur-sm",
                !selected && hovered !== item.id && hovered !== null && "opacity-40 scale-95 blur-sm"
              )}
              style={{ height: isFirstOrLast ? '400px' : '300px' }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="relative h-full p-6 flex flex-col justify-end text-white"
                initial={false}
                animate={{
                  opacity: hovered === item.id ? 1 : 0,
                  y: hovered === item.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-sm opacity-80">Cliquez pour en savoir plus</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setSelected(null)}
            />
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed top-1/2 left-1/2 w-[90vw] max-w-4xl z-50 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              initial={{ x: '-50%', y: '-40%', opacity: 0 }}
              animate={{ x: '-50%', y: '-50%', opacity: 1 }}
              exit={{ x: '-50%', y: '-40%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="bg-primary text-primary-foreground p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.createElement(getIconByName(selected.iconName), { className: "h-6 w-6" })}
                    </motion.div>
                    <h3 className="text-2xl font-bold">{selected.title}</h3>
                  </div>
                  <motion.div 
                    className="text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {Array.isArray(selected.description) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {selected.description.map((point, index) => (
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
                      <p>{selected.description}</p>
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
    </div>
  );
}