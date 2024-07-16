/**
 * 문자열을 스네이크 케이스로 변환합니다.
 *
 * 주어진 문자열에서 공백, 대시 등의 구분자를 언더스코어로 대체하고,
 * 각 단어를 소문자로 변환하여 스네이크 케이스로 변환합니다.
 *
 * @param input - 변환할 문자열
 * @returns 스네이크 케이스로 변환된 문자열
 *
 * @example
 * ```typescript
 * toSnakeCase('hello world'); // hello_world
 * toSnakeCase('Hello-World'); // hello_world
 * toSnakeCase('helloWorld'); // hello_world
 * toSnakeCase('hello_world'); // hello_world
 * toSnakeCase('HELLO WORLD'); // hello_world
 * ```
 */
export const toSnakeCase = (input: string): string =>
  input
    .replace(/([a-z])([A-Z])/g, '$1_$2') // camel case의 경우 소문자와 대문자 사이에 언더스코어 추가
    .replace(/[-\s]+/g, '_') // 공백이나 대시를 언더스코어로 대체
    .toLowerCase(); // 모든 문자를 소문자로 변환
