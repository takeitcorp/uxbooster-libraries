import { describe, it, expect } from '@jest/globals';
import { floorAndFormatNumber } from './floorAndFormatNumber';

describe('floorAndFormatNumber', () => {
  it('정수를 내림 처리 후 포맷', () => {
    expect(floorAndFormatNumber(12345)).toBe('12,345');
  });

  it('소수점을 포함한 숫자를 내림 처리 후 포맷', () => {
    expect(floorAndFormatNumber(12345.67)).toBe('12,345');
  });

  it('큰 숫자를 처리', () => {
    expect(floorAndFormatNumber(987654321.99)).toBe('987,654,321');
  });

  it('음수를 처리', () => {
    expect(floorAndFormatNumber(-12345.67)).toBe('-12,346');
  });

  it('0을 처리', () => {
    expect(floorAndFormatNumber(0)).toBe('0');
  });

  it('소수점 바로 아래로 내림 처리', () => {
    expect(floorAndFormatNumber(0.99)).toBe('0');
  });

  it('이미 정수인 숫자를 처리', () => {
    expect(floorAndFormatNumber(100000)).toBe('100,000');
  });

  it('매우 작은 음수를 처리', () => {
    expect(floorAndFormatNumber(-0.0001)).toBe('-1');
  });
});
