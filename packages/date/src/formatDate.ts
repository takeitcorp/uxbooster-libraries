import { format as fnsFormat } from 'date-fns';
import locale from 'date-fns/locale/ko/index.js';

type DateType = number | Date;

/**
 * 주어진 형식 문자열과 한국어 로케일을 사용하여 날짜를 형식화합니다.
 *
 * @param date - 형식화할 날짜 (숫자 또는 Date).
 * @param formatStr - 형식 문자열 (기본값은 'PP'입니다).
 * @returns 형식화된 날짜 문자열.
 *
 * @example
 * // '2024-01-01'
 * formatDate(new Date(2024, 0, 1));
 *
 * @example
 * // '2024년 1월 1일 일요일'
 * formatDate(new Date(2024, 0, 1), 'PPPP');
 */
export const formatDate = (date: DateType, formatStr = 'PP') => {
  return fnsFormat(date, formatStr, {
    locale,
  });
};
