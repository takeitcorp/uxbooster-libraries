import { describe, it, expect } from '@jest/globals';
import { parseDateString } from './parseDateString';

describe('parseDateString function', () => {
  it('parses a valid date string correctly', () => {
    const dateString = '2022-05-30T12:00:00.000Z';
    const date = parseDateString(dateString);
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe(dateString);
  });

  it('throws an error for an invalid date string', () => {
    expect(() => {
      parseDateString('invalid date');
    }).toThrow('Invalid date format');
  });
});
