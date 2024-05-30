import { describe, it, expect } from '@jest/globals';
import { isString } from './isString';

describe('isString function', () => {
  it('should return true for a string', () => {
    expect(isString('')).toBe(true);
  });

  it('should return true for a non-empty string', () => {
    expect(isString('test')).toBe(true);
    expect(isString('another test')).toBe(true);
    expect(isString('123')).toBe(true);
    expect(isString('true')).toBe(true);
  });

  it('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isString(0)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString(new Map())).toBe(false);
    expect(isString(new Set())).toBe(false);
  });
});
