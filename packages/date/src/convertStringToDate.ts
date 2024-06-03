import { utcToZonedTime } from 'date-fns-tz';
import { parseDateString } from './parseDateString';

const TZ = 'Asia/Seoul';

/**
 * 날짜 문자열 또는 Date 객체를 지정된 시간대의 Date 객체로 변환합니다.
 *
 * @param date - 변환할 날짜 문자열 또는 Date 객체.
 * @param timezone - 시간대 문자열 (기본값은 'Asia/Seoul'입니다).
 * @returns 변환된 Date 객체.
 *
 * @example
 * // 2024-01-01T00:00:00+09:00 반환
 * convertStringToDate('2024-01-01');
 */
export const convertStringToDate = (date: string | Date, timezone: string = TZ) => {
  const parsedDate = typeof date === 'string' ? parseDateString(date) : date;
  return utcToZonedTime(parsedDate, timezone);
};
