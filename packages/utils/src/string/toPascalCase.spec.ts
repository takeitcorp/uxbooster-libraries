import { describe, it, expect } from '@jest/globals';
import { toPascalCase } from './toPascalCase';

describe('toPascalCase', () => {
  it('should convert space-separated words to Pascal case', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
    expect(toPascalCase('hello World')).toBe('HelloWorld');
  });

  it('should convert dash-separated words to Pascal case', () => {
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
    expect(toPascalCase('Hello-World')).toBe('HelloWorld');
  });

  it('should convert underscore-separated words to Pascal case', () => {
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
    expect(toPascalCase('Hello_World')).toBe('HelloWorld');
  });

  it('should handle mixed separators correctly', () => {
    expect(toPascalCase('hello world-test_example')).toBe('HelloWorldTestExample');
    expect(toPascalCase('Hello-World_test example')).toBe('HelloWorldTestExample');
  });

  it('should handle uppercase input correctly', () => {
    expect(toPascalCase('HELLO WORLD')).toBe('HelloWorld');
    expect(toPascalCase('HELLO-WORLD')).toBe('HelloWorld');
  });

  it('should handle single word input correctly', () => {
    expect(toPascalCase('hello')).toBe('Hello');
    expect(toPascalCase('Hello')).toBe('Hello');
    expect(toPascalCase('HELLO')).toBe('Hello');
  });

  it('should handle empty string input correctly', () => {
    expect(toPascalCase('')).toBe('');
  });
});
