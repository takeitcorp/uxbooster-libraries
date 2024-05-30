import { describe, it, expect } from '@jest/globals';
import { isNumber } from './isNumber';

describe('isNumber function', () => {
  it('should return true for a number', () => {
    expect(isNumber(42)).toBe(true);
  });

  it('should return true for zero', () => {
    expect(isNumber(0)).toBe(true);
  });

  it('should return true for a negative number', () => {
    expect(isNumber(-3.14)).toBe(true);
  });

  it('should return false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isNumber(null)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber('test')).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});
