# Change Log

모든 프로젝트 변경 사항을 문서화합니다.

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
