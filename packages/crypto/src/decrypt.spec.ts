import { describe, it, expect } from '@jest/globals';
import { randomBytes } from 'crypto';
import { encrypt } from './encrypt';
import { decrypt } from './decrypt';

describe('decrypt function', () => {
  it('should decrypt data correctly', () => {
    const plainText = 'Hello, UXBooster!';
    const key = randomBytes(32);
    console.log(`key: ${key.toString('hex')}`);

    const cipherText = encrypt(plainText, key);
    console.log(`Cipher Text: ${cipherText}`);

    const decryptedText = decrypt(cipherText, key);
    console.log(`Decrypted Data: ${decryptedText}`);

    expect(decryptedText).toBe(plainText);
  });
});
