/**
 * 주어진 값이 `undefined` 또는 `null`인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 `undefined` 또는 `null`이면 `true`, 그렇지 않으면 `false`
 *
 * @example
 * // true
 * isNull(null);
 *
 * @example
 * // true
 * isNull(undefined);
 *
 * @example
 * // false
 * isNull(0);
 */
export function isNull<T>(v: T | undefined | null): boolean {
  return v === undefined || v === null;
}
