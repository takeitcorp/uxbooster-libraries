import { describe, it, expect } from '@jest/globals';
import { isCRN } from './isCRN';

describe('isCRN', () => {
  it('should return true for a valid corporate registration number with hyphen', () => {
    expect(isCRN('110111-4296772')).toBe(true);
  });

  it('should return true for a valid corporate registration number without hyphen', () => {
    expect(isCRN('1101114296772')).toBe(true);
  });

  it('should return false for a corporate registration number with incorrect format (not 13 digits)', () => {
    expect(isCRN('123-45-678901')).toBe(false); // 12자리
    expect(isCRN('12345678901234')).toBe(false); // 14자리
  });

  it('should return false for a corporate registration number containing non-numeric characters', () => {
    expect(isCRN('123-45-67890A2')).toBe(false); // 마지막 자리에 알파벳 포함
    expect(isCRN('123-45-67A9012')).toBe(false); // 중간에 알파벳 포함
  });

  it('should return false for an invalid corporate registration number with correct length but wrong checksum', () => {
    expect(isCRN('123-45-6789013')).toBe(false); // 잘못된 검증번호
  });

  it('should return false for a null value', () => {
    expect(isCRN(null)).toBe(false);
  });

  it('should return false for an undefined value', () => {
    expect(isCRN(undefined)).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isCRN('')).toBe(false);
  });
});
