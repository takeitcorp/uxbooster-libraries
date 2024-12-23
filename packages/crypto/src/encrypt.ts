import { randomBytes, createCipheriv, CipherGCMTypes } from 'crypto';

const ALGORITHM: CipherGCMTypes = 'aes-256-gcm';

/**
 * 주어진 텍스트를 AES-GCM 알고리즘을 사용하여 암호화합니다.
 *
 * @param plainText 암호화할 텍스트입니다.
 * @param key 32바이트 길이의 암호화 키입니다.
 * @returns 암호화된 데이터 문자열입니다.
 *
 * @example
 * ```typescript
 * import { encrypt } from '@uxbooster/crypto';
 * import { randomBytes } from 'crypto';
 *
 * const key = randomBytes(32);
 * const plainText = 'Hello, UXBooster!';
 *
 * // 암호화 예제
 * const encryptedData = encrypt(plainText, key);
 * console.log(encryptedData);
 * ```
 */
export const encrypt = (plainText: string, key: Buffer): string => {
  const iv = randomBytes(16); // 초기화 벡터
  const cipher = createCipheriv(ALGORITHM, key, iv);

  let encryptedData = cipher.update(plainText, 'utf8');
  encryptedData = Buffer.concat([encryptedData, cipher.final()]);

  const tag = cipher.getAuthTag();

  // 암호화된 데이터, IV 및 인증 태그를 결합하고 base64로 인코딩
  const combined = Buffer.concat([iv, encryptedData, tag]);
  return combined.toString('base64');
};
