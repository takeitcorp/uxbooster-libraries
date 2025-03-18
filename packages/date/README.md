# @uxbooster/date

이 패키지는 날짜 관련 유틸리티 함수들을 제공합니다.

## 설치

```bash
npm install @uxbooster/date
```

## 사용법

```typescript
import { formatDate } from '@uxbooster/date';

const formattedDate = formatDate(new Date(), 'yyyy년 MM월 dd일');
console.log(formattedDate); // 예: 2024년 05월 30일
```

## 함수 목록

이 패키지에서 제공하는 함수 목록은 다음과 같습니다.

| 함수 이름                                                           | 설명                                                                                                                        | 예제                                                                 |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [convertDateToFormattedString](src/convertDateToFormattedString.ts) | `Date` 객체를 'yyyyMMdd' 형식의 형식화된 문자열로 변환합니다.                                                               | `convertDateToFormattedString(new Date(2024, 0, 1))`                 |
| [convertStringToDate](src/convertStringToDate.ts)                   | 날짜 문자열 또는 `Date` 객체를 지정된 시간대의 `Date` 객체로 변환합니다.                                                    | `convertStringToDate('2024-01-01')`                                  |
| [convertStringToDateFormat](src/convertStringToDateFormat.ts)       | 날짜 문자열 또는 `Date` 객체를 형식화된 날짜 문자열로 변환합니다.                                                           | `convertStringToDateFormat('2024-01-01T00:00:00+09:00')`             |
| [formatDate](src/formatDate.ts)                                     | 주어진 형식 문자열과 한국어 로케일을 사용하여 날짜를 형식화합니다.                                                          | `formatDate(new Date(2024, 0, 1), 'PPPP')`                           |
| [formatRelativeDate](src/formatRelativeDate.ts)                     | 주어진 날짜를 상대적 시간(예: "방금 전", "3시간 전") 또는 특정 형식(예: "2024년 3월 17일 일요일 오후 3:45")으로 변환합니다. | `formatRelativeDate('2025-03-17T14:30:00Z', 'ko'); // "약 2시간 전"` |
| [getCurrentDate](src/getCurrentDate.ts)                             | 지정된 시간대의 현재 날짜를 가져옵니다.                                                                                     | `getCurrentDate('Asia/Seoul')`                                       |
| [parseDateString](src/parseDateString.ts)                           | 날짜 문자열을 구문 분석하여 `Date` 객체를 반환합니다.                                                                       | `parseDateString('2024-01-01')`                                      |
