import { describe, it, expect } from '@jest/globals';
import { isRRN } from './isRRN';

describe('isRRN', () => {
  it('should return true for valid Korean resident registration numbers', () => {
    expect(isRRN('930101-1234567')).toBe(true);
    expect(isRRN('200304-2345678')).toBe(true);
    expect(isRRN('001231-3456789')).toBe(true);
  });

  it('should return false for invalid Korean resident registration numbers', () => {
    expect(isRRN(null)).toBe(false);
    expect(isRRN(undefined)).toBe(false);
    expect(isRRN('12345')).toBe(false); // invalid length
    expect(isRRN('12345678901234567890')).toBe(false); // invalid length
    expect(isRRN('abcde-fghijklmno')).toBe(false); // invalid characters
  });
});
