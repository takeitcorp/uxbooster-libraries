import { describe, it, expect } from '@jest/globals';
import { isEmpty } from './isEmpty';

describe('isEmpty function', () => {
  it('should return true', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('null')).toBe(true);
    expect(isEmpty('undefined')).toBe(true);
  });

  it('should return false', () => {
    expect(isEmpty('   ')).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ key: 'value' })).toBe(false);
    expect(isEmpty('0')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
    expect(isEmpty('hello')).toBe(false);
  });
});
