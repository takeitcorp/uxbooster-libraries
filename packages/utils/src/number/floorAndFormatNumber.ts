import { commaizeNumber } from './commaizeNumber';

/**
 * 주어진 숫자를 내림(floor) 처리하고 콤마를 포함한 형식의 문자열로 반환합니다.
 *
 * @param value - 내림 처리할 숫자
 * @returns 콤마가 포함된 형식의 문자열
 *
 * @example
 * floorAndFormatNumber(12345.67); // "12,345"
 *
 * @example
 * floorAndFormatNumber(987654.32); // "987,654"
 */
export function floorAndFormatNumber(value: number): string {
  return commaizeNumber(Math.floor(value));
}
