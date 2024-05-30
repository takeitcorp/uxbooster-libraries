import { describe, it, expect } from '@jest/globals';
import { isEmail } from './isEmail';

describe('isEmail function', () => {
  it('should return true for a valid email address', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('test.user@example.com')).toBe(true);
    expect(isEmail('test-user@example.co.kr')).toBe(true);
  });

  it('should return false for an invalid email address', () => {
    expect(isEmail('test')).toBe(false);
    expect(isEmail('test@')).toBe(false);
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('test@example.')).toBe(false);
    expect(isEmail('test@example.c')).toBe(false);
    expect(isEmail('test@example.com ')).toBe(false);
    expect(isEmail(' test@example.com')).toBe(false);
    expect(isEmail('test @example.com')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isEmail('')).toBe(false);
  });

  it('should return false for null', () => {
    expect(isEmail(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isEmail(undefined)).toBe(false);
  });
});
