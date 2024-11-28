'use client';

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre production ?</h2>
        <p className="text-xl mb-8">Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.</p>
        <Button size="lg" variant="secondary">Demander un devis</Button>
      </div>
    </section>
  );
}