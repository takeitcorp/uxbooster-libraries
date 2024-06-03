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
