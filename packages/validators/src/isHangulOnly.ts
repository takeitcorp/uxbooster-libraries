/**
 * 주어진 문자열이 한글만 포함되어 있는지 확인합니다.
 *
 * @param v - 검사할 문자열. 문자열, null, 또는 undefined일 수 있습니다.
 * @returns 주어진 문자열이 한글만 포함되어 있으면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * isHangulOnly("안녕하세요"); // true
 * isHangulOnly("Hello"); // false
 * isHangulOnly("안녕 Hello"); // false
 * isHangulOnly(null); // false
 * isHangulOnly(undefined); // false
 */
export function isHangulOnly(v: string | undefined | null): boolean {
  if (typeof v !== 'string') {
    return false;
  }
  return /^[가-힣]+$/.test(v); // 한글만 체크
}
