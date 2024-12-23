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

| 함수 이름                                                  | 설명                                                                         | 예제                                                                   |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [intersection](src/array/intersection.ts)                  | 두 배열 간의 교집합을 계산하는 함수.                                         | `intersection([1, 2, 3], [2, 3, 4]); // [2, 3]`                        |
| [not](src/array/not.ts)                                    | 두 배열 간의 차집합을 계산하는 함수.                                         | `not([1, 2, 3], [2, 3, 4]); // [1]`                                    |
| [maskName](src/masking/maskName.ts)                        | 주어진 이름 문자열을 마스킹하여 반환합니다.                                  | `maskName('테이크'); // "테*크"`                                       |
| [maskPhoneNumber](src/masking/maskPhoneNumber.ts)          | 주어진 전화번호 문자열을 마스킹하여 반환합니다.                              | `maskPhoneNumber('010-1234-5678'); // "010-****-5678"`                 |
| [commaizeNumber](src/number/commaizeNumber.ts)             | 숫자를 입력받아 3자리마다 콤마(,)를 추가한 문자열로 반환합니다.              | `commaizeNumber(1234567); // "1,234,567"`                              |
| [decommaizeNumber](src/number/decommaizeNumber.ts)         | 콤마(,)가 포함된 문자열을 숫자로 변환합니다.                                 | `decommaizeNumber("1,234,567"); // 1234567`                            |
| [floorAndFormatNumber](src/number/floorAndFormatNumber.ts) | 주어진 숫자를 내림(floor) 처리하고 콤마를 포함한 형식의 문자열로 반환합니다. | `floorAndFormatNumber(12345.67); // "12,345"`                          |
| [ceilToUnit](src/number/ceilToUnit.ts)                     | 주어진 숫자를 올림하여 특정 단위로 포맷하는 함수입니다.                      | `ceilToUnit(320980, 10000); // 330000`                                 |
| [floorToUnit](src/number/floorToUnit.ts)                   | 주어진 숫자를 내림하여 특정 단위로 포맷하는 함수입니다.                      | `floorToUnit(1234.56, 10); // 1230`                                    |
| [roundToUnit](src/number/roundToUnit.ts)                   | 주어진 숫자를 반올림하여 특정 단위로 포맷하는 함수입니다.                    | `roundToUnit(320980, 1000); // 321000`                                 |
| [formatToKoreanNumber](src/number/formatToKoreanNumber.ts) | 숫자를 한글 단위로 포맷합니다.                                               | `formatToKoreanNumber(1234567); // "123만 4,567"`                      |
| [formatToKRW](src/number/formatToKRW.ts)                   | 숫자를 한글로 변환하여 원화를 포함한 포맷으로 변환하는 함수입니다.           | `formatToKRW(13209802); // "1,320만 9,802원"`                          |
| [format](src/string/format.ts)                             | 문자열 내의 포맷 지정된 플레이스홀더를 대체합니다.                           | `format('Hello, {0}!', ['John']); // 'Hello, John!'`                   |
| [isJsonString](src/string/isJsonString.ts)                 | 주어진 문자열이 JSON 형식인지 확인합니다.                                    | `isJsonString('{ "key": "value" }'); // true`                          |
| [parseJson](src/string/parseJson.ts)                       | 주어진 문자열을 JSON 객체로 파싱합니다.                                      | `parseJson('{"name": "Take", "age": 3}'); // { name: 'Take', age: 3 }` |
| [toCamelCase](src/string/toCamelCase.ts)                   | 문자열을 Camel case로 변환합니다.                                            | `toCamelCase('hello world'); // helloWorld`                            |
| [toPascalCase](src/string/toPascalCase.ts)                 | 문자열을 Pascal case로 변환합니다.                                           | `toPascalCase('hello world'); // HelloWorld`                           |
| [toRestfulFormat](src/string/toRestfulFormat.ts)           | 문자열을 RESTful API에서 사용 가능한 형태로 변환합니다.                      | `toRestfulFormat('hello world'); // hello-world`                       |
| [toSnakeCase](src/string/toSnakeCase.ts)                   | 문자열을 스네이크 케이스로 변환합니다.                                       | `toSnakeCase('hello world'); // hello_world`                           |
| [decode](src/decode.ts)                                    | 입력된 값 또는 수식을 검사해 적절한 값을 반환합니다.                         | `decode("1", "1", "One", "2", "Two", "Default"); // 결과: "One"`       |
| [formatBytes](src/formatBytes.ts)                          | 바이트 크기를 형식화된 문자열로 변환합니다.                                  | `formatBytes(1024); // '1 KB'`                                         |
| [generateUUID](src/generateUUID.ts)                        | 고유한 UUID(Universally Unique Identifier)를 생성합입니다.                   | `generateUUID(); // 'e89b9a5b-ff59-4c34-923b-7367b4a5b321'`            |
| [getAge](src/getAge.ts)                                    | 주어진 생년월일(YYMMDD)로 만 나이를 계산합니다.                              | `getAge("990101"); // 25 (2024년 10월 1일 기준)`                       |
| [getType](src/getType.ts)                                  | 주어진 객체의 타입을 문자열로 반환합니다.                                    | `getType('hello'); // 'String'`                                        |
| [isArray](src/isArray.ts)                                  | 주어진 값이 배열인지 확인합니다.                                             | `isArray([1, 2, 3]); // true`                                          |
| [isBoolean](src/isBoolean.ts)                              | 주어진 값이 부울형인지 확인합니다.                                           | `isBoolean(true); // true`                                             |
| [isEmpty](src/isEmpty.ts)                                  | 주어진 값이 비어 있는지 확인합니다.                                          | `isEmpty(null); // true`                                               |
| [isFunction](src/isFunction.ts)                            | 주어진 값이 함수인지 확인합니다.                                             | `isFunction(() => {}); // true`                                        |
| [isInt](src/isInt.ts)                                      | 주어진 값이 정수인지 확인합니다.                                             | `isInt(123); // true`                                                  |
| [isMobileDevice](src/isMobileDevice.ts)                    | 사용자가 모바일 기기에서 접속했는지 여부를 확인합니다.                       | `isMobileDevice(); // true`                                            |
| [isNull](src/isNull.ts)                                    | 주어진 값이 `undefined` 또는 `null`인지 확인합니다.                          | `isNull(null); // true`                                                |
| [isNumber](src/isNumber.ts)                                | 주어진 값이 숫자인지 확인합니다.                                             | `isNumber(123); // true`                                               |
| [isObject](src/isObject.ts)                                | 주어진 값이 객체인지 확인합니다.                                             | `isObject({}); // true`                                                |
| [isString](src/isString.ts)                                | 주어진 값이 문자열인지 확인합니다.                                           | `isString('hello'); // true`                                           |
| [isUndefined](src/isUndefined.ts)                          | 주어진 값이 undefined인지 확인합니다.                                        | `isUndefined(undefined); // true`                                      |
| [nvl](src/nvl.ts)                                          | 주어진 값이 `undefined`, `null`, 또는 빈 문자열인 경우 대체값을 반환합니다.  | `nvl(undefined, 'default'); // 'default'`                              |
| [toBoolean](src/toBoolean.ts)                              | 입력된 값을 boolean으로 변환합니다.                                          | `toBoolean('true'); // true`                                           |
| [toInt](src/toInt.ts)                                      | 입력된 값이 숫자로 변환 가능한지 확인하고, 가능한 경우 정수로 변환합니다.    | `toInt('123'); // 123`                                                 |
| [toString](src/toString.ts)                                | 주어진 값의 문자열 표현을 반환합니다.                                        | `toString(123); // '123'`                                              |

## 클래스 목록

이 패키지에서 제공하는 클래스 목록은 다음과 같습니다.

- [StorageItem](src/storage/StorageItem.ts): 로컬 스토리지에 저장된 데이터 항목을 나타내는 클래스입니다.
- [LocalStorageWorker](src/storage/LocalStorageWorker.ts): 브라우저의 로컬 스토리지를 사용하여 데이터를 저장하고 관리하기 위한 클래스입니다.
- [CredentialStorage](src/storage/CredentialStorage.ts): 브라우저의 로컬 스토리지를 사용하여 사용자의 로그인 정보를 저장하고 관리하는 클래스입니다.
