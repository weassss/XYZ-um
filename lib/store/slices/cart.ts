import { StateCreator } from 'zustand';
import { ContentState } from '../types';

export interface CartItem {
  id: number;
  partNum: string;
  description: string;
  quantity: number;
  image?: string;
}

export interface CartSlice {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotal: () => number;
}

export const createCartSlice: StateCreator<ContentState, [], [], CartSlice> = (set, get) => ({
  items: [],
  
  addItem: (item, quantity) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id);
    
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        ),
      };
    }
    
    return {
      items: [...state.items, { ...item, quantity }],
    };
  }),

  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),

  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    ),
  })),

  clearCart: () => set({ items: [] }),

  getItemCount: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotal: () => {
    const state = get();
    return state.items.reduce((total, item) => total + (item.quantity), 0);
  },
});