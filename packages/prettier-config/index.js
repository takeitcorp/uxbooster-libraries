/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    singleQuote: true, // 문자열에 작은따옴표를 사용
    semi: true, // 코드 끝에 세미콜론을 추가
    useTabs: false, // 탭 대신 스페이스바를 사용
    tabWidth: 2, // 들여쓰기 너비는 2칸
    trailingComma: 'all', // 모든 항목 뒤에 콤마 추가
    printWidth: 100, // 한 줄의 최대 길이를 100자로 제한
    arrowParens: 'always', // 화살표 함수의 매개변수를 항상 괄호로 감쌈
    plugins: ['@trivago/prettier-plugin-sort-imports'], // import 정렬 플러그인 사용
    importOrder: ['^@/(.*)$', '^[./]'], // import 순서를 지정
    importOrderSeparation: true, // import 그룹 사이에 빈 줄 추가
    importOrderSortSpecifiers: true, // import 항목을 알파벳 순으로 정렬
};
export default config;
