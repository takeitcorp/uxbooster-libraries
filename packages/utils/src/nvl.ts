/**
 * 주어진 값이 `undefined`, `null`, 또는 빈 문자열인 경우 대체값을 반환합니다.
 *
 * @param v - 대상 값
 * @param def - 대체값
 * @returns `v`가 `undefined`, `null`, 또는 빈 문자열인 경우 `def`, 그렇지 않으면 `v`
 *
 * @example
 * // 'default'
 * nvl(undefined, 'default');
 *
 * @example
 * // 'default'
 * nvl(null, 'default');
 *
 * @example
 * // 'default'
 * nvl('', 'default');
 *
 * @example
 * // 123
 * nvl(123, 'default');
 *
 * @example
 * // true
 * nvl(true, 'default');
 */
export function nvl(v: any, def: any): any {
  return v === undefined || v === null || v === '' ? def : v;
}
