import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface CatalogueSlice {
  categories: {
    id: string;
    name: string;
    description: string;
    icon: string;
  }[];
  filters: {
    id: string;
    name: string;
    options: string[];
  }[];
  sortOptions: {
    id: string;
    name: string;
    value: string;
  }[];
  updateCatalogueContent: (content: Partial<CatalogueSlice>) => void;
}

export const createCatalogueSlice: StateCreator<ContentState, [], [], CatalogueSlice> = (set) => ({
  categories: [
    {
      id: 'pet',
      name: 'PET',
      description: 'Pièces de rechange pour machines PET',
      icon: 'Package',
    },
    {
      id: 'thermoforming',
      name: 'Thermoformage',
      description: 'Pièces pour machines de thermoformage',
      icon: 'Box',
    },
  ],
  filters: [
    {
      id: 'availability',
      name: 'Disponibilité',
      options: ['En stock', 'Sur commande'],
    },
    {
      id: 'type',
      name: 'Type',
      options: ['Pièces de rechange', 'Consommables', 'Outillage'],
    },
  ],
  sortOptions: [
    {
      id: 'partNum',
      name: 'Référence',
      value: 'PartNum',
    },
    {
      id: 'description',
      name: 'Description',
      value: 'PartDescription',
    },
  ],
  updateCatalogueContent: (content) => set((state) => ({ ...state, ...content })),
});