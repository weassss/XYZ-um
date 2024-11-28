'use client';

import HeroSection from '@/components/jobs/HeroSection';
import BenefitsSection from '@/components/jobs/BenefitsSection';
import CTASection from '@/components/jobs/CTASection';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <HeroSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}