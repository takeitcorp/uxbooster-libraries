import { describe, it, expect } from '@jest/globals';
import { decommaizeNumber } from './decommaizeNumber';

describe('decommaizeNumber', () => {
  it('콤마가 포함된 숫자 문자열을 숫자로 변환', () => {
    expect(decommaizeNumber('1,234,567')).toBe(1234567);
  });

  it('콤마와 소수점이 포함된 숫자 문자열을 처리', () => {
    expect(decommaizeNumber('987,654.32')).toBe(987654.32);
  });

  it('콤마가 없는 숫자 문자열을 처리', () => {
    expect(decommaizeNumber('1234567')).toBe(1234567);
  });

  it('빈 문자열을 처리', () => {
    expect(decommaizeNumber('')).toBeNaN();
  });

  it('음수를 처리', () => {
    expect(decommaizeNumber('-1,234,567')).toBe(-1234567);
  });

  it('소수점이 포함된 음수를 처리', () => {
    expect(decommaizeNumber('-987,654.32')).toBe(-987654.32);
  });

  it('잘못된 문자열을 처리', () => {
    expect(decommaizeNumber('abc')).toBeNaN();
  });

  it('콤마만 포함된 문자열을 처리', () => {
    expect(decommaizeNumber(',')).toBeNaN();
  });

  it('공백이 포함된 문자열을 처리', () => {
    expect(decommaizeNumber(' 1,234 ')).toBe(1234);
  });

  it('숫자로 변환될 수 없는 복잡한 문자열을 처리', () => {
    expect(decommaizeNumber('1,234abc')).toBeNaN();
  });
});
