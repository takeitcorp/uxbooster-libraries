/**
 * 문자열을 RESTful API에서 사용 가능한 형태로 변환합니다.
 *
 * 주어진 문자열에서 공백, 언더스코어 등의 구분자를 하이픈으로 대체하고,
 * 모든 문자를 소문자로 변환합니다.
 *
 * @param input - 변환할 문자열
 * @returns RESTful API에서 사용 가능한 형태로 변환된 문자열
 *
 * @example
 * ```typescript
 * toRestfulFormat('hello world'); // hello-world
 * toRestfulFormat('Hello-World'); // hello-world
 * toRestfulFormat('hello_world'); // hello-world
 * toRestfulFormat('HELLO WORLD'); // hello-world
 * ```
 */
export const toRestfulFormat = (input: string): string =>
  input
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase를 처리하기 위해 소문자 다음에 대문자가 오면 그 사이에 하이픈을 추가
    .toLowerCase() // 모든 문자를 소문자로 변환
    .replace(/[\s_]+/g, '-') // 공백과 언더스코어를 하이픈으로 대체
    .replace(/[^a-zA-Z0-9-]/g, '') // 영문자, 숫자, 하이픈 이외의 문자 제거
    .replace(/^-+|-+$/g, ''); // 문자열 시작과 끝의 하이픈 제거
