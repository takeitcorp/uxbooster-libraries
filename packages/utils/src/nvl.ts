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
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 반환 타입은 기존 사용처 호환을 위해 any 유지
export function nvl(v: unknown, def: any): any {
  return v === undefined || v === null || v === '' ? def : v;
}
