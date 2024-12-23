import { describe, it, expect } from '@jest/globals';
import { maskPhoneNumber } from './maskPhoneNumber';

describe('maskPhoneNumber', () => {
  it('하이픈으로 구분된 전화번호', () => {
    expect(maskPhoneNumber('010-1234-5678')).toBe('010-****-5678');
    expect(maskPhoneNumber('031-987-6543')).toBe('031-***-6543');
  });

  it('서울 전화번호', () => {
    expect(maskPhoneNumber('02-123-4567')).toBe('02-***-4567');
    expect(maskPhoneNumber('0223456789')).toBe('02****6789');
  });

  it('일반 전화번호', () => {
    expect(maskPhoneNumber('01012345678')).toBe('010****5678');
    expect(maskPhoneNumber('0319876543')).toBe('031***6543');
  });

  it('잘못된 형식의 전화번호', () => {
    expect(maskPhoneNumber('123')).toBe('123'); // 짧은 형식은 그대로 반환
    expect(maskPhoneNumber('abcd')).toBe('abcd'); // 알파벳 포함 형식은 그대로 반환
  });
});
