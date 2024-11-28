'use client';

import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Tab } from './Tab';

interface TabsSectionProps {
  tabs: string[];
  center?: boolean;
  customID?: string;
  selected: string;
  setSelected: (text: string) => void;
}

export default function TabsSection({ 
  tabs, 
  center, 
  customID, 
  selected, 
  setSelected 
}: TabsSectionProps) {
  return (
    <div
      className={cn(
        'mb-8 flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-gray-600',
        center && 'justify-center',
      )}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={`tab-${index}-${tab}`}
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          customID={customID}
        />
      ))}
    </div>
  );
}