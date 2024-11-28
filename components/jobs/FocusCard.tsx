'use client';

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { getIconByName } from '@/lib/utils/icons';

type JobCard = {
  id: number;
  title: string;
  description: string | string[];
  iconName: string;
  image: string;
};

const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
  onClick,
}: {
  card: JobCard;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  onClick: () => void;
}) => {
  const Icon = getIconByName(card.iconName);
  
  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={onClick}
      className={cn(
        "rounded-lg relative overflow-hidden h-60 md:h-96 w-full cursor-pointer",
        "transition-all duration-500 ease-out transform",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
      )}
      whileHover={{ scale: 1.02 }}
      layoutId={`card-${card.id}`}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent",
          "flex flex-col justify-end p-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{card.title}</h3>
        </div>
        <p className="text-sm text-white/80">Cliquez pour en savoir plus</p>
      </div>
    </motion.div>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards, onCardClick }: { 
  cards: JobCard[];
  onCardClick: (card: JobCard) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
}