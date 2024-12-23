import { describe, it, expect } from '@jest/globals';
import { generateRSAKeyPair } from './generateRSAKeyPair';
import { rsaEncrypt } from './rsaEncrypt';
import { rsaDecrypt } from './rsaDecrypt';

describe('rsaDecrypt function', () => {
  it('should decrypt data using RSA private key', () => {
    const { publicKey, privateKey } = generateRSAKeyPair();
    const text = 'Hello, UXBooster!';
    console.log(`text: ${text}`);

    const encryptedText = rsaEncrypt(text, publicKey);
    console.log(`encryptedText: ${encryptedText}`);
    const decryptedText = rsaDecrypt(encryptedText, privateKey);
    console.log(`decryptedText: ${decryptedText}`);

    expect(decryptedText).toBe(text);
  });
});
