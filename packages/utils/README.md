# @uxbooster/utils

이 패키지는 일반적으로 사용되는 유틸리티 함수들의 모음입니다.

## 설치

```bash
npm install @uxbooster/utils
```

## 사용법

```typescript
import { isArray, isString } from '@uxbooster/utils';

console.log(isArray([])); // true
console.log(isString('hello')); // true
```

## 함수 목록

이 패키지에서 제공하는 함수 목록은 다음과 같습니다.

| 함수 이름                                        | 설명                                                                        | 예제                                                 |
| ------------------------------------------------ | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| [intersection](src/array/intersection.ts)        | 두 배열 간의 교집합을 계산하는 함수.                                        | `intersection([1, 2, 3], [2, 3, 4]); // [2, 3]`      |
| [not](src/array/not.ts)                          | 두 배열 간의 차집합을 계산하는 함수.                                        | `not([1, 2, 3], [2, 3, 4]); // [1]`                  |
| [format](src/string/format.ts)                   | 문자열 내의 포맷 지정된 플레이스홀더를 대체합니다.                          | `format('Hello, {0}!', ['John']); // 'Hello, John!'` |
| [isJsonString](src/string/isJsonString.ts)       | 주어진 문자열이 JSON 형식인지 확인합니다.                                   | `isJsonString('{ "key": "value" }'); // true`        |
| [toCamelCase](src/string/toCamelCase.ts)         | 문자열을 Camel case로 변환합니다.                                           | `toCamelCase('hello world'); // helloWorld`          |
| [toPascalCase](src/string/toPascalCase.ts)       | 문자열을 Pascal case로 변환합니다.                                          | `toPascalCase('hello world'); // HelloWorld`         |
| [toRestfulFormat](src/string/toRestfulFormat.ts) | 문자열을 RESTful API에서 사용 가능한 형태로 변환합니다.                     | `toRestfulFormat('hello world'); // hello-world`     |
| [toSnakeCase](src/string/toSnakeCase.ts)         | 문자열을 스네이크 케이스로 변환합니다.                                      | `toSnakeCase('hello world'); // hello_world`         |
| [formatBytes](src/formatBytes.ts)                | 바이트 크기를 형식화된 문자열로 변환합니다.                                 | `formatBytes(1024); // '1 KB'`                       |
| [getType](src/getType.ts)                        | 주어진 객체의 타입을 문자열로 반환합니다.                                   | `getType('hello'); // 'String'`                      |
| [isArray](src/isArray.ts)                        | 주어진 값이 배열인지 확인합니다.                                            | `isArray([1, 2, 3]); // true`                        |
| [isBoolean](src/isBoolean.ts)                    | 주어진 값이 부울형인지 확인합니다.                                          | `isBoolean(true); // true`                           |
| [isEmpty](src/isEmpty.ts)                        | 주어진 값이 비어 있는지 확인합니다.                                         | `isEmpty(null); // true`                             |
| [isFunction](src/isFunction.ts)                  | 주어진 값이 함수인지 확인합니다.                                            | `isFunction(() => {}); // true`                      |
| [isInt](src/isInt.ts)                            | 주어진 값이 정수인지 확인합니다.                                            | `isInt(123); // true`                                |
| [isMobileDevice](src/isMobileDevice.ts)          | 사용자가 모바일 기기에서 접속했는지 여부를 확인합니다.                      | `isMobileDevice(); // true`                          |
| [isNull](src/isNull.ts)                          | 주어진 값이 `undefined` 또는 `null`인지 확인합니다.                         | `isNull(null); // true`                              |
| [isNumber](src/isNumber.ts)                      | 주어진 값이 숫자인지 확인합니다.                                            | `isNumber(123); // true`                             |
| [isObject](src/isObject.ts)                      | 주어진 값이 객체인지 확인합니다.                                            | `isObject({}); // true`                              |
| [isString](src/isString.ts)                      | 주어진 값이 문자열인지 확인합니다.                                          | `isString('hello'); // true`                         |
| [isUndefined](src/isUndefined.ts)                | 주어진 값이 undefined인지 확인합니다.                                       | `isUndefined(undefined); // true`                    |
| [nvl](src/nvl.ts)                                | 주어진 값이 `undefined`, `null`, 또는 빈 문자열인 경우 대체값을 반환합니다. | `nvl(undefined, 'default'); // 'default'`            |
| [toBoolean](src/toBoolean.ts)                    | 입력된 값을 boolean으로 변환합니다.                                         | `toBoolean('true'); // true`                         |
| [toInt](src/toInt.ts)                            | 입력된 값이 숫자로 변환 가능한지 확인하고, 가능한 경우 정수로 변환합니다.   | `toInt('123'); // 123`                               |
| [toString](src/toString.ts)                      | 주어진 값의 문자열 표현을 반환합니다.                                       | `toString(123); // '123'`                            |

## 클래스 목록

이 패키지에서 제공하는 클래스 목록은 다음과 같습니다.

- [StorageItem](src/storage/StorageItem.ts): 로컬 스토리지에 저장된 데이터 항목을 나타내는 클래스입니다.
- [LocalStorageWorker](src/storage/LocalStorageWorker.ts): 브라우저의 로컬 스토리지를 사용하여 데이터를 저장하고 관리하기 위한 클래스입니다.
- [CredentialStorage](src/storage/CredentialStorage.ts): 브라우저의 로컬 스토리지를 사용하여 사용자의 로그인 정보를 저장하고 관리하는 클래스입니다.
