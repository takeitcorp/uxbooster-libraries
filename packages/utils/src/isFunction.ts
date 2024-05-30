/**
 * 주어진 값이 함수인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 함수이면 `true`, 그렇지 않으면 `false`
 *
 * @example
 * // true
 * isFunction(() => {});
 *
 * @example
 * // true
 * isFunction(function() {});
 *
 * @example
 * // false
 * isFunction(123);
 */
export function isFunction<T>(v: T | undefined | null): boolean {
  return typeof v === 'function';
}
