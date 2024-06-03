import { formatDate } from './formatDate';
import { convertStringToDate } from './convertStringToDate';
import { parseDateString } from './parseDateString';

const TZ = 'Asia/Seoul';

/**
 * 날짜 문자열 또는 Date 객체를 형식화된 날짜 문자열로 변환합니다.
 *
 * @param date - 변환할 날짜 문자열 또는 Date 객체.
 * @param formatStr - 형식 문자열 (기본값은 'yyyy-MM-dd'입니다).
 * @param timezone - 시간대 문자열 (기본값은 'Asia/Seoul'입니다).
 * @returns 형식화된 날짜 문자열.
 *
 * @example
 * // '2024-01-01'
 * convertStringToDateFormat('2024-01-01T00:00:00+09:00');
 *
 * @example
 * // '2024-01-01'
 * convertStringToDateFormat(new Date(2024, 0, 1));
 */
export const convertStringToDateFormat = (
  date: string | Date | null,
  formatStr = 'yyyy-MM-dd',
  timezone: string = TZ,
) => {
  if (!date) return '';

  const parsedDate = typeof date === 'string' ? parseDateString(date) : date;
  const dateInstance = convertStringToDate(parsedDate, timezone);
  return formatDate(dateInstance, formatStr);
};
