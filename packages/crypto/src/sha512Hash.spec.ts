import { describe, it, expect } from '@jest/globals';
import { sha512Hash } from './sha512Hash';

describe('sha512Hash function', () => {
  it('should generate a SHA-512 hash', () => {
    const testString = 'Hello, UXBooster!';
    const hash = sha512Hash(testString);
    console.log(`SHA-512 Hash: ${hash}`);
    expect(hash).toHaveLength(128); // SHA-512 해시는 128문자 (16진수)
  });
});
