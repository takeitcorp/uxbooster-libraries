import { describe, it, expect } from '@jest/globals';
import { generateUUID } from './generateUUID';

describe('generateUUID function', () => {
  it('should generate a valid UUID string', () => {
    const uuid = generateUUID();

    // UUID의 형식이 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'와 일치하는지 확인
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).toMatch(uuidRegex);
  });

  it('should generate a unique UUID each time', () => {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();

    // 두 UUID가 다르다는 것을 확인
    expect(uuid1).not.toBe(uuid2);
  });
});
