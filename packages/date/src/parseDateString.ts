import { isValid } from 'date-fns';

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
