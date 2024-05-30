/**
 * 입력된 값을 boolean으로 변환합니다.
 *
 * @param v 값
 * @returns boolean으로 변환된 값
 *
 * @example
 * // true
 * toBoolean(true);
 *
 * @example
 * // true
 * toBoolean('true');
 *
 * @example
 * // true
 * toBoolean(1);
 *
 * @example
 * // false
 * toBoolean(false);
 *
 * @example
 * // false
 * toBoolean('false');
 *
 * @example
 * // false
 * toBoolean(0);
 */
export function toBoolean(v: any): boolean {
  if (typeof v === 'number') {
    return v === v && v !== 0;
  }
  if (typeof v === 'string') {
    if (v === 'false' || v === 'NaN') {
      return false;
    }
    if (v === '0') {
      return false;
    }
    return +v !== 0;
  } else {
    return !!v;
  }
}
