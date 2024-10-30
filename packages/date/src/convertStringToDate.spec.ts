import { describe, it, expect } from '@jest/globals';
import { convertStringToDate } from './convertStringToDate';

describe('convertStringToDate function', () => {
  it('converts a string in YYYY-MM-DD format to a Date object', () => {
    const date = convertStringToDate('2024-01-01');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2024-01-01T00:00:00.000Z'); // 서울 시간으로 변환된 결과
  });

  it('converts a string in YYYYMMDD format to a Date object', () => {
    const date = convertStringToDate('20240101');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2024-01-01T00:00:00.000Z'); // 서울 시간으로 변환된 결과
  });

  it('throws an error for non-string and non-Date inputs', () => {
    expect(() => convertStringToDate(123 as any)).toThrow(
      '입력값이 문자열 또는 Date 객체가 아닙니다.',
    );
    expect(() => convertStringToDate(null as any)).toThrow(
      '입력값이 문자열 또는 Date 객체가 아닙니다.',
    );
  });

  it('converts a string to a Date object in a different timezone', () => {
    const date = convertStringToDate('2024-01-01', 'America/New_York');
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2023-12-31T10:00:00.000Z'); // 뉴욕 시간으로 변환된 결과
  });
});
