/**
 * 사용자가 모바일 기기에서 접속했는지 여부를 확인합니다.
 *
 * 이 함수는 `navigator.userAgent` 문자열을 확인하여
 * 사용자가 Android, iPad, iPhone 또는 iPod를 사용하는지 판단합니다.
 *
 * @returns 사용자가 모바일 기기에서 접속했다면 `true`, 그렇지 않다면 `false`를 반환합니다.
 * @example
 * ```typescript
 * // 예제: 모바일 기기에서 접속한 경우
 * if (isMobileDevice()) {
 *   console.log("모바일 기기에서 접속했습니다.");
 * } else {
 *   console.log("모바일 기기가 아닙니다.");
 * }
 *
 * // 테스트 환경에 따라 true 또는 false를 반환할 수 있습니다.
 * // 실제 모바일 기기에서 함수를 호출하면 true를 반환합니다.
 * ```
 */
export function isMobileDevice(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|ipad|iphone|ipod/.test(userAgent);
}
