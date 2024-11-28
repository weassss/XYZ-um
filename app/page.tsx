'use client';

import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import ClientsSection from '@/components/home/ClientsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
}