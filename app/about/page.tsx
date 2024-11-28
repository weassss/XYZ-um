'use client';

import HeroSection from '@/components/about/HeroSection';
import TimelineSection from '@/components/about/TimelineSection';
import TeamSection from '@/components/about/TeamSection';
import CTASection from '@/components/about/CTASection';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TimelineSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}