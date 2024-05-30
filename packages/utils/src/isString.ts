/**
 * 주어진 값이 문자열인지 확인합니다.
 *
 * @param {any} v - 확인할 값.
 * @returns {boolean} - 값이 문자열이면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isString('hello');
 *
 * @example
 * // false
 * isString(123);
 *
 * @example
 * // false
 * isString({});
 */
export function isString(v: any): boolean {
  return typeof v === 'string';
}
