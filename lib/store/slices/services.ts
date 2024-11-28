import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface ServicesSlice {
  services: {
    name: string;
    description: string;
    iconName: string;
    details: {
      title: string;
      points: string[];
    }[];
  }[];
  serviceImages: {
    imageNumber: number;
    imageSources: string[];
  }[];
  whyChooseReasons: {
    iconName: string;
    title: string;
    description: string;
  }[];
  updateServicesContent: (content: Partial<ServicesSlice>) => void;
}

export const createServicesSlice: StateCreator<ContentState, [], [], ServicesSlice> = (set) => ({
  services: [
    {
      name: "Services d'Ingénierie",
      description: 'De la conception à la fabrication, nous vous accompagnons à chaque étape.',
      iconName: 'Cog',
      details: [
        {
          title: 'Étape 1',
          points: [
            'Prise de contact',
            'Analyse de vos besoins (préconception)',
            'Suggestions pour améliorer le produit',
          ],
        },
        {
          title: 'Étape 2',
          points: ['Conception (dessin 3D)', 'Validation par vous & UM'],
        },
        {
          title: 'Étape 3',
          points: [
            'Fabrication des unités désirées (usinage, assemblage & test fonctionnel)',
            'Si nécessaire, confection de documentation (manuel de maintenance)',
          ],
        },
      ],
    },
    {
      name: 'Services de Scan 3D',
      description: 'Numérisation précise de vos équipements et pièces, où que vous soyez.',
      iconName: 'Scan',
      details: [
        {
          title: 'Caractéristiques',
          points: [
            'Acquiers des mesures de composantes physiques',
            "Capacités d'ingénierie inversée de haute précision",
            '25 000 mesures par seconde',
            'Résolution: 0.0020" (50 microns)',
            'Précision: 0.0015" (40 microns)',
          ],
        },
      ],
    },
    {
      name: "Services d'Impression 3D",
      description: 'Conception et impression de vos idées, avec ou sans fichier CAD.',
      iconName: 'Printer',
      details: [
        {
          title: 'Avantages',
          points: [
            'Processus de prototypage rapide',
            'Vérification de la conception',
            'Test de validation',
          ],
        },
        {
          title: 'Spécifications',
          points: [
            'Capacité: 9" x 9" x 8" (230 x 225 x 205 mm)',
            'Précision: 0.0008" (20 microns)',
          ],
        },
      ],
    },
  ],
  serviceImages: [
    {
      imageNumber: 1,
      imageSources: [
        '/media/blob.png?height=600&width=800&text=Services+d\'Ingénierie',
        '/media/blob.png?height=600&width=800&text=Services+d\'Ingénierie+1.2',
        '/media/blob.png?height=600&width=800&text=Services+d\'Ingénierie+1.3',
      ],
    },
    {
      imageNumber: 2,
      imageSources: ['/placeholder.svg?height=600&width=800&text=Services+de+Scan+3D'],
    },
    {
      imageNumber: 3,
      imageSources: ['/placeholder.svg?height=600&width=800&text=Services+d\'Impression+3D'],
    },
  ],
  whyChooseReasons: [
    {
      iconName: 'Cog',
      title: 'Expertise',
      description: "Plus de 47 ans d'expérience dans l'industrie manufacturière",
    },
    {
      iconName: 'Scan',
      title: 'Innovation',
      description: 'Utilisation des dernières technologies pour des solutions de pointe',
    },
    {
      iconName: 'Printer',
      title: 'Rapidité',
      description: 'Délais de livraison optimisés pour répondre à vos besoins urgents',
    },
  ],
  updateServicesContent: (content) => set((state) => ({ ...state, ...content })),
});