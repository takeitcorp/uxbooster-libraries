import { describe, it, expect } from '@jest/globals';
import { formatDate } from './formatDate';

describe('formatDate function', () => {
  it('formats the date correctly', () => {
    const date = new Date(2020, 0, 1);
    expect(formatDate(date, 'yyyy-MM-dd')).toBe('2020-01-01');
  });

  it('formats the date with default formatStr', () => {
    const date = new Date(2020, 0, 1);
    expect(formatDate(date)).toBe('2020.01.01');
  });
});
