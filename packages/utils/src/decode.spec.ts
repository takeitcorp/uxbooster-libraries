import { describe, it, expect } from '@jest/globals';
import { decode } from './decode';

describe('decode', () => {
  it('CASE와 일치하는 값을 반환해야 한다.', () => {
    const result = decode('1', '1', 'One', '2', 'Two', 'Default');
    expect(result).toBe('One');
  });

  it('여러 CASE 중 마지막 CASE와 일치하는 값을 반환해야 한다.', () => {
    const result = decode(100, 1, '일', 10, '십', 100, '백', '디폴트');
    expect(result).toBe('백');
  });

  it('CASE와 일치하지 않을 경우 디폴트 값을 반환해야 한다.', () => {
    const result = decode('unknown', '1', 'One', '2', 'Two', 'Default');
    expect(result).toBe('Default');
  });

  it('CASE와 결과값 쌍이 비어 있을 경우 오류를 발생시켜야 한다.', () => {
    expect(() => decode('1')).toThrow('You must provide at least one case and a default value.');
  });

  it('숫자 타입의 CASE와 일치하는 값을 반환해야 한다.', () => {
    const result = decode(50, 10, '십', 20, '이십', 50, '오십', '디폴트');
    expect(result).toBe('오십');
  });

  it('CASE에 undefined가 포함된 경우 정확히 처리해야 한다.', () => {
    const result = decode(undefined, undefined, '값 없음', 'Default');
    expect(result).toBe('값 없음');
  });

  it('CASE와 비교값의 타입이 다른 경우 디폴트 값을 반환해야 한다.', () => {
    const result = decode('100', 100, '백', '디폴트');
    expect(result).toBe('디폴트');
  });
});
