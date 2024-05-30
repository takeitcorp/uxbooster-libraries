/**
 * 주어진 값이 부울형인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 부울형이면 `true`, 그렇지 않으면 `false`
 *
 * @example
 * // true
 * isBoolean(true);
 *
 * @example
 * // true
 * isBoolean(false);
 *
 * @example
 * // false
 * isBoolean(0);
 */
export function isBoolean<T>(v: T | undefined | null): boolean {
  return v === true || v === false || v === 'true' || v === 'false';
}
