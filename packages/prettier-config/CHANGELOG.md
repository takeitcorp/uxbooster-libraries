# Change Log

이 프로젝트의 변경 사항을 문서화합니다.

## [2.0.0] - 2026-11-10

### Changed

- **BREAKING** Node.js 최소 버전을 26.0.0으로 상향함.
- 의존성 `@trivago/prettier-plugin-sort-imports`를 ^5.2.2로 업데이트함.
- 배포 파일을 `index.js`, `index.d.ts`, `CHANGELOG.md`로 한정함 (`package.json`의 `files`).
- 사용하지 않는 `build`, `clean:build`, `dev`, `test`, `typecheck` 스크립트와 `nodemon.json` 제거함.

### Fixed

- 타입 선언 파일(`index.d.ts`)이 저장소에 포함되지 않아 배포 환경에 따라 누락될 수 있던 문제 수정.

## [1.0.0] - 2025-01-23

### Added

- Prettier 기본 설정 패키지 추가됨.
