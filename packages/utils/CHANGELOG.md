# Change Log

이 프로젝트의 변경 사항을 문서화합니다.

## [2.0.0] - 2026-11-10

### Changed

- **BREAKING** Node.js 최소 버전을 26.0.0으로 상향함.
- 빌드 환경 변경: TypeScript 6.0, `moduleResolution: bundler` 기준으로 빌드함 (공개 API 변경 없음).
- 입력 전용 파라미터 타입을 `any` → `unknown`으로 변경함: `isEmpty`, `isString`, `toBoolean`, `toInt`, `toString`, `nvl`(첫 번째 인자), `decode`(비교값/케이스). 모든 값을 그대로 전달할 수 있어 호출부 변경은 필요 없음.
- `copyObject`의 제네릭 제약을 `Record<string, any>` → `object`로 변경함 (반환 타입은 동일).

### Added

- `formatToKoreanNumber`, `formatToKRW`의 옵션 타입 `FormatOptions`를 export함.

### Fixed

- `FormatOptions` 타입 정의 파일(`number/types`)이 배포 패키지에 누락되어 `formatToKRW`, `formatToKoreanNumber`의 타입 선언이 깨지던 문제 수정.

## [1.0.8] - 2025-03-14

### Added

- [replaceDynamicSegments](src/replaceDynamicSegments.ts) 함수 추가

## [1.0.7] - 2025-03-13

### Added

- [copyObject](src/copyObject.ts) 함수 추가

## [1.0.6] - 2025-01-20

### Added

- [jwtDecode](src/jwtDecode.ts) 함수 추가

## [1.0.5] - 2024-12-23

### Added

- [maskName](src/masking/maskName.ts) 함수 추가
- [maskPhoneNumber](src/masking/maskPhoneNumber.ts) 함수 추가
- [commaizeNumber](src/number/commaizeNumber.ts) 함수 추가
- [decommaizeNumber](src/number/decommaizeNumber.ts) 함수 추가
- [floorAndFormatNumber](src/number/floorAndFormatNumber.ts) 함수 추가
- [ceilToUnit](src/number/formatter.ts) 함수 추가
- [floorToUnit](src/number/formatter.ts) 함수 추가
- [roundToUnit](src/number/formatter.ts) 함수 추가
- [formatToKoreanNumber](src/number/formatToKoreanNumber.ts) 함수 추가
- [formatToKRW](src/number/formatToKRW.ts) 함수 추가
- [decode](src/decode.ts) 함수 추가

## [1.0.4] - 2024-12-09

### Added

- [generateUUID](src/generateUUID.ts) 함수 추가

## [1.0.3] - 2024-10-29

### Added

- [getAge](src/getAge.ts) 함수 추가

## [1.0.2] - 2024-08-22

### Added

- [parseJson](src/string/parseJson.ts) 함수 추가

## [1.0.1] - 2024-08-20

### Added

- [isMobileDevice](src/isMobileDevice.ts) 함수 추가

## [1.0.0] - 2024-05-28

### Added

- 다양한 유틸리티 함수 추가됨.
