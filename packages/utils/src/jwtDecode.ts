/**
 * JWT 디코딩에 사용할 옵션을 정의하는 인터페이스입니다.
 */
export interface JwtDecodeOptions {
  /**
   * JWT의 헤더 부분을 반환할지 여부를 설정합니다.
   * 기본값은 `false`이며, `true`일 경우 헤더를 반환합니다.
   */
  header?: boolean;
}

/**
 * JWT의 헤더 구조를 나타내는 인터페이스입니다.
 */
export interface JwtHeader {
  /**
   * 토큰 타입 (예: "JWT")
   */
  typ?: string;

  /**
   * 알고리즘 (예: "HS256")
   */
  alg?: string;

  /**
   * 키 식별자
   */
  kid?: string;
}

/**
 * JWT 페이로드 구조를 나타내는 인터페이스입니다.
 */
export interface JwtPayload {
  /**
   * 토큰 발급자 (Issuer)
   */
  iss?: string;

  /**
   * 주체 (Subject)
   */
  sub?: string;

  /**
   * 대상 (Audience)
   * 하나의 문자열 또는 문자열 배열일 수 있습니다.
   */
  aud?: string[] | string;

  /**
   * 만료 시간 (Expiration Time)
   */
  exp?: number;

  /**
   * 사용 가능 시작 시간 (Not Before)
   */
  nbf?: number;

  /**
   * 발급 시간 (Issued At)
   */
  iat?: number;

  /**
   * JWT ID (JWT ID)
   */
  jti?: string;
}

/**
 * 유효하지 않은 토큰을 나타내는 에러 클래스입니다.
 */
export class InvalidTokenError extends Error {}

InvalidTokenError.prototype.name = 'InvalidTokenError';

/**
 * URL-safe Base64 문자열을 디코딩하여 유니코드 문자열을 반환합니다.
 *
 * @param str 디코딩할 Base64 문자열
 * @returns 디코딩된 유니코드 문자열
 */
function decodeBase64UrlToUnicode(str: string): string {
  return decodeURIComponent(
    atob(str).replace(/(.)/g, (_m, p) => {
      let code = (p as string).charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = '0' + code;
      }
      return '%' + code;
    }),
  );
}

/**
 * Base64 URL-safe 형식의 문자열을 디코딩합니다.
 *
 * @param str Base64 URL-safe 문자열
 * @returns 디코딩된 문자열
 * @throws {Error} 잘못된 길이의 Base64 문자열이 들어오면 오류를 발생시킵니다.
 */
function decodeBase64Url(str: string): string {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw new Error('Base64 문자열의 길이가 올바르지 않습니다.');
  }

  try {
    return decodeBase64UrlToUnicode(output);
  } catch (err) {
    return atob(output);
  }
}

/**
 * JWT 문자열을 디코딩하여 헤더 또는 페이로드를 반환하는 함수입니다.
 *
 * @param token 디코딩할 JWT 문자열
 * @param options 디코딩 옵션. `header: true`일 경우 헤더를 반환하고, 그렇지 않으면 페이로드를 반환합니다.
 * @returns 디코딩된 JWT 객체
 * @throws {InvalidTokenError} 유효하지 않은 토큰이 입력되었을 경우 오류를 발생시킵니다.
 *
 * @example
 * // 헤더를 디코딩하는 예제
 * const header = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', { header: true });
 * console.log(header);
 * // 출력 예: { "alg": "HS256", "typ": "JWT" }
 *
 * @example
 * // 페이로드를 디코딩하는 예제
 * const payload = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
 * console.log(payload);
 * // 출력 예: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
 */
export function jwtDecode<T = JwtHeader>(
  token: string,
  options: JwtDecodeOptions & { header: true },
): T;
export function jwtDecode<T = JwtPayload>(token: string, options?: JwtDecodeOptions): T;
export function jwtDecode<T = JwtHeader | JwtPayload>(
  token: string,
  options?: JwtDecodeOptions,
): T {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('유효하지 않은 토큰입니다: 문자열이어야 합니다.');
  }

  options = options || {};

  const pos = options.header === true ? 0 : 1;
  const part = token.split('.')[pos];

  if (typeof part !== 'string') {
    throw new InvalidTokenError(`유효하지 않은 토큰입니다: ${pos + 1}번째 부분이 누락되었습니다.`);
  }

  let decoded: string;
  try {
    decoded = decodeBase64Url(part);
  } catch (e) {
    throw new InvalidTokenError(
      `유효하지 않은 토큰입니다: ${pos + 1}번째 부분의 Base64 형식이 잘못되었습니다. (${(e as Error).message})`,
    );
  }

  try {
    return JSON.parse(decoded) as T;
  } catch (e) {
    throw new InvalidTokenError(
      `유효하지 않은 토큰입니다: ${pos + 1}번째 부분의 JSON 형식이 잘못되었습니다. (${(e as Error).message})`,
    );
  }
}
