/**
 * 주어진 값이 정수인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 정수이면 `true`, 그렇지 않으면 `false`
 *
 * @example
 * // true
 * isInt(123);
 *
 * @example
 * // false
 * isInt(123.45);
 *
 * @example
 * // false
 * isInt('123');
 */
export function isInt<T>(v: T | undefined | null): boolean {
  if (typeof v === 'number') {
    return v === (v | 0);
  }
  return false;
}
