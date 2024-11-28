'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContentStore } from '@/lib/store';

interface FAQ {
  question: string;
  answer: string;
}

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
        {searchTerm === '' ? (
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs[activeTab]?.map((faq, index) => (
              <AccordionItem key={`${activeTab}-${index}`} value={`item-${activeTab}-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          Object.entries(filteredFaqs).map(([category, questions]) => (
            <div key={`category-${category}`} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {questions.map((faq, index) => (
                  <AccordionItem key={`${category}-${index}`} value={`item-${category}-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        )}
      </motion.div>
    </AnimatePresence>
  );
}