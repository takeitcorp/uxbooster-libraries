import { describe, it, expect, beforeAll, jest, afterAll } from '@jest/globals';
import { formatRelativeDate } from './formatRelativeDate';

describe('formatRelativeDate function', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-17T12:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('1분 미만', () => {
    expect(formatRelativeDate('2025-03-17T11:59:50Z', 'ko')).toBe('1분 미만 전');
    expect(formatRelativeDate('2025-03-17T11:59:50Z', 'en')).toBe('less than a minute ago');
  });

  it('10분 전', () => {
    expect(formatRelativeDate('2025-03-17T11:50:00Z', 'ko')).toBe('10분 전');
    expect(formatRelativeDate('2025-03-17T11:50:00Z', 'en')).toBe('10 minutes ago');
  });

  it('3시간 전', () => {
    expect(formatRelativeDate('2025-03-17T09:00:00Z', 'ko')).toBe('약 3시간 전');
    expect(formatRelativeDate('2025-03-17T09:00:00Z', 'en')).toBe('about 3 hours ago');
  });

  it('2일 전', () => {
    expect(formatRelativeDate('2025-03-15T12:00:00Z', 'ko')).toBe('2일 전');
    expect(formatRelativeDate('2025-03-15T12:00:00Z', 'en')).toBe('2 days ago');
  });

  it('3일 전 (날짜 포맷)', () => {
    expect(formatRelativeDate('2025-03-14T12:00:00Z', 'ko')).toMatch('2025년 3월 14일 금 21:00');
    expect(formatRelativeDate('2025-03-14T12:00:00Z', 'en')).toMatch(
      'March 14th, 2025 Fri 9:00 PM',
    );
  });

  it('과거 날짜 (1년 전)', () => {
    expect(formatRelativeDate('2024-03-17T12:00:00Z', 'ko')).toMatch(/2024년 3월 17일/);
    expect(formatRelativeDate('2024-03-17T12:00:00Z', 'en')).toMatch(
      'March 17th, 2024 Sun 9:00 PM',
    );
  });

  it('미래 날짜 (미래 시간 상대 표현)', () => {
    expect(formatRelativeDate('2025-03-17T15:00:00Z', 'ko')).toBe('약 3시간 후');
    expect(formatRelativeDate('2025-03-17T15:00:00Z', 'en')).toBe('in about 3 hours');
  });

  it('미래 날짜 (3일 후, 날짜 포맷)', () => {
    expect(formatRelativeDate('2025-03-20T12:00:00Z', 'ko')).toMatch('3일 후');
    expect(formatRelativeDate('2025-03-20T12:00:00Z', 'en')).toMatch('in 3 days');
  });

  it('유효하지 않은 날짜', () => {
    expect(() => formatRelativeDate('invalid-date', 'ko')).toThrow(
      'Invalid date format. Expected format: YYYY-MM-DD or YYYYMMDD',
    );
    expect(() => formatRelativeDate('', 'en')).toThrow(
      'Invalid date format. Expected format: YYYY-MM-DD or YYYYMMDD',
    );
  });

  it('기본 로케일이 한국어로 설정됨', () => {
    expect(formatRelativeDate('2025-03-17T11:59:50Z')).toBe('1분 미만 전');
    expect(formatRelativeDate('2025-03-14T12:00:00Z')).toMatch('2025년 3월 14일 금 21:00');
  });

  it('Date 객체 지원 - 10분 전', () => {
    expect(formatRelativeDate(new Date('2025-03-17T11:50:00Z'), 'ko')).toBe('10분 전');
    expect(formatRelativeDate(new Date('2025-03-17T11:50:00Z'), 'en')).toBe('10 minutes ago');
  });

  it('Date 객체 지원 - 3일 전 (날짜 포맷)', () => {
    expect(formatRelativeDate(new Date('2025-03-14T12:00:00Z'), 'ko')).toMatch(
      '2025년 3월 14일 금 21:00',
    );
    expect(formatRelativeDate(new Date('2025-03-14T12:00:00Z'), 'en')).toMatch(
      'March 14th, 2025 Fri 9:00 PM',
    );
  });
});
