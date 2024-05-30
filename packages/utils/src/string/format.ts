/**
 * `format` 함수는 문자열 내의 포맷 지정된 플레이스홀더를 대체합니다.
 *
 * @param {string} text - 포맷을 적용할 문자열
 * @param {unknown[]} args - 플레이스홀더에 대체할 값 목록
 * @returns {string} - 포맷이 적용된 문자열
 * @example
 * // 'Hello, John!'로 포맷된 문자열 반환
 * const formattedText = format('Hello, {0}!', ['John']);
 */
export const format = (text: string, args: unknown[]): string =>
  text.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] !== 'undefined' ? String(args[number]) : match,
  );
