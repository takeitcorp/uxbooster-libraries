import { describe, it, expect } from '@jest/globals';
import { getType } from './getType';

describe('getType', () => {
  it('should return "Array" for arrays', () => {
    expect(getType([])).toBe('Array');
    expect(getType([1, 2, 3])).toBe('Array');
  });

  it('should return "Object" for objects', () => {
    expect(getType({})).toBe('Object');
    expect(getType({ a: 1 })).toBe('Object');
  });

  it('should return "Number" for numbers', () => {
    expect(getType(123)).toBe('Number');
    expect(getType(NaN)).toBe('Number');
  });

  it('should return "String" for strings', () => {
    expect(getType('hello')).toBe('String');
    expect(getType('')).toBe('String');
  });

  it('should return "Boolean" for booleans', () => {
    expect(getType(true)).toBe('Boolean');
    expect(getType(false)).toBe('Boolean');
  });

  it('should return "Null" for null', () => {
    expect(getType(null)).toBe('Null');
  });

  it('should return "Undefined" for undefined', () => {
    expect(getType(undefined)).toBe('Undefined');
  });

  it('should return "Function" for functions', () => {
    expect(getType(() => {})).toBe('Function');
    expect(getType(function () {})).toBe('Function');
  });

  it('should return "RegExp" for regular expressions', () => {
    expect(getType(/abc/)).toBe('RegExp');
    expect(getType(new RegExp('abc'))).toBe('RegExp');
  });

  it('should return "Date" for dates', () => {
    expect(getType(new Date())).toBe('Date');
  });

  it('should return "Symbol" for symbols', () => {
    expect(getType(Symbol())).toBe('Symbol');
  });

  it('should return "Map" for maps', () => {
    expect(getType(new Map())).toBe('Map');
  });

  it('should return "Set" for sets', () => {
    expect(getType(new Set())).toBe('Set');
  });

  it('should return "WeakMap" for weak maps', () => {
    expect(getType(new WeakMap())).toBe('WeakMap');
  });

  it('should return "WeakSet" for weak sets', () => {
    expect(getType(new WeakSet())).toBe('WeakSet');
  });

  it('should return "Promise" for promises', () => {
    expect(getType(Promise.resolve())).toBe('Promise');
  });
});
