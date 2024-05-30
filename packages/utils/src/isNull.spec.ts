import { describe, it, expect } from '@jest/globals';
import { isNull } from './isNull';

describe('isNull function', () => {
  it('should return true for undefined', () => {
    expect(isNull(undefined)).toBe(true);
  });

  it('should return true for null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false for other values', () => {
    expect(isNull(0)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull('test')).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(() => {})).toBe(false);
  });
});
