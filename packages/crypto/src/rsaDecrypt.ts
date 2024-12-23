import { privateDecrypt } from 'crypto';

/**
 * RSA 개인 키를 사용하여 암호화된 데이터를 복호화합니다.
 *
 * @param encryptedData 암호화된 데이터 (base64 인코딩)
 * @param privateKey 개인 키 (PEM 형식)
 * @returns 복호화된 텍스트
 *
 * @example
 * ```typescript
 * import { generateRSAKeyPair, rsaDecrypt } from '@uxbooster/crypto';
 *
 * const { publicKey, privateKey } = generateRSAKeyPair();
 * const text = 'Hello, UXBooster!';
 *
 * // RSA 암호화 예제
 * const encryptedText = rsaEncrypt(text, publicKey);
 * console.log(`encryptedText: ${encryptedText}`);
 *
 * // RSA 복호화 예제
 * const decryptedText = rsaDecrypt(encryptedText, privateKey);
 * console.log(`decryptedText: ${decryptedText}`);
 * ```
 */
export function rsaDecrypt(encryptedData: string, privateKey: string): string {
  const buffer = Buffer.from(encryptedData, 'base64');
  const decrypted = privateDecrypt(privateKey, buffer);
  return decrypted.toString('utf8');
}
