/**
 * 주어진 문자열이 휴대폰 번호 형식인지 여부를 확인합니다.
 *
 * @param v - 휴대폰 번호 문자열
 * @returns 휴대폰 번호 형식이면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isMobilePhone('010-1234-5678');
 *
 * @example
 * // true
 * isMobilePhone('010 1234 5678');
 *
 * @example
 * // false
 * isMobilePhone('02-1234-5678');
 *
 * @example
 * // false
 * isMobilePhone('010-123-5678');
 */
export function isMobilePhone(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  const format = /^01([0|1|6|7|8|9])[ -]?\d{3,4}[ -]?\d{4}$/;
  return format.test(v);
}
