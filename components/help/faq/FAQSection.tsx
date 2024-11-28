'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FAQList } from './FAQList';
import { FAQ } from './types';

interface FAQSectionProps {
  activeTab: string;
  searchTerm: string;
  faqs: { [key: string]: FAQ[] };
}

export default function FAQSection({ activeTab, searchTerm, faqs }: FAQSectionProps) {
  const filteredFaqs = Object.entries(faqs).reduce((acc, [category, questions]) => {
    const filteredQuestions = questions.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredQuestions.length > 0) {
      acc[category] = filteredQuestions;
    }
    return acc;
  }, {} as { [key: string]: FAQ[] });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <FAQList 
          searchTerm={searchTerm}
          activeTab={activeTab}
          faqs={faqs}
          filteredFaqs={filteredFaqs}
        />
      </motion.div>
    </AnimatePresence>
  );
}