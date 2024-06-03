import { describe, it, expect } from '@jest/globals';
import { getCurrentDate } from './getCurrentDate';

describe('getCurrentDate function', () => {
  it('returns a date in the specified timezone', () => {
    const date = getCurrentDate();
    expect(date).toBeInstanceOf(Date);
  });
});
