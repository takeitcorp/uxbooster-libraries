import { describe, it, expect } from '@jest/globals';
import { formatToKRW } from './formatToKRW';

describe('formatToKoreanNumber', () => {
  it('should format the given number into korean currency format', () => {
    expect(formatToKRW(13209802)).toBe('1,320만 9,802원');
    expect(
      formatToKRW(13209802, {
        shouldHaveSpaceBeforeWon: true,
      }),
    ).toEqual('1,320만 9,802 원');
    expect(
      formatToKRW(13209802, {
        floorUnit: 10000,
      }),
    ).toEqual('1,320만원');
    expect(
      formatToKRW(13209802, {
        ceilUnit: 10000,
      }),
    ).toEqual('1,321만원');
  });
});
