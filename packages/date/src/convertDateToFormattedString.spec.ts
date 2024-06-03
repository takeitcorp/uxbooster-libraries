import { describe, it, expect } from '@jest/globals';
import { convertDateToFormattedString } from './convertDateToFormattedString';

describe('convertDateToFormattedString function', () => {
  it('formats the Date object correctly', () => {
    const date = new Date(2020, 0, 1);
    const formattedDate = convertDateToFormattedString(date);
    expect(formattedDate).toBe('20200101');
  });

  it('returns empty string for null date', () => {
    const formattedDate = convertDateToFormattedString(null);
    expect(formattedDate).toBe('');
  });
});
