import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FlatCompat를 사용하여 ESLint 설정을 호환되게 로드
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// next/core-web-vitals 설정을 적용하고 rules를 수정
const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')]);

// 사용자 정의 rules 설정
const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  prettierConfig,

  { ignores: ['.next/*'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동으로 감지
      },
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
