import { describe, it, expect, beforeEach } from 'vitest';
import { useCart } from '../cart';
import { Product } from '../../types';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock as any;

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  slug: 'test-product',
  description: 'A test product',
  priceSatang: 100000,
  image: 'test.jpg',
  stock: 10,
  salesCount: 5,
  rating: 4.5,
  categorySlug: 'test',
  createdAt: '2024-01-01T00:00:00Z',
};

describe('Cart Store', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null);
    localStorageMock.setItem.mockClear();
  });

  it('should add item to cart', () => {
    const { addItem, items } = useCart.getState();
    
    addItem(mockProduct);
    
    const state = useCart.getState();
    expect(state.items).toHaveLength(1);
    expect(state.items[0].productId).toBe('1');
    expect(state.items[0].qty).toBe(1);
  });

  it('should increase quantity when adding existing item', () => {
    const { addItem } = useCart.getState();
    
    addItem(mockProduct);
    addItem(mockProduct);
    
    const state = useCart.getState();
    expect(state.items).toHaveLength(1);
    expect(state.items[0].qty).toBe(2);
  });

  it('should remove item from cart', () => {
    const { addItem, removeItem } = useCart.getState();
    
    addItem(mockProduct);
    removeItem('1');
    
    const state = useCart.getState();
    expect(state.items).toHaveLength(0);
  });

  it('should set quantity correctly', () => {
    const { addItem, setQty } = useCart.getState();
    
    addItem(mockProduct);
    setQty('1', 5);
    
    const state = useCart.getState();
    expect(state.items[0].qty).toBe(5);
  });

  it('should remove item when setting quantity to 0', () => {
    const { addItem, setQty } = useCart.getState();
    
    addItem(mockProduct);
    setQty('1', 0);
    
    const state = useCart.getState();
    expect(state.items).toHaveLength(0);
  });

  it('should calculate subtotal correctly', () => {
    const { addItem, subtotal } = useCart.getState();
    
    addItem(mockProduct, 2);
    
    expect(subtotal()).toBe(200000); // 100000 * 2
  });

  it('should clear cart', () => {
    const { addItem, clear } = useCart.getState();
    
    addItem(mockProduct);
    clear();
    
    const state = useCart.getState();
    expect(state.items).toHaveLength(0);
  });
});