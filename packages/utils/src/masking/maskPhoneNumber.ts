/**
 * 주어진 전화번호 문자열을 마스킹하여 반환합니다.
 * - 하이픈(-)으로 구분된 경우: 중간 번호를 마스킹합니다. (예: '010-1234-5678' → '010-****-5678')
 * - 서울 전화번호(02로 시작하는 경우): 중간 번호를 마스킹합니다. (예: '0212345678' → '02****5678')
 * - 일반 전화번호: 중간 번호를 마스킹합니다. (예: '01012345678' → '010****5678')
 *
 * @param phoneNumber - 마스킹할 전화번호 문자열
 * @returns 마스킹된 전화번호 문자열
 *
 * @example
 * maskPhoneNumber('010-1234-5678'); // "010-****-5678"
 *
 * @example
 * maskPhoneNumber('0212345678'); // "02****5678"
 */
export function maskPhoneNumber(phoneNumber: string) {
  if (isHyphenSeparated(phoneNumber)) {
    return phoneNumber.replace(
      /^(\d{2,3})-(\d{3,4})-(\d{4})$/,
      (_, p1, p2, p3) => `${p1}-${maskAll(p2)}-${p3}`,
    );
  }
  if (isSeoulPhoneNumber(phoneNumber)) {
    return phoneNumber.replace(/^02(\d{3,4})(\d{4})/, (_, p1, p2) => `02${maskAll(p1)}${p2}`);
  }
  return phoneNumber.replace(
    /^(\d{3})(\d{3,4})(\d{4})/,
    (_, p1, p2, p3) => `${p1}${maskAll(p2)}${p3}`,
  );
}

/**
 * 주어진 문자열의 모든 문자를 '*'로 대체합니다.
 *
 * @param str - 마스킹할 문자열
 * @returns '*'로 마스킹된 문자열
 */
function maskAll(str: string) {
  return str.replace(/./g, '*');
}

/**
 * 주어진 전화번호가 하이픈(-)으로 구분된 형식인지 확인합니다.
 *
 * @param phoneNumber - 확인할 전화번호 문자열
 * @returns 하이픈으로 구분된 형식인지 여부
 */
function isHyphenSeparated(phoneNumber: string) {
  return /^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber);
}

/**
 * 주어진 전화번호가 서울 전화번호(02로 시작)인지 확인합니다.
 *
 * @param phoneNumber - 확인할 전화번호 문자열
 * @returns 서울 전화번호인지 여부
 */
function isSeoulPhoneNumber(phoneNumber: string) {
  return /^02\d+$/.test(phoneNumber);
}
