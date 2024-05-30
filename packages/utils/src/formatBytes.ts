/**
 * `formatBytes` 함수는 바이트 크기를 형식화된 문자열로 변환합니다.
 *
 * @param {number} bytes - 바이트 크기
 * @param {number} decimals - 소수점 자리 수 (기본값: 2)
 * @returns {string} - 형식화된 크기 문자열
 *
 * @example
 * // '1 KB'
 * formatBytes(1024);
 *
 * @example
 * // '1.50 MB'
 * formatBytes(1572864);
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = bytes / Math.pow(k, i);
  return `${size.toFixed(dm)} ${sizes[i]}`;
};
