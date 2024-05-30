import { describe, it, expect } from '@jest/globals';
import { not } from './not';

describe('not', () => {
  it('should return the difference between two arrays of numbers', () => {
    expect(not([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  it('should return the difference between two arrays of strings', () => {
    expect(not(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['a']);
  });

  it('should return the first array if the second array is empty', () => {
    expect(not([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the first array is empty', () => {
    expect(not([], [1, 2, 3])).toEqual([]);
  });

  it('should return an empty array if both arrays are empty', () => {
    expect(not([], [])).toEqual([]);
  });

  it('should handle arrays with different types', () => {
    expect(not([1, 'a', true], ['a', false])).toEqual([1, true]);
  });
});
