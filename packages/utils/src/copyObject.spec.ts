import { describe, it, expect } from '@jest/globals';
import { copyObject } from './copyObject';

describe('copyObject', () => {
  it('1. 기본 객체 복사', () => {
    const obj = { a: 1, b: 'it', c: true };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj); // 서로 다른 객체여야 함
  });

  it('2. 빈 객체 복사', () => {
    const obj = {};
    const result = copyObject(obj);
    expect(result).toEqual({});
  });

  it('3. 중첩 객체 복사', () => {
    const obj = { a: { b: 2, c: 3 } };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
    expect(result.a).toBe(obj.a); // 얕은 복사이므로 같은 참조를 유지함
  });

  it('4. 배열이 포함된 객체 복사', () => {
    const obj = { arr: [1, 2, 3] };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result.arr).toBe(obj.arr); // 얕은 복사이므로 배열도 같은 참조여야 함
  });

  it('5. null 값이 포함된 객체 복사', () => {
    const obj = { key: null };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
  });

  it('6. undefined 값이 포함된 객체 복사', () => {
    const obj = { key: undefined };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
  });

  it('7. 함수가 포함된 객체 복사', () => {
    const func = () => 'Hello';
    const obj = { key: func };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result.key).toBe(func);
  });

  it('8. 심볼이 포함된 객체 복사', () => {
    const sym = Symbol('it');
    const obj = { key: sym };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result.key).toBe(sym);
  });

  it('9. Date 객체가 포함된 객체 복사', () => {
    const date = new Date();
    const obj = { key: date };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result.key).toBe(date); // 얕은 복사이므로 같은 참조여야 함
  });

  it('10. 원본 객체 수정 시 복사본이 영향을 받지 않는지 확인', () => {
    const obj = { key: 'value' };
    const result = copyObject(obj);
    obj.key = 'changed';
    expect(result.key).toBe('value'); // 복사본은 영향받지 않아야 함
  });

  it('11. 여러 데이터 타입이 포함된 객체 복사', () => {
    const obj = {
      num: 123,
      str: 'Hello',
      bool: true,
      arr: [1, 2, 3],
      nested: { key: 'value' },
    };
    const result = copyObject(obj);
    expect(result).toEqual(obj);
    expect(result.nested).toBe(obj.nested); // 얕은 복사이므로 같은 참조여야 함
  });
});
