import { create } from 'zustand';
import { CartItem, Product } from '../types';
import { getItem, setItem } from '../utils/storage';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  setIsOpen: (open: boolean) => void;
}

const CART_STORAGE_KEY = 'sb_cart';

export const useCart = create<CartState>((set, get) => ({
  items: getItem<CartItem[]>(CART_STORAGE_KEY) || [],
  isOpen: false,

  addItem: (product: Product, qty = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.productId === product.id);
      
      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map(item =>
          item.productId === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      } else {
        const newItem: CartItem = {
          productId: product.id,
          name: product.name,
          priceSatang: product.priceSatang,
          qty,
          image: product.image,
        };
        newItems = [...state.items, newItem];
      }
      
      setItem(CART_STORAGE_KEY, newItems);
      return { items: newItems, isOpen: true };
    });
  },

  removeItem: (productId: string) => {
    set((state) => {
      const newItems = state.items.filter(item => item.productId !== productId);
      setItem(CART_STORAGE_KEY, newItems);
      return { items: newItems };
    });
  },

  setQty: (productId: string, qty: number) => {
    if (qty <= 0) {
      get().removeItem(productId);
      return;
    }
    
    set((state) => {
      const newItems = state.items.map(item =>
        item.productId === productId ? { ...item, qty } : item
      );
      setItem(CART_STORAGE_KEY, newItems);
      return { items: newItems };
    });
  },

  clear: () => {
    setItem(CART_STORAGE_KEY, []);
    set({ items: [] });
  },

  subtotal: () => {
    return get().items.reduce((total, item) => total + (item.priceSatang * item.qty), 0);
  },

  setIsOpen: (open: boolean) => {
    set({ isOpen: open });
  },
}));