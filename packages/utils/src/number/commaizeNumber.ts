/**
 * 숫자를 입력받아 3자리마다 콤마(,)를 추가한 문자열로 반환합니다.
 *
 * @param value - 콤마를 추가할 숫자 또는 문자열 형식의 숫자
 * @returns 3자리마다 콤마가 추가된 문자열
 *
 * @example
 * commaizeNumber(1234567); // "1,234,567"
 *
 * @example
 * commaizeNumber("1234567.89"); // "1,234,567.89"
 */
export function commaizeNumber(value: string | number): string {
  const numStr = String(value);
  const decimalPointIndex = numStr.indexOf('.');
  const commaizeRegExp = /(\d)(?=(\d\d\d)+(?!\d))/g;

  return decimalPointIndex > -1
    ? numStr.slice(0, decimalPointIndex).replace(commaizeRegExp, '$1,') +
        numStr.slice(decimalPointIndex)
    : numStr.replace(commaizeRegExp, '$1,');
}
