/**
 * Fetch API를 확장하여 baseUrl, interceptor, default header 등의 기능을 제공하는 래퍼 함수입니다.
 * @packageDocumentation
 */

import { trackPromise } from 'react-promise-tracker';

/**
 * takeFetch 함수의 인수 타입입니다.
 * 문자열 또는 URL을 첫 번째 요소로, RequestInit을 두 번째 요소로 가집니다.
 * @throws {Error} fetch의 첫 번째 인자가 `Request` 객체인 경우 에러가 발생합니다.
 * @see {@link fetch}, {@link RequestInfo}, {@link Request}
 * @public
 */
export type TakeFetchArgs = [string | URL, RequestInit | undefined];

/**
 * takeFetch 함수의 반환 타입입니다.
 * @public
 */
export type TakeFetchReturn = Promise<TakeResponse>;

/**
 * fetch에서 사용할 수 있는 응답 유형을 정의합니다.
 * @public
 */
export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

/**
 * RequestInit를 상속받아 추가적인 fetch 설정을 제공하는 인터페이스입니다.
 * @public
 */
export interface TakeRequestInit extends RequestInit {
  params?: any;
  responseType?: ResponseType;
}

/**
 * takeFetch 함수의 타입입니다.
 * 사용자가 사용자 지정 takeFetch 함수를 작성하고자 할 때 유용합니다.
 * @public
 */
export type TakeFetch = typeof takeFetch;

/**
 * takeFetch 함수의 옵션 타입입니다.
 * @public
 */
export type TakeFetchOptions = {
  /**
   * `takeFetch` 함수에서 사용할 `fetch` 함수입니다.
   * 제공되지 않으면 전역 스코프에서 사용 가능한 `fetch` 함수가 사용됩니다.
   * `node-fetch`, `cross-fetch`, `isomorphic-fetch` 등의 어떤 fetch 구현도 사용할 수 있습니다.
   * `takeFetch`로 생성된 `fetch` 함수도 여기에 사용할 수 있습니다.
   * @public
   */
  fetch?: ReturnType<TakeFetch>;
  /**
   * fetch의 기본 URL입니다. fetch의 첫 번째 인수가 상대 URL인 경우 사용됩니다.
   * @public
   */
  baseUrl?: string | URL;
  /**
   * fetch의 기본 헤더입니다. fetch 호출 시 두 번째 인수에 `headers` 속성이 없는 경우 사용됩니다.
   * 제공되고 호출할 때 `fetch`에 `headers`도 제공되는 경우 헤더가 병합됩니다.
   * 헤더의 우선 순위는 `requestInit.headers` > `defaultOptions.headers`입니다. 중복된 헤더는 덮어씌워집니다.
   * @public
   */
  headers?: HeadersInit;
  /**
   * fetch의 credentials입니다. 요청에 쿠키를 보낼지를 제어합니다.
   * 기본값은 `'same-origin'`입니다.
   * `'include'`로 설정하면 크로스 오리진 및 동일 오리진 요청 모두에 쿠키가 전송됩니다.
   * `'omit'`으로 설정하면 요청에 쿠키가 전송되지 않습니다.
   * @public
   */
  credentials?: RequestCredentials;
  /**
   * 요청 및 응답을 위한 인터셉터입니다.
   * @public
   */
  interceptors?: {
    /**
     * 요청 인터셉터입니다. 요청 전에 호출됩니다.
     * @param requestArgs fetch 함수의 인수입니다.
     * @param fetch {@link TakeFetchOptions['fetch']}에서 제공한 fetch 함수입니다.
     * @public
     */
    request?: (
      requestArgs: TakeFetchArgs,
      fetch: NonNullable<TakeFetchOptions['fetch']>,
    ) => Promise<TakeFetchArgs>;
    /**
     * 응답 인터셉터입니다. 응답 후에 호출됩니다.
     * @param response fetch 함수에서 받은 응답 객체입니다.
     * @param requestArgs fetch 함수의 인수입니다.
     * @param fetch {@link TakeFetchOptions['fetch']}에서 제공한 fetch 함수입니다.
     * @public
     */
    response?: (
      response: TakeResponse,
      requestArgs: TakeFetchArgs,
      fetch: NonNullable<TakeFetchOptions['fetch']>,
    ) => Promise<TakeResponse>;
  };
};

/**
 * 응답 객체를 확장한 TakeResponse 클래스입니다.
 * elapsedTime 속성을 추가하여 응답의 경과 시간을 기록합니다.
 * @public
 */
export class TakeResponse extends Response {
  elapsedTime?: number;
}

/**
 * 기본 옵션을 적용하여 fetch의 인수를 변경합니다.
 * @param args takeFetch 함수에 전달된 fetch의 인수입니다.
 * @param defaultOptions takeFetch 함수의 기본 옵션입니다.
 * @returns 변경된 fetch의 인수입니다.
 */
