# @uxbooster/eslint-config

이 패키지는 UXBooster의 ESLint 기본 설정을 제공합니다.

## 설치

```bash
pnpm add -D @uxbooster/eslint-config
```

## 커스텀 규칙 추가 설정

1. 프로젝트 루트 폴더에 `eslint.config.mjs` 파일을 생성합니다.
2. 생성한 파일에 샘플과 같이 기본 설정 외 필요한 커스텀 규칙을 추가합니다.

```javascript
import uxboosterEslintConfig from '@uxbooster/eslint-config';

const config = [
  // UXBooster 기본 설정 가져오기
  ...uxboosterEslintConfig,

  // 필요한 커스텀 규칙을 정의
  {
    settings: {
      react: {
        // React 버전을 명시 (예: '16.9', '17.0', '18.0')
        // 기본값 'detect' 사용 시 자동으로 버전을 감지
        version: '18.3',
      },
    },
    rules: {
      // `any` 타입 사용 경고 비활성화
      '@typescript-eslint/no-explicit-any': 'off',

      // 빈 객체 타입 사용 경고 비활성화
      '@typescript-eslint/no-empty-object-type': 'off',

      // CommonJS의 require() 사용 허용
      '@typescript-eslint/no-require-imports': 'off',

      // 사용하지 않는 변수에 대한 경고 비활성화
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];

export default config;
```

> 💡 ESLint 설정 옵션 참고
>
> [https://eslint.org/docs/latest/use/configure/](https://eslint.org/docs/latest/use/configure/)
