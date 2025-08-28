import { describe, it, expect } from 'vitest';
import { formatTHB } from '../format';

describe('formatTHB', () => {
  it('should format satang to THB correctly', () => {
    expect(formatTHB(100)).toBe('฿1.00');
    expect(formatTHB(1000)).toBe('฿10.00');
    expect(formatTHB(150000)).toBe('฿1,500.00');
    expect(formatTHB(2990000)).toBe('฿29,900.00');
  });

  it('should handle zero correctly', () => {
    expect(formatTHB(0)).toBe('฿0.00');
  });

  it('should handle large numbers correctly', () => {
    expect(formatTHB(123456789)).toBe('฿1,234,567.89');
  });
});