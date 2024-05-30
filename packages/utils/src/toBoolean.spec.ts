import { describe, it, expect } from '@jest/globals';
import { toBoolean } from './toBoolean';

describe('toBoolean function', () => {
  it('should return true for truthy values', () => {
    expect(toBoolean(true)).toBe(true);
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('1')).toBe(true);
    expect(toBoolean({})).toBe(true);
    expect(toBoolean([])).toBe(true);
    expect(toBoolean(new Date())).toBe(true);
  });

  it('should return false for falsy values', () => {
    expect(toBoolean(false)).toBe(false);
    expect(toBoolean(0)).toBe(false);
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('0')).toBe(false);
    expect(toBoolean(null)).toBe(false);
    expect(toBoolean(undefined)).toBe(false);
    expect(toBoolean(NaN)).toBe(false);
    expect(toBoolean('NaN')).toBe(false);
    expect(toBoolean('')).toBe(false);
  });
});
