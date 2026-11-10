# Change Log

모든 프로젝트 변경 사항을 문서화합니다.

## [2.0.0] - 2026-11-10

uxbooster-frontend (Next.js 16) 개발 환경에 맞춰 개발 도구 및 실행 환경을 변경함.

### Changed

- **BREAKING** 모든 패키지의 Node.js 최소 버전을 26.0.0으로 상향하고 메이저 버전을 올림.
  - @uxbooster/crypto 2.0.0, @uxbooster/date 2.0.0, @uxbooster/eslint-config 2.0.0, @uxbooster/prettier-config 2.0.0, @uxbooster/take-fetch 2.0.0, @uxbooster/utils 2.0.0, @uxbooster/validators 2.0.0
  - 이전 환경(Node.js 18 등)에서는 각 패키지의 1.x 버전을 사용해야 함.
- **BREAKING** @uxbooster/date: `date-fns`를 peerDependencies(`^3.6.0 || ^4.0.0`)로 변경하고 `date-fns-tz` 3으로 업그레이드함.
- pnpm 9.12.3 → 12.16.1 (`pnpm-workspace.yaml`의 `allowBuilds`로 빌드 스크립트 허용 패키지 관리)
- ESLint 8.57 → 9.39 (`.eslintrc.js`/`.eslintignore` → `eslint.config.mjs` flat config 전환, `typescript-eslint` 8)
- TypeScript 5.4 → 6.0 (`moduleResolution: bundler`, `types: ["node"]`, 패키지별 `rootDir` 명시)
- Jest 29 → 30, @swc/core 1.16, Turborepo 1.13 → 2.11 (`turbo.json`의 `pipeline` → `tasks`)
- React 19, Prettier 3.5 기준으로 개발 의존성 변경
- `.gitattributes` 추가: 개발자의 `core.autocrlf` 설정과 관계없이 LF로 체크아웃 (`.editorconfig`와 일치)
- 기존 lint 에러, TypeScript 오류, Prettier 포맷 위반 정리

## [1.0.4] - 2025-01-23

### Added

- @uxbooster/eslint-config 패키지 추가됨.
- @uxbooster/prettier-config 패키지 추가됨.

## [1.0.3] - 2024-12-23

### Updated

- BI 변경: `UX Booster` -> `UXBooster`

## [1.0.2] - 2024-12-09

### Updated

- [CVE-2024-21538] cross-spawn 관련 보안취약점 대응
  - Versions of the package cross-spawn before 7.0.5 are vulnerable to Regular Expression Denial of Service (ReDoS) due to improper input sanitization. An attacker can increase the CPU usage and crash the program by crafting a very large and well crafted string.
  - Weaknesses: [CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

## [1.0.1] - 2024-08-13

### Added

- @uxbooster/crypto 패키지 추가됨.

## [1.0.0] - 2024-05-28

### Added

- @uxbooster/date 패키지 추가됨.
- @uxbooster/take-fetch 패키지 추가됨.
- @uxbooster/utils 패키지 추가됨.
- @uxbooster/validators 패키지 추가됨.