const applyDefaultOptions = (
  [input, requestInit]: TakeFetchArgs,
  defaultOptions?: TakeFetchOptions,
): TakeFetchArgs => {
  const headers = new Headers(defaultOptions?.headers);
  new Headers(requestInit?.headers).forEach((value, key) => {
    headers.set(key, value);
  });

  let inputToReturn: TakeFetchArgs[0] = input;
  if (defaultOptions?.baseUrl) {
    inputToReturn = new URL(input, defaultOptions.baseUrl);
  }

  return [
    inputToReturn,
    {
      ...requestInit,
      headers,
    },
  ];
};

/**
 * Request 객체와 RequestInit 객체를 병합하여 새로운 RequestInit 객체를 생성합니다.
 * @param request Request 객체입니다.
 * @param requestInit RequestInit 객체입니다.
 * @returns 병합된 RequestInit 객체입니다.
 */
const mergeRequestObjectWithRequestInit = (
  request: Request,
  requestInit?: RequestInit,
): Promise<RequestInit> => {
  const mergedRequest = new Request(request, requestInit);
  return new Response(mergedRequest.body).arrayBuffer().then(body => ({
    method: mergedRequest.method,
    headers: mergedRequest.headers,
    body,
    referrer: mergedRequest.referrer,
    referrerPolicy: mergedRequest.referrerPolicy,
    mode: mergedRequest.mode,
    credentials: mergedRequest.credentials,
    cache: mergedRequest.cache,
    redirect: mergedRequest.redirect,
    integrity: mergedRequest.integrity,
    keepalive: mergedRequest.keepalive,
    signal: mergedRequest.signal,
    window: requestInit?.window,
  }));
};

/**
 * fetch 함수의 인수를 표준화합니다.
 * @param args fetch 함수에 전달된 인수입니다.
 * @returns 표준화된 fetch 함수의 인수입니다.
 */
const normalizeArgs = async (...args: Parameters<typeof fetch>): Promise<TakeFetchArgs> => {
  try {
    let input: string | URL;
    let requestInit: RequestInit | undefined;
    if (args[0] instanceof Request) {
      const [request, init] = args;
      input = request.url;
      requestInit = await mergeRequestObjectWithRequestInit(request, init);
    } else {
      const [inputArg, requestInitArg] = args;
      input = inputArg;
      requestInit = requestInitArg;
    }

    return [input, requestInit];
  } catch (error: any) {
    throw new Error(`인수를 표준화하는 중에 오류가 발생했습니다: ${error.message}`);
  }
};

/**
 * fetch를 수행하고 응답을 반환합니다.
 * @param options takeFetch 함수의 옵션입니다.
 * @returns fetch를 수행한 결과인 응답 객체를 반환합니다.
 *
 * @example
 * ```typescript
 * import takeFetch, { TakeFetchOptions } from '@uxbooster/take-fetch';
 *
 * // 기본 fetch 함수를 사용하여 GET 요청을 보냅니다.
 * const response = await takeFetch()('https://api.example.com/data');
 * console.log(response);
 *
 * // 옵션을 제공하여 POST 요청을 보냅니다.
 * const options: TakeFetchOptions = {
 *   headers: {
 *     'Content-Type': 'application/json',
 *     'Authorization': 'Bearer myAccessToken',
 *   },
 * };
 * const response2 = await takeFetch(options)('https://api.example.com/postData', {
 *   method: 'POST',
 *   body: JSON.stringify({ key: 'value' }),
 * });
 * console.log(response2);
 * ```
 * @public
 */
export const takeFetch =
  (options?: TakeFetchOptions) =>
  async (...args: Parameters<typeof fetch>): Promise<TakeResponse> => {
    try {
      const { credentials, ...restOptions } = options || {};
      const startTime = new Date().getTime();
      const defaultOptionAppliedArgs = applyDefaultOptions(
        await normalizeArgs(...args),
        restOptions,
      );
      const providedFetch = restOptions?.fetch || fetch;

      let requestInterceptorAppliedArgs: TakeFetchArgs;
      if (restOptions?.interceptors?.request) {
        requestInterceptorAppliedArgs = await restOptions?.interceptors?.request?.(
          defaultOptionAppliedArgs,
          providedFetch,
        );
      } else {
        requestInterceptorAppliedArgs = defaultOptionAppliedArgs;
      }

      const [input, requestInit] = requestInterceptorAppliedArgs;
      const finalRequestInit = {
        ...requestInit,
        credentials: credentials || 'same-origin',
      };

      const response = await trackPromise(providedFetch(input, finalRequestInit));

      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;

      const responseWithElapsedTime = new TakeResponse(response.body, response);
      responseWithElapsedTime.elapsedTime = elapsedTime;

      return await (restOptions?.interceptors?.response?.(
        responseWithElapsedTime,
        requestInterceptorAppliedArgs,
        providedFetch,
      ) || responseWithElapsedTime);
    } catch (error: any) {
      console.error(error);
      throw new Error(`takeFetch를 실행하는 중에 오류가 발생했습니다: ${error.message}`);
    }
  };
