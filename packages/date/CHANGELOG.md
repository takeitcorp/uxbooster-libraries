# Change Log

이 프로젝트의 변경 사항을 문서화합니다.

## [2.0.0] - 2026-11-10

### Changed

- **BREAKING** Node.js 최소 버전을 26.0.0으로 상향함.
- **BREAKING** `date-fns`를 dependencies에서 peerDependencies(`^3.6.0 || ^4.0.0`)로 변경함. 사용하는 프로젝트에 date-fns 3.6 이상 또는 4를 직접 설치해야 하며, 프로젝트의 date-fns를 그대로 사용하므로 중복 설치되지 않음.
- **BREAKING** `date-fns-tz`를 ^2.0.1 → ^3.2.0으로 업그레이드함 (date-fns 3, 4 모두 지원).
- `date-fns-tz` 3의 API 변경에 맞춰 내부 구현 변경 (`utcToZonedTime` → `toZonedTime`). 공개 함수 시그니처는 동일함.
- 빌드 환경 변경: TypeScript 6.0, `moduleResolution: bundler` 기준으로 빌드함 (공개 API 변경 없음).

## [1.0.3] - 2025-03-17

### Added

- formatRelativeDate 함수 추가됨.

## [1.0.2] - 2024-10-30

### Modified

- convertStringToDate: YYYY-MM-DD와 YYYYMMDD 모두 입력 가능
- parseDateString: YYYYMMDD 입력 문자열의 경우 YYYY-MM-DD로 변환하여 처리

## [1.0.0] - 2024-05-28

### Added

- 날짜 관련 유틸리티 함수 추가됨.
