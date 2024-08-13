import crypto from 'crypto';

/**
 * 주어진 데이터를 SHA-256 알고리즘으로 해싱합니다.
 *
 * @param data 해싱할 데이터 (문자열)
 * @returns 해시된 문자열 (16진수 형식)
 *
 * @example
 * ```typescript
 * import { sha256Hash } from '@uxbooster/crypto';
 *
 * const testString = 'Hello, UX Booster!';
 *
 * // SHA-256 알고리즘으로 해싱 예제
 * const hash = sha256Hash(testString);
 * console.log(`SHA-256 Hash: ${hash}`);  // 출력: '2eeeb84571acd9dbf70061f1d4598516afbb094de56eae2fc76b34cfa2097766'
 * ```
 */
export const sha256Hash = (data: string): string => {
  return crypto.createHash('sha256').update(data).digest('hex');
};
