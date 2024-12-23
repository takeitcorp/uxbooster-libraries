import { describe, it, expect } from '@jest/globals';
import { commaizeNumber } from './commaizeNumber';

describe('commaizeNumber', () => {
  it('숫자를 콤마로 구분된 문자열로 변환', () => {
    expect(commaizeNumber(1234567)).toBe('1,234,567');
  });

  it('소수점이 포함된 숫자를 처리', () => {
    expect(commaizeNumber(1234567.89)).toBe('1,234,567.89');
  });

  it('문자열 형식의 숫자를 처리', () => {
    expect(commaizeNumber('987654321')).toBe('987,654,321');
  });

  it('소수점이 포함된 문자열을 처리', () => {
    expect(commaizeNumber('987654321.123')).toBe('987,654,321.123');
  });

  it('0을 처리', () => {
    expect(commaizeNumber(0)).toBe('0');
  });

  it('음수를 처리', () => {
    expect(commaizeNumber(-1234567)).toBe('-1,234,567');
  });

  it('음수 소수점을 처리', () => {
    expect(commaizeNumber('-1234567.89')).toBe('-1,234,567.89');
  });

  it('3자리 이하의 숫자를 처리', () => {
    expect(commaizeNumber(123)).toBe('123');
  });

  it('빈 문자열을 처리', () => {
    expect(commaizeNumber('')).toBe('');
  });

  it('소수점만 있는 숫자를 처리', () => {
    expect(commaizeNumber('.123')).toBe('.123');
  });

  it('소수점만 포함된 숫자를 처리', () => {
    expect(commaizeNumber('123.')).toBe('123.');
  });
});
