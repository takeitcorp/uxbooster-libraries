# @uxbooster/prettier-config

이 패키지는 UXBooster의 Prettier 기본 설정을 제공합니다.

## 설치

```bash
pnpm add -D @uxbooster/prettier-config
```

### 요구 사항

- Node.js 26 이상
- Prettier 3

> Node.js 18 등 이전 환경에서는 `@uxbooster/prettier-config@^1` 버전을 사용하세요. 변경 내역은 [CHANGELOG](CHANGELOG.md)를 참고하세요.

## 커스텀 규칙 추가 설정

1. 프로젝트 루트 폴더에 `prettier.config.js` 파일을 생성합니다.
2. 생성한 파일에 샘플과 같이 기본 설정 외 필요한 커스텀 규칙을 추가합니다.

```javascript
const uxboosterPrettierConfig = require('@uxbooster/prettier-config');

/** @type {import('prettier').Config} */
module.exports = {
  // UXBooster 기본 설정 가져오기
  ...uxboosterPrettierConfig,

  // 필요한 커스텀 규칙을 정의
};
```

> 💡 Prettier 설정 옵션 참고
>
> [https://prettier.io/docs/en/options](https://prettier.io/docs/en/options)
