import { describe, it, expect } from '@jest/globals';
import { isJsonString } from './isJsonString';

describe('isJsonString', () => {
  it('should return false for undefined', () => {
    expect(isJsonString(undefined)).toBe(false);
  });
  it('should return false for null', () => {
    expect(isJsonString(null)).toBe(false);
  });
  it('should return false for non-JSON string', () => {
    expect(isJsonString('not a json')).toBe(false);
  });
  it('should return false for malformed JSON string', () => {
    expect(isJsonString('{ key: "value" }')).toBe(false);
  });
  it('should return true for valid JSON string with object', () => {
    expect(isJsonString('{"key": "value"}')).toBe(true);
  });
  it('should return true for valid JSON string with array', () => {
    expect(isJsonString('["value1", "value2"]')).toBe(true);
  });
  it('should return false for JSON string that is not an object or array', () => {
    expect(isJsonString('"string"')).toBe(false);
    expect(isJsonString('123')).toBe(false);
    expect(isJsonString('true')).toBe(false);
  });
});
