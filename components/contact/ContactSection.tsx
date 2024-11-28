'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { useContentStore } from '@/lib/store';
import { useState } from 'react';

export default function ContactSection() {
  const { contactInfo } = useContentStore();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Nos Coordonnées</h2>
          <Card className="mb-6">
            <CardContent className="p-6 flex items-center">
              <Phone className="mr-4" />
              <p>{contactInfo.phone}</p>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardContent className="p-6 flex items-center">
              <MapPin className="mr-4" />
              <p>{contactInfo.address}</p>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardContent className="p-6 flex items-center">
              <Mail className="mr-4" />
              <div>
                <p>{contactInfo.email.sales}</p>
                <p>{contactInfo.email.support}</p>
              </div>
            </CardContent>
          </Card>
          <Image
            src="/placeholder.svg?height=300&width=500&text=UM+logo"
            alt="UM logo"
            width={300}
            height={150}
            className="mt-8"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Formulaire de Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" size="lg">Envoyer</Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}