/**
 * 주어진 문자열이 전화번호 형식인지 여부를 확인합니다.
 *
 * @param v - 전화번호 문자열
 * @returns 전화번호 형식이면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isPhone('02-1234-5678');
 *
 * @example
 * // true
 * isPhone('031 123 4567');
 *
 * @example
 * // false
 * isPhone('02-123-456');
 *
 * @example
 * // false
 * isPhone('031-1234-56789');
 */
export function isPhone(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  const format = /^0(1[0|1|6|7|8|9]|2|3[1-3]|4[1-4]|5[1-5]|6[1-4])[ -]?\d{3,4}[ -]?\d{4}$/;
  return format.test(v);
}
