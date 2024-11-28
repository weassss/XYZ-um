'use client';

import HeroSection from '@/components/contact/HeroSection';
import ContactSection from '@/components/contact/ContactSection';
import PartnersSection from '@/components/contact/PartnersSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <HeroSection />
      <ContactSection />
      <PartnersSection />
    </div>
  );
}