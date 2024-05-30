/**
 * 주어진 값이 숫자인지 확인합니다.
 *
 * @param v - 검사할 값
 * @returns 값이 숫자이면 true, 그렇지 않으면 false
 *
 * @example
 * // true
 * isNumber(123);
 *
 * @example
 * // true
 * isNumber(123.45);
 *
 * @example
 * // false
 * isNumber('123');
 */
export function isNumber<T>(v: T | undefined | null): boolean {
  return typeof v === 'number';
}
