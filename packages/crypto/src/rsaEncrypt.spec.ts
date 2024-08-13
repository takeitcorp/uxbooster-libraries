import { describe, it, expect } from '@jest/globals';
import { generateRSAKeyPair } from './generateRSAKeyPair';
import { rsaEncrypt } from './rsaEncrypt';

describe('rsaEncrypt function', () => {
  it('should encrypt data using RSA puclic key', () => {
    const { publicKey } = generateRSAKeyPair();
    const text = 'Hello, UX Booster!';
    console.log(`text: ${text}`);

    const encryptedText = rsaEncrypt(text, publicKey);
    console.log(`encryptedText: ${encryptedText}`);

    expect(encryptedText).toBeDefined();
    expect(encryptedText).not.toBe(text); // 암호화된 텍스트는 원본 텍스트와 다릅니다.
  });
});
