import { publicEncrypt } from 'crypto';

/**
 * RSA 공개 키를 사용하여 텍스트를 암호화합니다.
 *
 * @param text 암호화할 텍스트입니다.
 * @param publicKey 공개 키 (PEM 형식)
 * @returns 암호화된 데이터 (base64 인코딩)
 *
 * @example
 * ```typescript
 * import { generateRSAKeyPair, rsaEncrypt } from '@uxbooster/crypto';
 *
 * const { publicKey } = generateRSAKeyPair();
 * const text = 'Hello, UX Booster!';
 *
 * // RSA 암호화 예제
 * const encryptedText = rsaEncrypt(text, publicKey);
 * console.log(`encryptedText: ${encryptedText}`);
 * ```
 */
export function rsaEncrypt(text: string, publicKey: string): string {
  const encrypted = publicEncrypt(publicKey, Buffer.from(text));
  return encrypted.toString('base64');
}
