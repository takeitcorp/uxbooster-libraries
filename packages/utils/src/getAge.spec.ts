import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import MockDate from 'mockdate';
import { getAge } from './getAge';

describe('getAge function', () => {
  beforeAll(() => {
    // 현재 날짜를 2024년 10월 1일로 고정
    MockDate.set('2024-10-01');
  });

  afterAll(() => {
    // 테스트 후 MockDate 초기화
    MockDate.reset();
  });

  it('만 나이 계산: 2000년 1월 1일', () => {
    expect(getAge('000101')).toBe(24);
  });

  it('만 나이 계산: 2020년 10월 5일', () => {
    expect(getAge('201005')).toBe(3);
  });

  it('만 나이 계산: 1990년 12월 31일', () => {
    expect(getAge('901231')).toBe(33);
  });

  it('형식이 유효하지 않은 경우', () => {
    expect(getAge('invalid')).toBe(-1);
  });

  it('형식이 유효하지 않은 경우: 7자리', () => {
    expect(getAge('1234567')).toBe(-1);
  });

  it('형식이 유효하지 않은 경우: 5자리', () => {
    expect(getAge('12345')).toBe(-1);
  });

  it('만 나이 계산: 2022년 1월 1일 (생일 지난 후)', () => {
    expect(getAge('220101')).toBe(2);
  });

  it('만 나이 계산: 2022년 12월 31일 (생일 지나지 않음)', () => {
    expect(getAge('221231')).toBe(1);
  });

  it('30세 이상 생년: 1980년 1월 1일', () => {
    expect(getAge('800101')).toBe(44);
  });
});
