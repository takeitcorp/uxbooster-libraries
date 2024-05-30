import { describe, it, expect } from '@jest/globals';
import { isObject } from './isObject';

describe('isObject function', () => {
  describe('should return true for', () => {
    it('an object', () => {
      expect(isObject({})).toBe(true);
    });

    it('an array', () => {
      expect(isObject([])).toBe(true);
    });

    it('a date object', () => {
      expect(isObject(new Date())).toBe(true);
    });

    it('a Map', () => {
      expect(isObject(new Map())).toBe(true);
    });
  });

  describe('should return false for', () => {
    it('a function', () => {
      expect(isObject(() => {})).toBe(false);
    });

    it('undefined', () => {
      expect(isObject(undefined)).toBe(false);
    });

    it('null', () => {
      expect(isObject(null)).toBe(false);
    });

    it('other values', () => {
      expect(isObject(0)).toBe(false);
      expect(isObject(1)).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject(false)).toBe(false);
      expect(isObject('')).toBe(false);
      expect(isObject('test')).toBe(false);
    });
  });
});
