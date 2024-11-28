'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  animate = true,
  ...props
}: SectionProps) {
  const content = (
    <section
      className={cn('py-24 px-4', className)}
      {...props}
    >
      <div className={cn('container mx-auto', containerClassName)}>
        {children}
      </div>
    </section>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}