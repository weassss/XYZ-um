'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getIconByName } from '@/lib/utils/icons';

interface InteractiveGridProps {
  items: {
    title: string;
    description: string | string[];
    iconName: string;
    image: string;
  }[];
}

export function InteractiveGrid({ items }: InteractiveGridProps) {
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [isHovered, setIsHovered] = React.useState<number | null>(null);

  const selectedIcon = React.useMemo(() => {
    if (selectedId === null) return null;
    const IconComponent = getIconByName(items[selectedId].iconName);
    return IconComponent;
  }, [selectedId, items]);

  const handleCardClick = React.useCallback((index: number) => {
    setSelectedId(prev => prev === index ? null : index);
  }, []);

  const handleMouseEnter = React.useCallback((index: number) => {
    setIsHovered(index);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(null);
  }, []);

  return (
    <div className="relative">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => handleCardClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer rounded-xl overflow-hidden transform-gpu transition-all duration-300 ${
              selectedId !== null && selectedId !== i ? 'opacity-40 scale-95' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300"
                style={{
                  transform: isHovered === i ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isHovered === i ? 1 : 0,
                  y: isHovered === i ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm opacity-80">Cliquez pour en savoir plus</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId !== null && selectedIcon && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl z-50 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={items[selectedId].image}
                    alt={items[selectedId].title}
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
                      {React.createElement(selectedIcon, { className: "h-6 w-6" })}
                    </motion.div>
                    <h3 className="text-2xl font-bold">{items[selectedId].title}</h3>
                  </div>
                  <motion.div 
                    className="text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {Array.isArray(items[selectedId].description) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {items[selectedId].description.map((point, index) => (
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
                      <p>{items[selectedId].description}</p>
                    )}
                  </motion.div>
                </div>
                <motion.button
                  onClick={() => setSelectedId(null)}
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