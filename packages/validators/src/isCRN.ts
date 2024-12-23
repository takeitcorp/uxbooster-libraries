/**
 * 주어진 문자열이 대한민국의 법인등록번호 형식인지 확인합니다.
 *
 * @param v - 확인할 문자열입니다.
 * @returns 주어진 문자열이 대한민국의 법인등록번호 형식이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isCRN('123-45-6789012');
 *
 * @example
 * // false
 * isCRN('123456789012');
 *
 * @example
 * // false
 * isCRN('123-45-678901A');
 */
export function isCRN(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  // '-' 제거
  const crn = v.replace(/-/g, '');

  // 법인등록번호는 13자리 숫자여야 함
  if (crn.length !== 13 || isNaN(Number(crn))) return false;

  // 가중치 배열
  const checkID = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  // 가중치 적용 및 합계 계산
  for (let i = 0; i < 12; i++) {
    sum += checkID[i] + parseInt(crn.charAt(i), 10);
  }

  // 나머지 계산
  const remainder = 10 - (sum % 10);

  // 나머지가 10일 경우 0으로 처리
  const checkDigit = remainder === 10 ? 0 : remainder;

  // 검증번호와 마지막 자리 비교
  return checkDigit === parseInt(crn.charAt(12), 10);
}
