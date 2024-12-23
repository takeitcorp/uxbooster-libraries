import { createDecipheriv, CipherGCMTypes } from 'crypto';

const ALGORITHM: CipherGCMTypes = 'aes-256-gcm';

/**
 * 암호화된 문자열을 AES-GCM 알고리즘을 사용하여 복호화합니다.
 *
 * @param cipherText 암호화된 데이터 문자열입니다.
 * @param key 32바이트 길이의 암호화 키입니다.
 * @returns 복호화된 텍스트입니다.
 *
 * @example
 * ```typescript
 * import { decrypt } from '@uxbooster/crypto';
 *
 * // 하드코딩된 예제 암호화 데이터와 키
 * const key = Buffer.from('02d3a5f242b78b52366b6232b00a76ac01cbdf70accc9d715069f2095485d95e', 'hex');
 * const cipherText = 'gDobFNBPtoJRhZpxUaLqGyOX72nCeZU+nxeuO5+m/WZ4dGtwksKFZ36dGJl3eEbK1BI=';
 *
 * // 복호화 예제
 * const decryptedText = decrypt(cipherText, key);
 * console.log(decryptedText); // 출력: 'Hello, UXBooster!'
 * ```
 */
export const decrypt = (cipherText: string, key: Buffer): string => {
  // base64로 인코딩된 문자열을 Buffer로 변환합니다.
  const combined = Buffer.from(cipherText, 'base64');

  const ivLength = 16; // 초기화 벡터 (IV)의 길이
  const tagLength = 16; // 인증 태그의 길이
  const encryptedDataLength = combined.length - ivLength - tagLength; // 암호화된 데이터의 길이

  // 새로운 Buffer를 할당하고, combined Buffer에서 각 부분을 복사합니다.
  const iv = Buffer.alloc(ivLength);
  const encryptedData = Buffer.alloc(encryptedDataLength);
  const tag = Buffer.alloc(tagLength);

  combined.copy(iv, 0, 0, ivLength);
  combined.copy(encryptedData, 0, ivLength, ivLength + encryptedDataLength);
  combined.copy(tag, 0, ivLength + encryptedDataLength);

  // AES-GCM 알고리즘을 사용하여 Decipher 인스턴스를 생성합니다.
  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);

  // 데이터를 복호화합니다.
  let decryptedData = decipher.update(encryptedData, undefined, 'utf8');
  decryptedData += decipher.final('utf8');

  return decryptedData;
};
