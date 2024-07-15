import { describe, it, expect } from '@jest/globals';
import { toRestfulFormat } from './toRestfulFormat';

describe('toRestfulFormat function', () => {
  it('transforms string to RESTful format correctly', () => {
    expect(toRestfulFormat('hello world')).toBe('hello-world');
    expect(toRestfulFormat('Hello-World')).toBe('hello-world');
    expect(toRestfulFormat('hello_world')).toBe('hello-world');
    expect(toRestfulFormat('HELLO WORLD')).toBe('hello-world');
    expect(toRestfulFormat('CamelCaseString')).toBe('camel-case-string');
    expect(toRestfulFormat('multiple__underscores___here')).toBe('multiple-underscores-here');
    expect(toRestfulFormat('dash-in-string')).toBe('dash-in-string');
    expect(toRestfulFormat('')).toBe('');
  });

  it('handles consecutive and leading/trailing separators properly', () => {
    expect(toRestfulFormat('  leading spaces')).toBe('leading-spaces');
    expect(toRestfulFormat('trailing spaces   ')).toBe('trailing-spaces');
    expect(toRestfulFormat('__double__underscores__')).toBe('double-underscores');
    expect(toRestfulFormat('----multiple-dashes----')).toBe('multiple-dashes');
    expect(toRestfulFormat('-start-with-dash')).toBe('start-with-dash');
    expect(toRestfulFormat('end-with-dash-')).toBe('end-with-dash');
  });
});
