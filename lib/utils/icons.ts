'use client';

import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const getIconByName = (name: string): LucideIcon => {
  const Icon = LucideIcons[name as keyof typeof LucideIcons];
  return Icon || LucideIcons.HelpCircle;
};