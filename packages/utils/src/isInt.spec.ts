import { describe, it, expect } from '@jest/globals';
import { isInt } from './isInt';

describe('isInt function', () => {
  it('should return true for an integer number', () => {
    expect(isInt(42)).toBe(true);
  });

  it('should return true for zero', () => {
    expect(isInt(0)).toBe(true);
  });

  it('should return false for a non-integer number', () => {
    expect(isInt(3.14)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isInt(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isInt(null)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isInt(true)).toBe(false);
    expect(isInt(false)).toBe(false);
    expect(isInt('')).toBe(false);
    expect(isInt('test')).toBe(false);
    expect(isInt({})).toBe(false);
    expect(isInt([])).toBe(false);
    expect(isInt(new Date())).toBe(false);
    expect(isInt(() => {})).toBe(false);
  });
});
