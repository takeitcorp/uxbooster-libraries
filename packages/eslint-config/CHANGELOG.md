# Change Log

이 프로젝트의 변경 사항을 문서화합니다.

## [2.0.0] - 2026-11-06

### Changed

- **BREAKING** Next.js 16 기준으로 변경됨. `eslint-config-next` 16을 사용하며, peerDependencies에 `next` ^16.0.0 추가됨.
- **BREAKING** Node.js 최소 버전을 26.0.0으로 상향함.
- 의존성 `eslint`를 ^9.39.5로 업데이트함.
- **BREAKING** TypeScript peer 범위를 `>=5.4.5 <6.1.0`으로 변경함.
- **BREAKING** `eslint-config-next` 16에 포함된 `eslint-plugin-react-hooks` 7의 신규 규칙이 적용됨.
- `FlatCompat` 없이 `eslint-config-next`의 flat config를 직접 사용하도록 변경함.
- `out`, `build`, `next-env.d.ts`도 기본 ignore 대상에 포함됨 (`eslint-config-next` 기본값).
- 배포 파일을 `index.js`, `index.d.ts`, `CHANGELOG.md`로 한정함 (`package.json`의 `files`).

### Fixed

- 타입 선언(`index.d.ts`)을 실제 export 형태인 flat config 배열(`Linter.Config[]`)로 수정함. 저장소에 포함되지 않아 배포 환경에 따라 누락될 수 있던 문제도 함께 수정.

### Removed

- 직접 의존성 `@eslint/compat`, `@eslint/eslintrc`, `@eslint/js`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-react-hooks`, `typescript-eslint` 제거됨.

## [1.0.0] - 2025-01-23

### Added

- ESLint 기본 설정 패키지 추가됨.
