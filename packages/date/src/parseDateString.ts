import { isValid } from 'date-fns';

/**
 * 날짜 문자열을 구문 분석하여 Date 객체를 반환합니다.
 *
 * @param dateString - 구문 분석할 날짜 문자열.
 * @returns 구문 분석된 Date 객체.
 * @throws Error - 날짜 문자열이 유효하지 않은 경우 오류가 발생합니다.
 *
 * @example
 * // 2024년 1월 1일을 나타내는 Date 객체 반환
 * parseDateString('2024-01-01');
 * parseDateString('20240101');
 */
export const parseDateString = (dateString: string): Date => {
  let date: Date;

  // YYYYMMDD 형식 처리
  if (/^\d{8}$/.test(dateString)) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    date = new Date(`${year}-${month}-${day}`);
  } else {
    date = new Date(dateString);
  }

  if (!isValid(date)) {
    throw new Error('Invalid date format. Expected format: YYYY-MM-DD or YYYYMMDD');
  }
  return date;
};
