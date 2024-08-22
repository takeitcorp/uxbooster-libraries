import { describe, it, expect, jest } from '@jest/globals';
import { parseJson } from './parseJson';

describe('parseJson', () => {
  it('should return null when the input is an empty string', () => {
    expect(parseJson('')).toBeNull();
  });
  it('should return the correct object when a valid JSON string is provided', () => {
    const jsonString = '{"name": "Take", "age": 3}';
    const expectedObject = { name: 'Take', age: 3 };
    expect(parseJson(jsonString)).toEqual(expectedObject);
  });
  it('should return null and log an error when an invalid JSON string is provided', () => {
    const invalidJsonString = '{name: "Take", age: 3}';
    console.error = jest.fn(); // Mock console.error

    expect(parseJson(invalidJsonString)).toBeNull();
    expect(console.error).toHaveBeenCalledWith('JSON parsing error:', expect.any(SyntaxError));
  });
  it('should return null and log an error when the input is not a string', () => {
    console.error = jest.fn(); // Mock console.error

    // Test with a number input
    expect(parseJson(123 as any)).toBeNull();
    expect(console.error).toHaveBeenCalledWith('Input value is not a string.');

    // Test with an object input
    expect(parseJson({} as any)).toBeNull();
    expect(console.error).toHaveBeenCalledWith('Input value is not a string.');
  });
});
