/**
 * 두 배열 간의 차집합을 계산하는 함수.
 * @param a - 첫 번째 배열.
 * @param b - 두 번째 배열.
 * @returns 첫 번째 배열에서 두 번째 배열을 제외한 결과 배열.
 */
export const not = <T>(a: readonly T[], b: readonly T[]): T[] =>
  a.filter(value => !b.includes(value));
