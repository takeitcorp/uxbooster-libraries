/**
 * 주어진 값의 문자열 표현을 반환합니다.
 * 객체가 주어지고 해당 객체에 `toString` 메서드가 있는 경우 이를 사용하여 문자열로 변환합니다.
 * 객체가 `null`이 아니고 `object` 타입인 경우에만 `toString`을 호출합니다.
 * 객체가 `null`이거나 `toString` 메서드가 없는 경우, 주어진 값의 문자열 변환 결과를 반환합니다.
 *
 * @param v - 문자열로 변환할 값
 * @returns 주어진 값의 문자열 표현
 *
 * @example
 * // '123'
 * toString(123);
 *
 * @example
 * // 'hello'
 * toString('hello');
 *
 * @example
 * // 'true'
 * toString(true);
 *
 * @example
 * // 'null'
 * toString(null);
 *
 * @example
 * // '[object Object]'
 * toString({});
 */
export function toString(v: any): string {
  if (v !== null && typeof v === 'object' && v.toString) {
    return v.toString();
  }
  return v === null ? '' : v + '';
}
