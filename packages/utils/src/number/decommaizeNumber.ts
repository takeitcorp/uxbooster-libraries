/**
 * 콤마(,)가 포함된 문자열을 숫자로 변환합니다.
 *
 * @param numStr - 콤마를 제거할 문자열 형식의 숫자
 * @returns 콤마가 제거된 숫자
 *
 * @example
 * decommaizeNumber("1,234,567"); // 1234567
 *
 * @example
 * decommaizeNumber("987,654.32"); // 987654.32
 */
export function decommaizeNumber(numStr: string): number {
  const cleaned = numStr.replace(/,/g, '').trim();
  return cleaned === '' || isNaN(Number(cleaned)) ? NaN : Number(cleaned);
}
