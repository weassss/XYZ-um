'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchSection from '@/components/help/search/SearchSection';
import TabsSection from '@/components/help/tabs/TabsSection';
import FAQSection from '@/components/help/FAQSection';
import CTASection from '@/components/help/cta/CTASection';
import { useContentStore } from '@/lib/store';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState("Informations générales");
  const { categories, faqs } = useContentStore();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-16 px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Centre d'aide
        </motion.h1>

        <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TabsSection 
          tabs={categories} 
          center 
          customID="help-page" 
          selected={activeTab}
          setSelected={setActiveTab}
        />
        <FAQSection 
          activeTab={activeTab}
          searchTerm={searchTerm}
          faqs={faqs}
        />
        <CTASection />
      </div>
    </div>
  );
}