/**
 * 주어진 문자열에 특수문자가 포함되어 있는지 확인합니다.
 *
 * @param v - 검사할 문자열. 문자열, null, 또는 undefined일 수 있습니다.
 * @returns 주어진 문자열에 특수문자가 포함되어 있으면 true, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * hasSpecialChar("HelloWorld"); // false
 * hasSpecialChar("Hello@World"); // true
 * hasSpecialChar("Hello World"); // false
 * hasSpecialChar(null); // false
 * hasSpecialChar(undefined); // false
 */
export function hasSpecialChar(v: string | undefined | null): boolean {
  if (typeof v !== 'string') {
    return false;
  }
  return /[!@#$%^&*(),.?":{}|<>]/.test(v); // 공백 제외, 특수문자만 체크
}
