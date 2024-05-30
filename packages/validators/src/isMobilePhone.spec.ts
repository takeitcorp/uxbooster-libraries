import { describe, it, expect } from '@jest/globals';
import { isMobilePhone } from './isMobilePhone';

describe('isMobilePhone function', () => {
  it('should return true for a valid mobile phone', () => {
    // Valid mobile numbers
    expect(isMobilePhone('01012345678')).toBe(true);
    expect(isMobilePhone('010-1234-5678')).toBe(true);
    expect(isMobilePhone('010 1234 5678')).toBe(true);
    expect(isMobilePhone('01112345678')).toBe(true);
    expect(isMobilePhone('011-1234-5678')).toBe(true);
    expect(isMobilePhone('011 1234 5678')).toBe(true);
    expect(isMobilePhone('01612345678')).toBe(true);
    expect(isMobilePhone('016-1234-5678')).toBe(true);
    expect(isMobilePhone('016 1234 5678')).toBe(true);
    expect(isMobilePhone('01912345678')).toBe(true);
    expect(isMobilePhone('019-1234-5678')).toBe(true);
    expect(isMobilePhone('019 1234 5678')).toBe(true);
  });

  it('should return false for an invalid mobile phone', () => {
    // Invalid mobile numbers
    expect(isMobilePhone('12345678')).toBe(false); // Missing prefix
    expect(isMobilePhone('010123456789')).toBe(false); // Too long
    expect(isMobilePhone('010-1234-567')).toBe(false); // Invalid format
    expect(isMobilePhone('010 1234 567')).toBe(false); // Invalid format
    expect(isMobilePhone('abc12345678')).toBe(false); // Contains non-numeric characters
    expect(isMobilePhone('0101234a5678')).toBe(false); // Contains non-numeric characters
  });

  it('should return false for null or undefined', () => {
    expect(isMobilePhone(null)).toBe(false);
    expect(isMobilePhone(undefined)).toBe(false);
  });
});
