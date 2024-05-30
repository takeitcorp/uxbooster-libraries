/**
 * 입력된 값이 숫자로 변환 가능한지 확인하고, 가능한 경우 정수로 변환합니다.
 *
 * @param v 변환할 값
 * @returns 정수로 변환된 값 또는 변환할 수 없는 경우 undefined
 *
 * @example
 * // 123
 * toInt(123);
 *
 * @example
 * // 456
 * toInt('456');
 *
 * @example
 * // -789
 * toInt('-789');
 *
 * @example
 * // undefined
 * toInt('abc');
 *
 * @example
 * // undefined
 * toInt(null);
 *
 * @example
 * // undefined
 * toInt(undefined);
 */
export function toInt(v: any): number | undefined {
  if (typeof v === 'number') {
    return isFinite(v) ? v | 0 : undefined;
  }

  if (typeof v === 'string') {
    const num = parseFloat(v);
    return isFinite(num) ? num | 0 : undefined;
  }

  return undefined;
}
