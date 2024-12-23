import { describe, it, expect } from '@jest/globals';
import { isCardNumber } from './isCardNumber';

describe('isCardNumber', () => {
  it('should return true for a valid 16-digit card number with no spaces or hyphens', () => {
    expect(isCardNumber('4111111111111111')).toBe(true); // 비자 카드 예시
  });

  it('should return true for a valid 16-digit card number with spaces or hyphens', () => {
    expect(isCardNumber('4111 1111 1111 1111')).toBe(true);
    expect(isCardNumber('4111-1111-1111-1111')).toBe(true);
  });

  it('should return false for a card number with less than 13 digits', () => {
    expect(isCardNumber('41111')).toBe(false); // 5자리
    expect(isCardNumber('123456789012')).toBe(false); // 12자리
  });

  it('should return false for a card number with more than 19 digits', () => {
    expect(isCardNumber('411111111111111111111')).toBe(false); // 21자리
  });

  it('should return false for a card number containing non-numeric characters', () => {
    expect(isCardNumber('4111-1111-1111-111A')).toBe(false); // 알파벳 포함
    expect(isCardNumber('4111-1111-1111-11*1')).toBe(false); // 특수 문자 포함
  });

  it('should return false for an invalid card number with the correct length but incorrect checksum', () => {
    expect(isCardNumber('4111111111111112')).toBe(false); // Luhn 알고리즘 체크 실패
  });

  it('should return false for null or undefined values', () => {
    expect(isCardNumber(null)).toBe(false);
    expect(isCardNumber(undefined)).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isCardNumber('')).toBe(false);
  });

  it('should return false for a card number with spaces but invalid length', () => {
    expect(isCardNumber('4111 1111 1111')).toBe(false); // 15자리
  });
});
