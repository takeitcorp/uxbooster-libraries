/**
 * 주어진 포맷터를 사용하여 숫자를 포맷하는 함수입니다.
 *
 * @param formatter - 숫자를 포맷하는 함수입니다.
 * @returns 포맷된 숫자를 반환하는 함수입니다.
 */
function createNumberFormatterBy(formatter: (num: number) => number) {
  return function formatNumber(value: number, unit: number) {
    if (unit < 1) {
      // 부동소수점 오류 때문에 unit < 1인 경우 특별 처리
      const reciprocal = 1 / unit;
      return formatter(value * reciprocal) / reciprocal;
    }

    return formatter(value / unit) * unit;
  };
}

/**
 * 주어진 숫자를 올림하여 특정 단위로 포맷하는 함수입니다.
 */
export const ceilToUnit = createNumberFormatterBy(Math.ceil);

/**
 * 주어진 숫자를 내림하여 특정 단위로 포맷하는 함수입니다.
 */
export const floorToUnit = createNumberFormatterBy(Math.floor);

/**
 * 주어진 숫자를 반올림하여 특정 단위로 포맷하는 함수입니다.
 */
export const roundToUnit = createNumberFormatterBy(Math.round);
