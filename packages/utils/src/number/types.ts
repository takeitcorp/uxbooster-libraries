/**
 * `formatToKoreanNumber`, `formatToKRW` 함수의 포맷 옵션입니다.
 */
export interface FormatOptions {
  /** '원' 앞에 공백을 추가할지 여부 (`formatToKRW` 전용) */
  shouldHaveSpaceBeforeWon?: boolean;
  /** 숫자를 내림하여 특정 단위로 포맷합니다. `ceilUnit`보다 우선 적용됩니다. */
  floorUnit?: number;
  /** 숫자를 올림하여 특정 단위로 포맷합니다. */
  ceilUnit?: number;
  /** 모든 자릿수를 한글로 포맷할지 여부 */
  formatAllDigits?: boolean;
}
