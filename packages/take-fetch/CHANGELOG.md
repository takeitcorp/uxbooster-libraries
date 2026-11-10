# Change Log

이 프로젝트의 변경 사항을 문서화합니다.

## [2.0.0] - 2026-11-10

### Changed

- **BREAKING** Node.js 최소 버전을 26.0.0으로 상향함.
- 빌드 환경 변경: TypeScript 6.0, `moduleResolution: bundler` 기준으로 빌드함 (공개 API 변경 없음).

### Fixed

- `Error`가 아닌 값이 throw된 경우 오류 메시지에 `undefined` 대신 해당 값이 표시되도록 수정함.

## [1.0.0] - 2024-05-28

### Added

- fetch API에 기능을 확장한 take-fetch 추가됨.
