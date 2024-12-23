import { formatToKoreanNumber } from './formatToKoreanNumber';
import { FormatOptions } from './types';

/**
 * 숫자를 한글로 변환하여 원화를 포함한 포맷으로 변환하는 함수입니다.
 *
 * @param value - 변환할 숫자입니다.
 * @param options - 옵션을 설정할 수 있습니다.
 * @returns 변환된 원화 숫자입니다.
 *
 * @option {boolean} shouldHaveSpaceBeforeWon - '원' 앞에 공백을 추가할지 여부를 설정합니다.
 * @option {number} floorUnit - 숫자를 내림하여 특정 단위로 포맷합니다.
 * @option {number} ceilUnit - 숫자를 올림하여 특정 단위로 포맷합니다.
 * @option {boolean} formatAllDigits - 모든 자릿수를 한글로 포맷할지 여부를 설정합니다.
 */
export function formatToKRW(value: number, options: FormatOptions = {}): string {
  const formattedVal = formatToKoreanNumber(value, options);

  if (options.shouldHaveSpaceBeforeWon === true) {
    return `${formattedVal} 원`;
  }

  return `${formattedVal}원`;
}
