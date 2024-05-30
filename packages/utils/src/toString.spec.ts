import { describe, it, expect } from '@jest/globals';
import { toString } from './toString';

describe('toString function', () => {
  it('should return string representation of a number', () => {
    expect(toString(42)).toBe('42');
  });

  it('should return string representation of a boolean', () => {
    expect(toString(true)).toBe('true');
  });

  it('should return string representation of a string', () => {
    expect(toString('test')).toBe('test');
  });

  it('should return string representation of an object with toString method', () => {
    const obj = {
      toString: () => 'custom string',
    };
    expect(toString(obj)).toBe('custom string');
  });

  it('should return string representation of an object without toString method', () => {
    const obj = { key: 'value' };
    expect(toString(obj)).toBe('[object Object]');
  });

  it('should return empty string for null', () => {
    expect(toString(null)).toBe('');
  });
});
