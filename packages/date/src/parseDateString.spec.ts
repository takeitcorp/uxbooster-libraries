import { describe, it, expect } from '@jest/globals';
import { parseDateString } from './parseDateString';

describe('parseDateString function', () => {
  it('parses a valid date string in YYYY-MM-DD format', () => {
    const date = parseDateString('2024-01-01');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });

  it('parses a valid date string in YYYYMMDD format', () => {
    const date = parseDateString('20240101');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });

  it('throws an error for an invalid date string', () => {
    expect(() => parseDateString('invalid-date')).toThrow(
      'Invalid date format. Expected format: YYYY-MM-DD or YYYYMMDD',
    );
  });

  it('throws an error for an empty string', () => {
    expect(() => parseDateString('')).toThrow(
      'Invalid date format. Expected format: YYYY-MM-DD or YYYYMMDD',
    );
  });
});
