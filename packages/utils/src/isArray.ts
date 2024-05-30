/**
 * 주어진 값이 배열인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 배열이면 `true`, 그렇지 않으면 `false`
 *
 * @example
 * // true
 * isArray([1, 2, 3]);
 *
 * @example
 * // false
 * isArray('hello');
 */
export function isArray<T>(v: T | undefined | null): boolean {
  if (v === undefined || v === null) {
    return false;
  }

  return Array.isArray(v);
}
