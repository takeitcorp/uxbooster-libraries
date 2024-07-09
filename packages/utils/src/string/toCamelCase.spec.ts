import { describe, it, expect } from '@jest/globals';
import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
  it('should convert space-separated words to camel case', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
    expect(toCamelCase('hello World')).toBe('helloWorld');
  });

  it('should convert dash-separated words to camel case', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('Hello-World')).toBe('helloWorld');
  });

  it('should convert underscore-separated words to camel case', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
    expect(toCamelCase('Hello_World')).toBe('helloWorld');
  });

  it('should handle mixed separators correctly', () => {
    expect(toCamelCase('hello world-test_example')).toBe('helloWorldTestExample');
    expect(toCamelCase('Hello-World_test example')).toBe('helloWorldTestExample');
  });

  it('should handle uppercase input correctly', () => {
    expect(toCamelCase('HELLO WORLD')).toBe('helloWorld');
    expect(toCamelCase('HELLO-WORLD')).toBe('helloWorld');
  });

  it('should handle single word input correctly', () => {
    expect(toCamelCase('hello')).toBe('hello');
    expect(toCamelCase('Hello')).toBe('hello');
    expect(toCamelCase('HELLO')).toBe('hello');
  });

  it('should handle empty string input correctly', () => {
    expect(toCamelCase('')).toBe('');
  });
});
