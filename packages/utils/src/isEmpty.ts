/**
 * 주어진 값이 비어 있는지 확인합니다.
 *
 * @param v - 확인할 값
 * @returns 값이 비어 있으면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isEmpty(null);
 *
 * @example
 * // true
 * isEmpty(undefined);
 *
 * @example
 * // true
 * isEmpty('');
 *
 * @example
 * // true
 * isEmpty([]);
 *
 * @example
 * // true
 * isEmpty({});
 *
 * @example
 * // false
 * isEmpty('   ');
 *
 * @example
 * // false
 * isEmpty([1, 2, 3]);
 *
 * @example
 * // false
 * isEmpty({ key: 'value' });
 */
export function isEmpty(v: any): boolean {
  if (v === null || v === undefined || v === '') return true;
  if (Array.isArray(v) && v.length === 0) return true;
  if (typeof v === 'object' && Object.keys(v).length === 0) return true;
  if (typeof v === 'string' && (v === '' || v === 'null' || v === 'undefined')) return true;
  return false;
}
