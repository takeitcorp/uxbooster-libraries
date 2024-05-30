import { describe, it, expect } from '@jest/globals';
import { isArray } from './isArray';

describe('isArray function', () => {
  it('should return true for an array', () => {
    const arr = [1, 2, 3];
    expect(isArray(arr)).toBe(true);
  });

  it('should return false for undefined', () => {
    expect(isArray(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isArray(null)).toBe(false);
  });

  it('should return false for a non-array object', () => {
    const obj = { key: 'value' };
    expect(isArray(obj)).toBe(false);
  });
});
