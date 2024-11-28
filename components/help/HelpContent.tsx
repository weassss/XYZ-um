'use client';

import SearchSection from '@/components/help/search/SearchSection';
import TabsSection from '@/components/help/tabs/TabsSection';
import FAQSection from '@/components/help/FAQSection';
import CTASection from '@/components/help/cta/CTASection';
import { useContentStore } from '@/lib/store';

interface HelpContentProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export function HelpContent({ 
  searchTerm, 
  setSearchTerm, 
  activeTab, 
  setActiveTab 
}: HelpContentProps) {
  const { categories, faqs } = useContentStore();

  return (
    <>
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
    </>
  );
}