# @uxbooster/eslint-config

이 패키지는 UXBooster의 ESLint 기본 설정을 제공합니다.

## 설치

```bash
pnpm add -D @uxbooster/eslint-config
```

### 요구 사항

- Node.js 26 이상
- ESLint 9
- Next.js 16 (`eslint-config-next`가 실행 시 `next` 패키지를 불러오므로 프로젝트에 설치되어 있어야 합니다)
- TypeScript 5.4.5 이상, 6.1.0 미만

> Next.js 15 이하 또는 Node.js 18 등 이전 환경에서는 `@uxbooster/eslint-config@^1` 버전을 사용하세요. 변경 내역은 [CHANGELOG](CHANGELOG.md)를 참고하세요.

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
        // React 버전을 명시 (예: '18.3', '19.0', '19.2')
        // 기본값 'detect' 사용 시 자동으로 버전을 감지
        version: '19.2',
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
