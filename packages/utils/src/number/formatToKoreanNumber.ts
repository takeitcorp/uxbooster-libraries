import { commaizeNumber } from './commaizeNumber';
import { ceilToUnit, floorToUnit } from './formatter';
import { FormatOptions } from './types';

/**
 * 숫자를 한글 단위로 포맷합니다.
 *
 * @param value - 포맷할 숫자
 * @param options - 포맷 옵션
 * @returns 한글 단위가 포함된 문자열
 *
 * @example
 * formatToKoreanNumber(1234567); // "123만 4,567"
 *
 * @example
 * formatToKoreanNumber(987654321, { formatAllDigits: true }); // "9억 8천7백6십5만 4천3백2십"
 */
export function formatToKoreanNumber(value: number, options: FormatOptions = {}): string {
  const units = [
    '',
    '십',
    '백',
    '천',
    '만',
    '십',
    '백',
    '천',
    '억',
    '십',
    '백',
    '천',
    '조',
    '십',
    '백',
    '천',
    '경',
  ];

  function chunk(value: number | string, byDigits: number): number[] {
    const result: number[] = [];
    const source = String(value);

    for (let end = source.length; end >= 1; end = end - byDigits) {
      const start = Math.max(end - byDigits, 0);
      const slice = source.slice(start, end);

      result.push(Number(slice));
    }

    return result;
  }

  function formatThousands(num: number) {
    const numString = String(num)
      .split('')
      .reverse()
      .map((digit, index) => {
        return digit !== '0' ? `${digit !== '1' ? digit : ''}${units[index]}` : '';
      })
      .reverse()
      .join('');
    return numString;
  }

  const unit =
    options.floorUnit !== undefined
      ? floorToUnit(value, options.floorUnit || 1)
      : ceilToUnit(value, options.ceilUnit || 1);
  if (unit === 0) {
    return '0';
  }

  return chunk(unit, 4)
    .reduce((prevFormatted, currChunkNum, index) => {
      if (currChunkNum === 0) {
        return prevFormatted;
      }

      const val = options.formatAllDigits
        ? formatThousands(currChunkNum)
        : commaizeNumber(currChunkNum);
      const unit = units[index * 4];

      return `${val}${unit} ${prevFormatted}`;
    }, '')
    .trim();
}
