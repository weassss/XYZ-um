'use client';

import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface ContactSlice {
  contactInfo: {
    phone: string;
    address: string;
    email: {
      sales: string;
      support: string;
    };
  };
  partners: {
    name: string;
    logo: string;
    description: string;
    countries: string[];
    specialties: string[];
  }[];
  partnerColors: string[];
  countryCoordinates: { [key: string]: [number, number] };
  updateContactContent: (content: Partial<ContactSlice>) => void;
}

export const createContactSlice: StateCreator<ContentState, [], [], ContactSlice> = (set) => ({
  contactInfo: {
    phone: '+1 (514) 608-2297',
    address: '145 Bd Saint-Rémi, Saint-Rémi, QC J0L 2L0',
    email: {
      sales: 'sales@umallette.com',
      support: 'support@umallette.com',
    },
  },
  partners: [
    {
      name: 'UM',
      logo: '/placeholder.svg?height=100&width=200&text=UM+Logo',
      description: "Leader mondial en solutions d'usinage de précision",
      countries: [
        'Canada', 'USA', 'Brazil', 'Niger', 'Italy', 'Switzerland',
        'United Kingdom', 'Estonia', 'Latvia', 'Lithuania', 'Belarus',
        'Ukraine', 'Bulgaria', 'Georgia', 'Azerbaijan', 'Iraq',
        'Vietnam', 'Bangladesh', 'Russia'
      ],
      specialties: ['Usinage CNC', 'Prototypage rapide', 'Ingénierie de précision'],
    },
    {
      name: 'RMS',
      logo: '/placeholder.svg?height=100&width=200&text=RMS+Logo',
      description: 'Spécialiste en solutions de maintenance industrielle',
      countries: ['Mexico'],
      specialties: ['Maintenance prédictive', "Réparation d'équipements", 'Optimisation de processus'],
    },
    {
      name: 'COVIREP SA',
      logo: '/placeholder.svg?height=100&width=200&text=COVIREP+SA+Logo',
      description: "Expert en solutions d'automatisation industrielle",
      countries: ['Algeria', 'Tunisia', 'Morocco', 'Jordan'],
      specialties: ['Robotique industrielle', 'Systèmes de contrôle', 'Intégration de systèmes'],
    },
    {
      name: 'BMR',
      logo: '/placeholder.svg?height=100&width=200&text=BMR+Logo',
      description: 'Fournisseur de solutions de mesure et de contrôle de qualité',
      countries: ['Portugal', 'Spain', 'France', 'Belgium'],
      specialties: ['Métrologie', 'Inspection 3D', 'Contrôle qualité'],
    },
    {
      name: 'RÖDERS TEC',
      logo: '/placeholder.svg?height=100&width=200&text=RÖDERS+TEC+Logo',
      description: 'Innovateur en technologies de fraisage de haute précision',
      countries: ['Austria', 'Norway', 'Sweden', 'Finland', 'Poland', 'Germany'],
      specialties: ['Fraisage 5 axes', 'Usinage de moules', 'Micro-usinage'],
    },
    {
      name: 'PAYNATECH',
      logo: '/placeholder.svg?height=100&width=200&text=PAYNATECH+Logo',
      description: "Pionnier en solutions d'usinage électrochimique",
      countries: ['Turkey'],
      specialties: ['Usinage électrochimique', 'Finition de surface', 'Micro-usinage de précision'],
    },
    {
      name: 'PNEUTECH',
      logo: '/placeholder.svg?height=100&width=200&text=PNEUTECH+Logo',
      description: 'Expert en systèmes pneumatiques industriels',
      countries: ['Australia'],
      specialties: ['Systèmes pneumatiques', 'Automatisation pneumatique', 'Efficacité énergétique'],
    },
  ],
  partnerColors: [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8',
    '#F06292',
    '#AED581',
  ],
  countryCoordinates: {
    'Canada': [-106.3468, 56.1304],
    'USA': [-95.7129, 37.0902],
    'Brazil': [-51.9253, -14.2350],
    'Niger': [8.0817, 17.6078],
    'Italy': [12.5674, 41.8719],
    'Switzerland': [8.2275, 46.8182],
    'United Kingdom': [-3.4359, 55.3781],
    'Estonia': [25.0136, 58.5953],
    'Latvia': [24.6032, 56.8796],
    'Lithuania': [23.8813, 55.1694],
    'Belarus': [27.9534, 53.7098],
    'Ukraine': [31.1656, 48.3794],
    'Bulgaria': [25.4858, 42.7339],
    'Georgia': [43.3569, 42.3154],
    'Azerbaijan': [47.5769, 40.1431],
    'Iraq': [43.6793, 33.2232],
    'Vietnam': [108.2772, 14.0583],
    'Bangladesh': [90.3563, 23.6850],
    'Russia': [105.3188, 61.5240],
    'Mexico': [-102.5528, 23.6345],
    'Algeria': [1.6596, 28.0339],
    'Tunisia': [9.5375, 33.8869],
    'Morocco': [-7.0926, 31.7917],
    'Jordan': [36.2384, 30.5852],
    'Portugal': [-8.2245, 39.3999],
    'Spain': [-3.7492, 40.4637],
    'France': [2.2137, 46.2276],
    'Belgium': [4.4699, 50.5039],
    'Austria': [14.5501, 47.5162],
    'Norway': [8.4689, 60.4720],
    'Sweden': [18.6435, 60.1282],
    'Finland': [25.7482, 61.9241],
    'Poland': [19.1451, 51.9194],
    'Germany': [10.4515, 51.1657],
    'Turkey': [35.2433, 38.9637],
    'Australia': [133.7751, -25.2744],
  },
  updateContactContent: (content) => set((state) => ({ ...state, ...content })),
});