import { describe, it, expect } from '@jest/globals';
import { isPhone } from './isPhone';

describe('isPhone', () => {
  it('should return true for valid phone numbers', () => {
    expect(isPhone('02-1234-5678')).toBe(true);
    expect(isPhone('0311234567')).toBe(true);
    expect(isPhone('010-1234-5678')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(isPhone('1234567890')).toBe(false);
    expect(isPhone(null)).toBe(false);
    expect(isPhone(undefined)).toBe(false);
    expect(isPhone('02-123-456')).toBe(false); // invalid length
    expect(isPhone('031-1234-56789')).toBe(false); // invalid length
    expect(isPhone('abc1234567')).toBe(false); // invalid characters
  });
});
