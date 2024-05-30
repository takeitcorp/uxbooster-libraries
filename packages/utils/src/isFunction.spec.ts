import { describe, it, expect } from '@jest/globals';
import { isFunction } from './isFunction';

describe('isFunction function', () => {
  it('should return true for a function', () => {
    const func = () => {};
    expect(isFunction(func)).toBe(true);
  });

  it('should return false for undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isFunction(null)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isFunction(0)).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction('test')).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(new Date())).toBe(false);
  });
});
