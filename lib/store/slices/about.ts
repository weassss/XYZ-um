import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface AboutSlice {
  teamMembers: {
    nom: string;
    role: string;
    image: string;
    linkedin: string;
    twitter: string;
  }[];
  timelineEvents: {
    title: string;
    content: {
      text: string;
      image: string;
    };
  }[];
  aboutContent: {
    title: string;
    description: string[];
    image: string;
  };
  updateAboutContent: (content: Partial<AboutSlice>) => void;
}

export const createAboutSlice: StateCreator<ContentState, [], [], AboutSlice> = (set) => ({
  teamMembers: [
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
  ],
  timelineEvents: [
    {
      title: '1976',
      content: {
        text: "Fondation d'UM Manufacturing",
        image: '/placeholder.svg?height=200&width=300&text=Fondation+UM',
      },
    },
    {
      title: '1985',
      content: {
        text: "Expansion des opérations pour inclure l'usinage CNC",
        image: '/placeholder.svg?height=200&width=300&text=Expansion+CNC',
      },
    },
    {
      title: '1995',
      content: {
        text: 'Ouverture du premier bureau international',
        image: '/placeholder.svg?height=200&width=300&text=Bureau+International',
      },
    },
    {
      title: '2005',
      content: {
        text: "Lancement d'une gamme de produits innovants",
        image: '/placeholder.svg?height=200&width=300&text=Nouveaux+Produits',
      },
    },
    {
      title: '2015',
      content: {
        text: 'Obtention de la certification ISO 9001:2015',
        image: '/placeholder.svg?height=200&width=300&text=Certification+ISO',
      },
    },
    {
      title: '2023',
      content: {
        text: "Célébration de 47 ans d'excellence",
        image: '/placeholder.svg?height=200&width=300&text=47+Ans+d\'Excellence',
      },
    },
  ],
  aboutContent: {
    title: 'Qui Sommes-Nous',
    description: [
      "UM est un leader innovant dans l'industrie manufacturière, fournissant des solutions de pointe aux entreprises du monde entier.",
      "Notre engagement envers la qualité, l'innovation et la satisfaction client guide tout ce que nous faisons.",
    ],
    image: '/placeholder.svg?height=400&width=600&text=UM+Manufacturing',
  },
  updateAboutContent: (content) => set((state) => ({ ...state, ...content })),
});