import { describe, it, expect } from '@jest/globals';
import { sha256Hash } from './sha256Hash';

describe('sha256Hash function', () => {
  it('should generate a SHA-256 hash', () => {
    const testString = 'Hello, UX Booster!';
    const hash = sha256Hash(testString);
    console.log(`SHA-256 Hash: ${hash}`);
    expect(hash).toHaveLength(64); // SHA-256 해시는 64문자 (16진수)
  });
});
