'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from './types';

interface FAQListProps {
  searchTerm: string;
  activeTab: string;
  faqs: { [key: string]: FAQ[] };
  filteredFaqs: { [key: string]: FAQ[] };
}

export function FAQList({ searchTerm, activeTab, faqs, filteredFaqs }: FAQListProps) {
  if (searchTerm === '') {
    return (
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqs[activeTab]?.map((faq, index) => (
          <AccordionItem key={`${activeTab}-${index}`} value={`item-${activeTab}-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <>
      {Object.entries(filteredFaqs).map(([category, questions]) => (
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
      ))}
    </>
  );
}