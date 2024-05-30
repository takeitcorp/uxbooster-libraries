import { describe, it, expect } from '@jest/globals';
import { toInt } from './toInt';

describe('toInt function', () => {
  it('should return undefined for undefined', () => {
    expect(toInt(undefined)).toBeUndefined();
  });

  it('should return undefined for null', () => {
    expect(toInt(null)).toBeUndefined();
  });

  it('should return undefined for NaN', () => {
    expect(toInt(NaN)).toBeUndefined();
  });

  it('should return undefined for Infinity', () => {
    expect(toInt(Infinity)).toBeUndefined();
  });

  it('should return undefined for non-numeric string', () => {
    expect(toInt('hello')).toBeUndefined();
  });

  it('should return integer representation of a valid number with decimal part', () => {
    expect(toInt(3.14)).toBe(3);
  });

  it('should return 0 for a numeric string representing 0', () => {
    expect(toInt('0')).toBe(0);
  });

  it('should return integer representation of a valid number with negative sign', () => {
    expect(toInt('-42')).toBe(-42);
  });

  it('should return integer representation of a valid number with positive sign', () => {
    expect(toInt('+42')).toBe(42);
  });

  it('should return integer representation of a valid number with leading and trailing spaces', () => {
    expect(toInt(' 42 ')).toBe(42);
  });

  it('should return integer representation of a valid number with leading zeros', () => {
    expect(toInt('007')).toBe(7);
  });

  it('should return integer representation of a valid number with exponential notation', () => {
    expect(toInt('1e3')).toBe(1000);
  });
});
