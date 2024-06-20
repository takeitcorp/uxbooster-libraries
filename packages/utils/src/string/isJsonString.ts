/**
 * 주어진 문자열이 JSON 형식인지 확인합니다.
 *
 * @param v 검사할 값
 * @returns 값이 유효한 JSON 형식이면이면 `true`, 그렇지 않으면 `false`
 *
 * @example
 * // true
 * isJsonString('{ "key": "value" }');
 *
 * @example
 * // false
 * isJsonString('hello');
 * @returns
 */
export const isJsonString = (v: string | undefined | null): boolean => {
  if (v === undefined || v === null) {
    return false;
  }

  try {
    const json = JSON.parse(v);
    return typeof json === 'object';
  } catch (e) {
    return false;
  }
};
