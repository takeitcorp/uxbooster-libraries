/**
 * 주어진 문자열이 대한민국의 사업자등록번호 형식인지 확인합니다.
 *
 * @param v - 확인할 문자열입니다.
 * @returns 주어진 문자열이 대한민국의 사업자등록번호 형식이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isBRN('123-12-31231');
 *
 * @example
 * // false
 * isBRN('123456789');
 *
 * @example
 * // false
 * isBRN('123-45-6789A');
 */
export function isBRN(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  const format = /^\d{3}-?\d{2}-?\d{5}$/;
  if (!format.test(v)) return false;

  // '-'가 포함된 경우 제거
  const brn = v.replace(/-/g, '');

  // 사업자등록번호는 10자리 숫자여야 함
  if (brn.length !== 10) return false;

  // 가중치 배열
  const weights = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let sum = 0;

  // 가중치 적용 및 합계 계산
  for (let i = 0; i < 9; i++) {
    sum += parseInt(brn.charAt(i), 10) * weights[i];
  }

  // 마지막 자리는 두 자릿수일 수 있으므로 따로 계산
  sum += Math.floor((parseInt(brn.charAt(8), 10) * 5) / 10);

  // 검증번호 계산
  const checkNum = (10 - (sum % 10)) % 10;

  // 검증번호와 마지막 자리 비교
  return checkNum === parseInt(brn.charAt(9), 10);
}
