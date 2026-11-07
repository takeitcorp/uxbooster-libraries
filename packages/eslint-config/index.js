import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

// 사용자 정의 rules 설정
// .next, out, build, next-env.d.ts 는 eslint-config-next 의 전역 ignores 에 이미 포함되어 있음
const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,

  {
    rules: {
      // eslint-config-next/typescript 가 warn 으로 낮춘 규칙을 typescript-eslint 권장 수준(error)으로 유지
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier,
    },
    rules: {
      // React 컴포넌트의 displayName 설정을 비활성화
      'react/display-name': 'off',

      // React Hooks 의존성 배열 관련 경고를 비활성화
      'react-hooks/exhaustive-deps': 'off',

      // 익명 default export 사용 경고를 비활성화
      'import/no-anonymous-default-export': 'off',

      // Prettier 포맷팅 규칙을 ESLint 에러로 처리
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];

export default config;
