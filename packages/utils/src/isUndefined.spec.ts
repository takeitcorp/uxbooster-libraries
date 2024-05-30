import { describe, it, expect } from '@jest/globals';
import { isUndefined } from './isUndefined';

describe('isUndefined function', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false for null', () => {
    expect(isUndefined(null)).toBe(false);
  });

  it('should return false for other values', () => {
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined('test')).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
  });
});
