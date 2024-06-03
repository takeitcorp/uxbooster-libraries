import { describe, it, expect } from '@jest/globals';
import { convertStringToDate } from './convertStringToDate';

describe('convertStringToDate function', () => {
  it('converts a string to a Date object', () => {
    const date = convertStringToDate('2020-01-01');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2020-01-01T00:00:00.000Z');
  });
});
