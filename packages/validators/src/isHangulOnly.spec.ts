import { describe, it, expect } from '@jest/globals';
import { isHangulOnly } from './isHangulOnly';

describe('isHangulOnly function', () => {
  it('한글만 포함된 경우', () => {
    expect(isHangulOnly('안녕하세요')).toBe(true);
  });

  it('영어만 포함된 경우', () => {
    expect(isHangulOnly('Hello')).toBe(false);
  });

  it('한글과 영어가 혼합된 경우', () => {
    expect(isHangulOnly('안녕 Hello')).toBe(false);
  });

  it('숫자만 포함된 경우', () => {
    expect(isHangulOnly('12345')).toBe(false);
  });

  it('특수문자만 포함된 경우', () => {
    expect(isHangulOnly('!@#$%')).toBe(false);
  });

  it('빈 문자열인 경우', () => {
    expect(isHangulOnly('')).toBe(false);
  });

  it('null인 경우', () => {
    expect(isHangulOnly(null)).toBe(false);
  });

  it('undefined인 경우', () => {
    expect(isHangulOnly(undefined)).toBe(false);
  });

  it('한글과 숫자가 혼합된 경우', () => {
    expect(isHangulOnly('안녕123')).toBe(false);
  });

  it('한글만 반복된 경우', () => {
    expect(isHangulOnly('가나다라마바사')).toBe(true);
  });
});
