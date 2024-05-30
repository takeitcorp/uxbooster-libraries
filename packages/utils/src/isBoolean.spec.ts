import { describe, it, expect } from '@jest/globals';
import { isBoolean } from './isBoolean';

describe('isBoolean function', () => {
  it('should return true for boolean true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should return true for boolean false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it("should return true for string 'true'", () => {
    expect(isBoolean('true')).toBe(true);
  });

  it("should return true for string 'false'", () => {
    expect(isBoolean('false')).toBe(true);
  });

  it('should return false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean('test')).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
  });
});
