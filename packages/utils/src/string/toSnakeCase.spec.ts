import { describe, it, expect } from '@jest/globals';
import { toSnakeCase } from './toSnakeCase';

describe('toSnakeCase', () => {
  it('converts lowercase words separated by space', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
  });

  it('converts mixed case words separated by dash', () => {
    expect(toSnakeCase('Hello-World')).toBe('hello_world');
  });

  it('converts camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  it('converts already snake_case string', () => {
    expect(toSnakeCase('hello_world')).toBe('hello_world');
  });

  it('converts uppercase words separated by space', () => {
    expect(toSnakeCase('HELLO WORLD')).toBe('hello_world');
  });

  it('converts mixed case with multiple separators', () => {
    expect(toSnakeCase('Hello World-Test')).toBe('hello_world_test');
  });

  it('converts string with underscores, dashes and spaces', () => {
    expect(toSnakeCase('Hello_World-Test example')).toBe('hello_world_test_example');
  });

  it('handles empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  it('handles single word', () => {
    expect(toSnakeCase('hello')).toBe('hello');
  });

  it('handles single uppercase word', () => {
    expect(toSnakeCase('HELLO')).toBe('hello');
  });
});
