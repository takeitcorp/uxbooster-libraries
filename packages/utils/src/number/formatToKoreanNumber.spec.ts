import { describe, it, expect } from '@jest/globals';
import { formatToKoreanNumber } from './formatToKoreanNumber';

describe('formatToKoreanNumber', () => {
  it('should convert given number to korean expression', () => {
    expect(formatToKoreanNumber(13209802)).toBe('1,320만 9,802');
    expect(formatToKoreanNumber(200000)).toBe('20만');
    expect(formatToKoreanNumber(100000000)).toBe('1억');
    expect(formatToKoreanNumber(0)).toBe('0');
    expect(
      formatToKoreanNumber(12000, {
        formatAllDigits: true,
      }),
    ).toBe('만 2천');
    expect(
      formatToKoreanNumber(840000, {
        floorUnit: 0,
      }),
    ).toBe('84만');
  });
});
