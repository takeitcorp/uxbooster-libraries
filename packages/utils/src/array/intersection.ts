/**
 * 두 배열 간의 교집합을 계산하는 함수.
 * @param a - 첫 번째 배열.
 * @param b - 두 번째 배열.
 * @returns 두 배열 간의 공통 요소로 이루어진 배열.
 */
export const intersection = <T>(a: readonly T[], b: readonly T[]): T[] =>
  a.filter(value => b.includes(value));
