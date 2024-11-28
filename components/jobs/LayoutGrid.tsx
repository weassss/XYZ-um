'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { getIconByName } from '@/lib/utils/icons';

type Card = {
  id: number;
  title: string;
  description: string | string[];
  iconName: string;
  image: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <div key={card.id} className="h-[40vh] md:h-[50vh]">
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-full w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id ? (
              <SelectedCard selected={card} />
            ) : (
              <ImageComponent card={card} />
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ 
          opacity: selected?.id ? 0.6 : 0,
          backdropFilter: selected?.id ? "blur(10px)" : "blur(0px)"
        }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <div className="relative h-full w-full group">
      <motion.div
        layoutId={`image-${card.id}`}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Cliquez pour en savoir plus
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card }) => {
  const Icon = getIconByName(selected.iconName);

  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        layoutId={`image-${selected.id}`}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src={selected.image}
          alt={selected.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative px-8 pb-12 z-[70]"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm p-3 rounded-full"
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">{selected.title}</h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/90"
        >
          {Array.isArray(selected.description) ? (
            <ul className="space-y-2">
              {selected.description.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  {item}
                </motion.li>
              ))}
            </ul>
          ) : (
            <p>{selected.description}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};