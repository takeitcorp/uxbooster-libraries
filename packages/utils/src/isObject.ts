/**
 * 주어진 값이 객체인지 확인합니다.
 *
 * @template T - 입력 값의 타입
 * @param v - 확인할 값 (제네릭 타입, undefined 또는 null일 수 있음)
 * @returns 값이 객체이면 true, 아니면 false를 반환합니다.
 *
 * @example
 * // true
 * isObject({});
 *
 * @example
 * // true
 * isObject({ key: 'value' });
 *
 * @example
 * // false
 * isObject(null);
 */
export function isObject<T>(v: T | undefined | null): boolean {
  return typeof v === 'object' && v !== null;
}
