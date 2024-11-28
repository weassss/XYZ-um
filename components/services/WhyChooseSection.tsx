'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useContentStore } from '@/lib/store';
import { getIconByName } from '@/lib/utils/icons';

export default function WhyChooseSection() {
  const { whyChooseReasons } = useContentStore();

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi Choisir Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseReasons.map((reason, index) => {
            const Icon = getIconByName(reason.iconName);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Icon className="h-8 w-8 mb-4" />
                    <CardTitle className="mb-2">{reason.title}</CardTitle>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}