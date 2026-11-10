/**
 * 객체를 복사하여 동일한 내용을 가진 새로운 객체를 반환합니다.
 *
 * @param data 원본 데이터 객체
 * @returns 원본과 동일한 key-value를 가진 새로운 객체
 *
 * @example
 * ```ts
 * const detailData = { id: 1, name: "Alice", age: 25 };
 * const copiedData = copyObject(detailData);
 * console.log(copiedData);
 * // 출력: { id: 1, name: "Alice", age: 25 }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 반환 타입은 기존 사용처(임의 속성 접근) 호환을 위해 any 유지
export function copyObject<T extends object>(data: T): Record<string, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 반환 타입과 동일
  return Object.keys(data).reduce((acc: Record<string, any>, key) => {
    acc[key] = data[key as keyof T];
    return acc;
  }, {});
}
