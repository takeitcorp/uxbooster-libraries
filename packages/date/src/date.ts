import { format as fnsFormat, isValid } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import locale from 'date-fns/locale/ko/index.js';

type DateType = number | Date;

const TZ = 'Asia/Seoul';

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

/**
 * 지정된 시간대의 현재 날짜를 가져옵니다.
 *
 * @param timezone - 시간대 문자열 (기본값은 'Asia/Seoul'입니다).
 * @returns 지정된 시간대의 현재 날짜.
 *
 * @example
 * // 현재 시각을 Asia/Seoul 시간대로 변환하여 반환
 * getCurrentDate();
 */
export const getCurrentDate = (timezone: string = TZ): Date => utcToZonedTime(Date.now(), timezone);

/**
 * 날짜 문자열을 구문 분석하여 Date 객체를 반환합니다.
 *
 * @param dateString - 구문 분석할 날짜 문자열.
 * @returns 구문 분석된 Date 객체.
 * @throws 날짜 문자열이 유효하지 않은 경우 오류가 발생합니다.
 *
 * @example
 * // 2024년 1월 1일을 나타내는 Date 객체 반환
 * parseDateString('2024-01-01');
 */
export const parseDateString = (dateString: string): Date => {
  const date = new Date(dateString);
  if (isValid(date)) {
    return date;
  }
  throw new Error('Invalid date format');
};

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

/**
 * Date 객체를 'yyyyMMdd' 형식의 형식화된 문자열로 변환합니다.
 *
 * @param date - 변환할 Date 객체 (null 허용됨).
 * @returns 형식화된 날짜 문자열.
 *
 * @example
 * // '20240101'
 * convertDateToFormattedString(new Date(2024, 0, 1));
 */
export const convertDateToFormattedString = (date: Date | null) => {
  if (!date) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};
