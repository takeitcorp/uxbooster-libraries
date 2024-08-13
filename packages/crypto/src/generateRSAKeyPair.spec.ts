import { describe, it, expect } from '@jest/globals';
import { generateRSAKeyPair } from './generateRSAKeyPair';

describe('generateRSAKeyPair function', () => {
  it('should generate an RSA key pair', () => {
    const { publicKey, privateKey } = generateRSAKeyPair();

    console.log(`publicKey: ${publicKey}`);
    console.log(`privateKey: ${privateKey}`);

    expect(publicKey).toBeDefined();
    expect(privateKey).toBeDefined();
    expect(publicKey).toContain('-----BEGIN PUBLIC KEY-----');
    expect(privateKey).toContain('-----BEGIN PRIVATE KEY-----');
  });
});
