# @uxbooster/validators

이 패키지는 일반적으로 사용되는 유효성 검사 함수들의 모음입니다.

## 설치

```bash
npm install @uxbooster/validators
```

## 사용법

```typescript
import { isEmail } from '@uxbooster/validators';

console.log(isEmail('hello@take-it.co.kr')); // true
```

## 함수 목록

이 패키지에서 제공하는 함수 목록은 다음과 같습니다.

| 함수 이름                               | 설명                                                           | 예제                                      |
| --------------------------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| [hasSpecialChar](src/hasSpecialChar.ts) | 주어진 문자열에 특수문자가 포함되어 있는지 확인합니다.         | `hasSpecialChar("Hello@World"); // true`  |
| [isBRN](src/isBRN.ts)                   | 주어진 문자열이 대한민국의 사업자등록번호 형식인지 확인합니다. | `isBRN('123-12-31231'); // true`          |
| [isEmail](src/isEmail.ts)               | 주어진 문자열이 이메일 형식인지 여부를 확인합니다.             | `isEmail('test@example.com'); // true`    |
| [isHangulOnly](src/isHangulOnly.ts)     | 주어진 문자열이 한글만 포함되어 있는지 확인합니다.             | `isHangulOnly("안녕하세요"); // true`     |
| [isMobilePhone](src/isMobilePhone.ts)   | 주어진 문자열이 휴대폰 번호 형식인지 여부를 확인합니다.        | `isMobilePhone('010-1234-5678'); // true` |
| [isPhone](src/isPhone.ts)               | 주어진 문자열이 전화번호 형식인지 여부를 확인합니다.           | `isPhone('02-1234-5678'); // true`        |
| [isRRN](src/isRRN.ts)                   | 주어진 문자열이 대한민국의 주민등록번호 형식인지 확인합니다.   | `isRRN('930101-1234567'); // true`        |
