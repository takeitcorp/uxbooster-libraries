import { describe, it, expect } from '@jest/globals';
import { isBRN } from './isBRN';

describe('isBRN', () => {
  it('should return true for valid business registration numbers', () => {
    expect(isBRN('123-12-31231')).toBe(true);
    expect(isBRN('1231231231')).toBe(true);
    expect(isBRN('220-81-62517')).toBe(true); // 실제 유효한 사업자등록번호 예시
  });

  it('should return false for invalid business registration numbers', () => {
    expect(isBRN('123-45-6789')).toBe(false); // invalid length
    expect(isBRN('abcdefghij')).toBe(false); // invalid characters
    expect(isBRN('123456789')).toBe(false); // invalid length
    expect(isBRN('123-45-678901')).toBe(false); // invalid length
    expect(isBRN('220-81-62518')).toBe(false); // 실제 유효하지 않은 사업자등록번호 예시
    expect(isBRN(null)).toBe(false);
    expect(isBRN(undefined)).toBe(false);
  });
});
