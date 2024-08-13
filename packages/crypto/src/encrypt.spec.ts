import { describe, it, expect } from '@jest/globals';
import { randomBytes } from 'crypto';
import { encrypt } from './encrypt';

describe('encrypt function', () => {
  it('should encrypt data correctly', () => {
    const plainText = 'Hello, UX Booster!';
    const key = randomBytes(32);

    console.log(`Plain Text: ${plainText}`);

    const encryptedData = encrypt(plainText, key);
    console.log(`Encrypted Data: ${encryptedData}`);

    expect(encryptedData).toBeDefined();
  });
});
