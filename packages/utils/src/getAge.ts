/**
 * 주어진 생년월일(YYMMDD)로 만 나이를 계산합니다.
 *
 * @param birthDate - 생년월일, 6자리 문자열 형식(YYMMDD).
 * @returns 만 나이를 반환합니다. 유효하지 않은 형식의 경우 -1을 반환합니다.
 *
 * @example
 * getAge("990101"); // 25 (2024년 기준)
 * getAge("030505"); // 21 (2024년 기준)
 * getAge("invalid"); // -1
 * getAge("991231"); // 25 (2024년 기준)
 */
export function getAge(birthDate: string): number {
  if (!/^\d{6}$/.test(birthDate)) {
    return -1; // 형식이 유효하지 않은 경우
  }

  const year = parseInt(birthDate.slice(0, 2), 10);
  const month = parseInt(birthDate.slice(2, 4), 10);
  const day = parseInt(birthDate.slice(4, 6), 10);

  // 2000년 이후의 경우와 이전의 경우를 구분
  const currentYear = new Date().getFullYear();
  const fullYear = year < 30 ? 2000 + year : 1900 + year; // 30보다 작으면 2000년대, 그렇지 않으면 1900년대

  const currentDate = new Date();
  const birthDateThisYear = new Date(currentYear, month - 1, day); // 올해의 생일 날짜

  const age = currentYear - fullYear;

  // 생일이 아직 지나지 않았다면 나이를 1 줄임
  if (currentDate < birthDateThisYear) {
    return age - 1;
  }

  return age;
}
