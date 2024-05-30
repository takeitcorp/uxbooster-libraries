import { describe, it, expect } from '@jest/globals';
import { format } from './format';

describe('format', () => {
  it('should replace placeholders with corresponding values', () => {
    expect(format('Hello, {0}!', ['John'])).toBe('Hello, John!');
    expect(format('{0} + {0} = {1}', [2, 4])).toBe('2 + 2 = 4');
  });

  it('should not replace placeholders if no corresponding value is provided', () => {
    expect(format('Hello, {0}!', [])).toBe('Hello, {0}!');
    expect(format('{0} + {1} = {2}', [2])).toBe('2 + {1} = {2}');
  });

  it('should handle multiple placeholders', () => {
    expect(format('{0}, {1}, {2}', ['one', 'two', 'three'])).toBe('one, two, three');
    expect(format('{2}, {1}, {0}', ['one', 'two', 'three'])).toBe('three, two, one');
  });

  it('should return the same string if there are no placeholders', () => {
    expect(format('Hello, world!', ['John'])).toBe('Hello, world!');
  });

  it('should handle non-string arguments by converting them to strings', () => {
    expect(format('Value: {0}', [123])).toBe('Value: 123');
    expect(format('Boolean: {0}', [true])).toBe('Boolean: true');
  });

  it('should ignore non-numeric placeholders', () => {
    expect(format('Hello, {name}!', [{ name: 'John' }])).toBe('Hello, {name}!');
  });
});
