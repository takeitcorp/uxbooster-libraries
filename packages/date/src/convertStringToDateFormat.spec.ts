import { describe, it, expect } from '@jest/globals';
import { convertStringToDateFormat } from './convertStringToDateFormat';

describe('convertStringToDateFormat function', () => {
  it('formats the date string correctly', () => {
    const formattedDate = convertStringToDateFormat('2020-01-01', 'yyyy-MM-dd');
    expect(formattedDate).toBe('2020-01-01');
  });

  it('formats the Date object correctly', () => {
    const date = new Date(2020, 0, 1);
    const formattedDate = convertStringToDateFormat(date, 'yyyy-MM-dd');
    expect(formattedDate).toBe('2020-01-01');
  });

  it('returns empty string for null date', () => {
    const formattedDate = convertStringToDateFormat(null);
    expect(formattedDate).toBe('');
  });
});
