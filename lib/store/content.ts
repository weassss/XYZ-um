import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ContentState } from './types';
import { createHomeSlice } from './slices/home';
import { createAboutSlice } from './slices/about';
import { createServicesSlice } from './slices/services';
import { createHelpSlice } from './slices/help';
import { createContactSlice } from './slices/contact';
import { createJobsSlice } from './slices/jobs';
import { createCatalogueSlice } from './slices/catalogue';
import { createCartSlice } from './slices/cart';
import { contentSchema } from './schemas';

// Version of the store schema
const STORE_VERSION = 1;

const validateStore = (store: ContentState) => {
  try {
    const result = contentSchema.parse(store);
    return { success: true, data: result };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Store validation warning:', error);
    }
    return { success: false, error };
  }
};

export const useContentStore = create<ContentState>()(
  persist(
    (...a) => {
      const store = {
        ...createHomeSlice(...a),
        ...createAboutSlice(...a),
        ...createServicesSlice(...a),
        ...createHelpSlice(...a),
        ...createContactSlice(...a),
        ...createJobsSlice(...a),
        ...createCatalogueSlice(...a),
        ...createCartSlice(...a),
      };

      if (typeof window !== 'undefined') {
        validateStore(store);
      }

      return store;
    },
    {
      name: 'content-storage',
      storage: createJSONStorage(() => localStorage),
      version: STORE_VERSION,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Handle migration from version 0 to 1
          // If there's no state or it's invalid, return a fresh state
          if (!persistedState || typeof persistedState !== 'object') {
            return {
              items: [],
              heroVideos: [],
              stats: [],
              features: [],
              clients: [],
              services: [],
              serviceImages: [],
              whyChooseReasons: [],
              jobBenefits: [],
              categories: [],
              filters: [],
              sortOptions: [],
            };
          }
        }
        return persistedState;
      },
      partialize: (state) => {
        const { 
          updateHomeContent, 
          updateAboutContent, 
          updateServicesContent, 
          updateHelpContent, 
          updateContactContent, 
          updateJobsContent,
          updateCatalogueContent,
          ...rest 
        } = state;
        return rest;
      },
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          validateStore(state);
        }
      },
    }
  )
);