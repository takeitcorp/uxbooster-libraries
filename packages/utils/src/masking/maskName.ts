/**
 * 주어진 이름 문자열을 마스킹하여 반환합니다.
 * - 한국어 이름인 경우: 두 번째 글자부터 마스킹합니다. (예: '홍길동' → '홍*동')
 * - 비한국어 이름인 경우:
 *   - 길이가 3 미만이면 마스킹하지 않습니다.
 *   - 길이가 3 이상이면 양쪽 가장자리 일부를 제외한 나머지를 마스킹합니다.
 *
 * @param name - 마스킹할 이름 문자열
 * @returns 마스킹된 이름 문자열
 *
 * @example
 * maskName('홍길동'); // "홍*동"
 *
 * @example
 * maskName('John Doe'); // "Jo** *oe"
 */
export function maskName(name: string): string {
  if (isKoreanName(name)) {
    switch (name.length) {
      case 2:
        return name.replace(/([가-힣])([가-힣]+)/, '$1*');
      default:
        return maskExceptForEdge(name, 1);
    }
  } else {
    if (name.length < 3) {
      return name;
    }

    const unmaskedSideSize = name.length < 6 ? 1 : 2;
    return maskExceptForEdge(name, unmaskedSideSize);
  }
}

/**
 * 주어진 문자열이 한국어 이름인지 확인합니다.
 *
 * @param name - 확인할 문자열
 * @returns 문자열이 한국어 이름인지 여부
 */
function isKoreanName(name: string) {
  return /[가-힣]{2,}/.test(name);
}

/**
 * 문자열에서 양쪽 가장자리를 제외한 나머지 부분을 마스킹합니다.
 *
 * @param text - 마스킹할 문자열
 * @param edgeSize - 마스킹하지 않을 양쪽 가장자리의 길이
 * @returns 마스킹된 문자열
 */
function maskExceptForEdge(text: string, edgeSize: number) {
  return (
    text.slice(0, edgeSize) +
    text.slice(edgeSize, text.length - edgeSize).replace(/[a-zA-Z가-힣]/g, '*') +
    text.slice(text.length - edgeSize, text.length)
  );
}
