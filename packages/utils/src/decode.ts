/**
 * 입력된 값 또는 수식을 검사해 적절한 값을 반환합니다.
 *
 * @template T 반환값의 타입
 * @param compareValue 비교값
 * @param casesAndDefault CASE, 결과값 쌍의 리스트와 디폴트 값
 * @returns 선택된 값
 * @throws You must provide at least one case and a default value.
 *
 * @example
 * decode("1", "1", "One", "2", "Two", "Default"); // 결과: "One"
 * decode(100, 1, "일", 10, "십", 100, "백", "디폴트"); // 결과: "백"
 * decode("unknown", "1", "One", "2", "Two", "Default"); // 결과: "Default"
 */
export const decode = <T = any>(compareValue: any, ...casesAndDefault: any[]): T => {
  if (casesAndDefault.length < 2) {
    throw new Error('You must provide at least one case and a default value.');
  }

  for (let i = 0; i < casesAndDefault.length - 1; i += 2) {
    const caseValue = casesAndDefault[i];
    const resultValue = casesAndDefault[i + 1];

    if (compareValue === caseValue) {
      return resultValue as T;
    }
  }

  // 마지막 값은 디폴트 값
  return casesAndDefault[casesAndDefault.length - 1] as T;
};
