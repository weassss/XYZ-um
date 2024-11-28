import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface JobsSlice {
  jobBenefits: {
    title: string;
    description: string | string[];
    iconName: string;
    image: string;
  }[];
  updateJobsContent: (content: Partial<JobsSlice>) => void;
}

export const createJobsSlice: StateCreator<ContentState, [], [], JobsSlice> = (set) => ({
  jobBenefits: [
    {
      title: "L'ÉQUIPE",
      description: "Notre entreprise se démarque par la synergie des compétences de l'équipe d'ingénierie, de la gestion de l'équipe de bureaux et de la polyvalence du département de fabrication.",
      iconName: "Users",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LRG_DSC02786_JPEG-apXXkKtzTYzZSd4rYaW3lsWe4AZL15.jpeg",
    },
    {
      title: "LES AVANTAGES SOCIAUX",
      description: [
        "Paie hebdomadaire",
        "Régime d'assurance collective",
        "Conciliation famille/travail",
        "Formations internes et externes",
      ],
      iconName: "Heart",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_189ef368054b491180a7ee211674f472~mv2-7SiyWEI3rqUFtcJdgQbYW4FUtYFfrm.jpg",
    },
    {
      title: "L'ENVIRONNEMENT DE TRAVAIL",
      description: [
        "Collations & breuvages à petits prix",
        "Tables à pique-nique",
        "Salle privée pour les réunions",
        "Et beaucoup plus!",
      ],
      iconName: "Coffee",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_d3c3c5ad04e940cf8cdd10866c278256~mv2-OJvWwc5HeRo98j5pRhnnJDTJB1LO9K.jpg",
    },
    {
      title: "LE CLUB SOCIAL",
      description: [
        "Bibliothèque commune",
        "Dîners",
        "Camion de cuisine de rue",
        "BBQ",
      ],
      iconName: "Truck",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5951_2368357cb633476898b26de667044222~mv2-7yCKK2q3rOhiUfRVTYXbiZYoN87KvU.jpg",
    },
  ],
  updateJobsContent: (content) => set((state) => ({ ...state, ...content })),
});