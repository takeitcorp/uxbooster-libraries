import { describe, it, expect } from '@jest/globals';
import { intersection } from './intersection';

describe('intersection', () => {
  it('should return the intersection of two arrays of numbers', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should return the intersection of two arrays of strings', () => {
    expect(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c']);
  });

  it('should return an empty array if there is no intersection', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should return an empty array if the first array is empty', () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
  });

  it('should return an empty array if the second array is empty', () => {
    expect(intersection([1, 2, 3], [])).toEqual([]);
  });

  it('should return an empty array if both arrays are empty', () => {
    expect(intersection([], [])).toEqual([]);
  });

  it('should handle arrays with different types', () => {
    expect(intersection([1, 'a', true], ['a', false, 1])).toEqual([1, 'a']);
  });
});
