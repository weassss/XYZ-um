'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="mt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Besoin de plus d'aide ?</h2>
        <p className="mb-4">Si vous n'avez pas trouvé la réponse que vous cherchiez, notre équipe de support est là pour vous aider.</p>
        <Button asChild>
          <Link href="/contact">Contacter le support</Link>
        </Button>
      </motion.div>
    </div>
  );
}