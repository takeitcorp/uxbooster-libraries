import { describe, it, expect } from '@jest/globals';
import { hasSpecialChar } from './hasSpecialChar';

describe('hasSpecialChar function', () => {
  it('일반 문자열에 특수문자가 없는 경우', () => {
    expect(hasSpecialChar('HelloWorld')).toBe(false);
  });

  it('특수문자가 포함된 경우', () => {
    expect(hasSpecialChar('Hello@World')).toBe(true);
  });

  it('공백이 포함된 경우', () => {
    expect(hasSpecialChar('Hello World')).toBe(false);
  });

  it('null인 경우', () => {
    expect(hasSpecialChar(null)).toBe(false);
  });

  it('undefined인 경우', () => {
    expect(hasSpecialChar(undefined)).toBe(false);
  });

  it('빈 문자열인 경우', () => {
    expect(hasSpecialChar('')).toBe(false);
  });

  it('숫자와 특수문자가 포함된 경우', () => {
    expect(hasSpecialChar('Password123!')).toBe(true);
  });

  it('특수문자만 있는 경우', () => {
    expect(hasSpecialChar('!@#$%^&*()')).toBe(true);
  });
});
