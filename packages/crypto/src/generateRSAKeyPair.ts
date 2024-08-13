import { generateKeyPairSync } from 'crypto';

/**
 * RSA 공개 키와 개인 키 쌍을 생성합니다.
 *
 * @returns 공개 키와 개인 키 쌍을 포함한 객체
 *
 * @example
 * ```typescript
 * import { generateRSAKeyPair } from '@uxbooster/crypto';
 *
 * const { publicKey, privateKey } = generateRSAKeyPair();
 *
 * console.log(`publicKey: ${publicKey}`);
 * console.log(`privateKey: ${privateKey}`);
 * ```
 */
export const generateRSAKeyPair = () => {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // 2048 비트 RSA 키
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  return { publicKey, privateKey };
};
