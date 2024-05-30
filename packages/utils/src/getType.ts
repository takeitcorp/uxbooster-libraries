/**
 * `getType` 함수는 주어진 객체의 타입을 문자열로 반환합니다.
 *
 * @param {unknown} target - 타입을 확인할 객체
 * @returns {string} - 객체의 타입을 나타내는 문자열
 *
 * @example
 * // 'String'
 * getType('hello');
 *
 * @example
 * // 'Number'
 * getType(123);
 *
 * @example
 * // 'Array'
 * getType([1, 2, 3]);
 */
export const getType = (target: unknown): string => {
  return Object.prototype.toString.call(target).slice(8, -1);
};
