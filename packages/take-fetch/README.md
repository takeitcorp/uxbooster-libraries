# @uxbooster/take-fetch

이 패키지는 fetch API에 기능을 확장한 take-fetch을 제공합니다.

## 설치

```bash
npm install @uxbooster/take-fetch
```

## 기본 사용법

```typescript
import takeFetch from '@uxbooster/take-fetch';

async function fetchData() {
  try {
    const response = await takeFetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

## 옵션 사용법

### [기본 URL 설정 (baseUrl)]

기본 URL을 설정하면 상대 경로를 사용할 수 있습니다.

```typescript
import takeFetch from '@uxbooster/take-fetch';

const fetchWithBaseUrl = takeFetch({
  baseUrl: 'https://api.example.com',
});

async function fetchData() {
  try {
    const response = await fetchWithBaseUrl('/data'); // 실제 요청은 https://api.example.com/data
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### 기본 헤더 설정 (headers)

기본 헤더를 설정하여 모든 요청에 적용할 수 있습니다.

```typescript
import takeFetch from '@uxbooster/take-fetch';

const fetchWithHeaders = takeFetch({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-token',
  },
});

async function fetchData() {
  try {
    const response = await fetchWithHeaders('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### 인터셉터 설정 (interceptors)

요청 또는 응답 인터셉터를 설정하여 요청 전/후에 작업을 수행할 수 있습니다.

```typescript
import takeFetch, { TakeFetchArgs, TakeResponse } from '@uxbooster/take-fetch';

// 요청 인터셉터
const requestInterceptor = async (requestArgs: TakeFetchArgs): Promise<TakeFetchArgs> => {
  console.log('Request Interceptor:', requestArgs);
  return requestArgs;
};

// 응답 인터셉터
const responseInterceptor = async (
  response: TakeResponse,
  requestArgs: TakeFetchArgs,
): Promise<TakeResponse> => {
  console.log('Response Interceptor:', response);
  return response;
};

const fetchWithInterceptors = takeFetch({
  interceptors: {
    request: requestInterceptor,
    response: responseInterceptor,
  },
});

async function fetchData() {
  try {
    const response = await fetchWithInterceptors('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```
