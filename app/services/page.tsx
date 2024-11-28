'use client';

import HeroSection from '@/components/services/HeroSection';
import WhyChooseSection from '@/components/services/WhyChooseSection';
import ServicesShowcase from '@/components/services/ServicesShowcase';
import CTASection from '@/components/services/CTASection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseSection />
      <ServicesShowcase />
      <CTASection />
    </div>
  );
}