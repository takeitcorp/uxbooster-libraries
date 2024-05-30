/**
 * 주어진 값이 undefined인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 undefined이면 true, 그렇지 않으면 false
 *
 * @example
 * // true
 * isUndefined(undefined);
 *
 * @example
 * // false
 * isUndefined(null);
 *
 * @example
 * // false
 * isUndefined(0);
 */
export function isUndefined<T>(v: T | undefined): boolean {
  return v === undefined;
}
