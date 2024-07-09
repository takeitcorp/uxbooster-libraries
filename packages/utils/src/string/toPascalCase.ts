/**
 * 문자열을 Pascal case로 변환합니다.
 *
 * 주어진 문자열에서 공백, 대시, 언더스코어 등의 구분자를 제거하고,
 * 각 단어의 첫 글자를 대문자로 변환하여 Pascal case로 변환합니다.
 *
 * @param input - 변환할 문자열
 * @returns Pascal case로 변환된 문자열
 *
 * @example
 * ```typescript
 * toPascalCase('hello world'); // HelloWorld
 * toPascalCase('hello-world'); // HelloWorld
 * toPascalCase('hello_world'); // HelloWorld
 * toPascalCase('HELLO WORLD'); // HelloWorld
 * ```
 */
export const toPascalCase = (input: string): string =>
  input
    .toLowerCase() // 모든 문자를 소문자로 변환
    .replace(/(?:^|[-_\s]+)(.)/g, (_match, chr) => (chr ? chr.toUpperCase() : '')); // 첫 문자 및 구분자 뒤 문자를 대문자로 변환
