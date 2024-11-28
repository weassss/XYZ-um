'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const equipeDirection = [
  {
    nom: 'Arnaud Vital',
    role: 'President & CEO',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQG7B1AFycxf3Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1575990827764?e=1735171200&v=beta&t=cUBbmcm-9vwOglpLqzgSWcjkj6KBpYlrHbkXYYF8AQ8',
    linkedin: 'https://www.linkedin.com/in/arnaud-vital-6a0b1a1a/',
    twitter: '#',
  },
  {
    nom: 'Robert Saba',
    role: 'Vice-President des ventes & Représentant commercial',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQGsmAzlGjU9TQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1570641722963?e=1735171200&v=beta&t=6ppIsGMksJ6l7gn_FSx4p0km-gylqOt7eopD_rHMoJ4',
    linkedin: 'https://www.linkedin.com/in/robert-saba-2b0b2b2b/',
    twitter: '#',
  },
  {
    nom: 'Raoul Baroudi',
    role: 'Directeur associé des ventes',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFfsf3dQybwQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677870462474?e=1735171200&v=beta&t=mxYDVywPpONUsh4UTum_OOwpE2X3otsuFn_Hg-0LHvk',
    linkedin: 'https://www.linkedin.com/in/raoul-baroudi-3b0b3b3b/',
    twitter: '#',
  },
  {
    nom: 'Personne1',
    role: 'Directrice Financière',
    image: '/placeholder.svg?height=300&width=300&text=Sophie',
    linkedin: '#',
    twitter: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Notre Équipe de Direction
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipeDirection.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.nom}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-6 border-4 border-primary hover:border-primary/80 transition-colors duration-300"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2">{leader.nom}</h3>
                  <p className="text-muted-foreground mb-4">{leader.role}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 border-none shadow-none"
                        asChild
                      >
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 border-none shadow-none"
                        asChild
                      >
                        <a href={leader.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}