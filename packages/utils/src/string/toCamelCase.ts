/**
 * 문자열을 camel case로 변환합니다.
 *
 * 주어진 문자열에서 공백, 대시, 언더스코어 등의 구분자를 제거하고,
 * 각 단어의 첫 글자를 대문자로 변환하여 camel case로 변환합니다.
 * 첫 번째 단어의 첫 글자는 소문자로 변환합니다.
 *
 * @param input - 변환할 문자열
 * @returns camel case로 변환된 문자열
 *
 * @example
 * ```typescript
 * toCamelCase('hello world'); // helloWorld
 * toCamelCase('Hello-World'); // helloWorld
 * toCamelCase('hello_world'); // helloWorld
 * toCamelCase('HELLO WORLD'); // helloWorld
 * ```
 */
export const toCamelCase = (input: string): string =>
  input
    .toLowerCase() // 모든 문자를 소문자로 변환
    .replace(/[-_\s]+(.)?/g, (_match, chr) => (chr ? chr.toUpperCase() : '')) // 구분자를 제거하고 다음 문자를 대문자로 변환
    .replace(/^(.)/, (_match, chr) => chr.toLowerCase()); // 첫 번째 문자를 소문자로 변환
