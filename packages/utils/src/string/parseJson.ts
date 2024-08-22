import { isEmpty } from '../isEmpty';
import { isString } from '../isString';

/**
 * 주어진 문자열을 JSON 객체로 파싱합니다.
 * 문자열이 비어있거나 유효하지 않은 경우 null을 반환합니다.
 *
 * @param v JSON으로 파싱할 문자열입니다.
 * @returns 파싱된 JSON 객체를 반환하거나, 오류 발생 시 null을 반환합니다.
 *
 * @example
 * // 정상적인 JSON 문자열을 파싱하는 예시
 * const jsonString = '{"name": "Take", "age": 3}';
 * const result = parseJson(jsonString);
 * console.log(result); // { name: 'Take', age: 3 }
 *
 * @example
 * // 비정상적인 JSON 문자열을 파싱하는 예시
 * const invalidJsonString = '{name: "Take", age: 3}';
 * const result = parseJson(invalidJsonString);
 * console.log(result); // null (콘솔에 JSON 파싱 오류 메시지가 출력됨)
 *
 * @example
 * // 비어있는 문자열을 파싱하는 예시
 * const emptyString = '';
 * const result = parseJson(emptyString);
 * console.log(result); // null
 */
export const parseJson = (v: string): any => {
  if (isEmpty(v)) {
    return null;
  }

  if (!isString(v)) {
    console.error('Input value is not a string.');
    return null;
  }

  try {
    return JSON.parse(v);
  } catch (error) {
    console.error('JSON parsing error:', error);
    return null;
  }
};
