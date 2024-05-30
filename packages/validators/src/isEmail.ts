/**
 * 주어진 문자열이 이메일 형식인지 여부를 확인합니다.
 *
 * @param v 이메일 주소 문자열
 * @returns 이메일 형식이면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isEmail('test@example.com');
 *
 * @example
 * // false
 * isEmail('test.example.com');
 *
 * @example
 * // false
 * isEmail('test@example');
 */
export function isEmail(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  const format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.[A-Za-z]{2,}$/;
  return format.test(v);
}
