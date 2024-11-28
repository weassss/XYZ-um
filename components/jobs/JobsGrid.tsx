'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getIconByName } from '@/lib/utils/icons';
import { X } from 'lucide-react';

type JobCard = {
  id: number;
  title: string;
  description: string | string[];
  url: string;
  className: string;
  iconName: string;
};

export function JobsGrid({ cards }: { cards: JobCard[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [lastSelected, setLastSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (cardId: number) => {
    setLastSelected(selected);
    setSelected(cardId === selected ? null : cardId);
  };

  return (
    <div className="w-full min-h-[600px] bg-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto relative">
          {cards.map((card, index) => {
            const Icon = getIconByName(card.iconName);
            
            return (
              <Card
                key={card.id}
                className={cn(
                  "overflow-hidden cursor-pointer transition-all duration-500",
                  card.className,
                  hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
                )}
                onClick={() => handleClick(card.id)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  layout
                  layoutId={`card-${card.id}`}
                  className="relative h-[300px]"
                >
                  <motion.div
                    layoutId={`image-container-${card.id}`}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={card.url}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hovered === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div
                    layoutId={`content-${card.id}`}
                    className="absolute inset-0 p-6 flex flex-col justify-end"
                    initial={false}
                    animate={{
                      opacity: hovered === index ? 1 : 0,
                      y: hovered === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    </div>
                    <p className="text-sm text-white/80">Cliquez pour en savoir plus</p>
                  </motion.div>
                </motion.div>
              </Card>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => handleClick(selected)}
            />
            <motion.div
              layoutId={`card-${selected}`}
              className="fixed top-1/2 left-1/2 w-[90vw] max-w-4xl z-50 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              style={{ x: '-50%', y: '-50%' }}
            >
              <div className="relative">
                <div className="relative aspect-video">
                  <motion.div layoutId={`image-container-${selected}`}>
                    <Image
                      src={cards[selected - 1].url}
                      alt={cards[selected - 1].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <motion.div layoutId={`content-${selected}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="bg-primary text-primary-foreground p-3 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {React.createElement(getIconByName(cards[selected - 1].iconName), { className: "h-6 w-6" })}
                      </motion.div>
                      <h3 className="text-2xl font-bold">{cards[selected - 1].title}</h3>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {Array.isArray(cards[selected - 1].description) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {cards[selected - 1].description.map((point, index) => (
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
                      <p>{cards[selected - 1].description}</p>
                    )}
                  </motion.div>
                </div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(selected);
                  }}
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