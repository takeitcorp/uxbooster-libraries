/**
 * 주어진 문자열이 대한민국의 주민등록번호(Resident registration number) 형식인지 확인합니다.
 *
 * @param v - 확인할 문자열입니다.
 * @returns 주어진 문자열이 한국의 주민등록번호 형식이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 * @description 2020년 10월부터 주민등록번호 부여체계가 바뀌면서 지역번호를 폐지하고 뒷자리 성별 뒤 6자리에 임의번호를 부여하여 마지막 숫자 검증로직은 적용하지 않습니다.
 *
 * @example
 * // true
 * isRRN('930101-1234567');
 *
 * @example
 * // false
 * isRRN('0000-00000000');
 *
 * @example
 * // false
 * isRRN('0000');
 */
export function isRRN(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  const val = v.replace(/-/gi, '');

  if (val.length !== 13) {
    return false;
  }

  return true;
}
