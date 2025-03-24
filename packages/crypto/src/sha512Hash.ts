import crypto from 'crypto';

/**
 * 주어진 데이터를 SHA-512 알고리즘으로 해싱합니다.
 *
 * @param data 해싱할 데이터 (문자열)
 * @returns 해시된 문자열 (16진수 형식)
 *
 * @example
 * ```typescript
 * import { sha512Hash } from '@uxbooster/crypto';
 *
 * const testString = 'Hello, UXBooster!';
 *
 * // SHA-512 알고리즘으로 해싱 예제
 * const hash = sha512Hash(testString);
 * console.log(`SHA-512 Hash: ${hash}`);  // 출력: 'c0765e90fb70bfb12547d39ee299b5e0457b391a8895449da863027d4f9583a7e571094f7a0ad8df83830a5097df94c30560e77c5b99216328d5b1b1692647ff'
 * ```
 */
export const sha512Hash = (data: string): string => {
  return crypto.createHash('sha512').update(data).digest('hex');
};
