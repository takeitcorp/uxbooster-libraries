/**
 * 고유한 UUID(Universally Unique Identifier)를 생성하는 함수입니다.
 *
 * 이 함수는 UUID v4 형식을 사용하여 고유한 식별자를 생성합니다.
 * UUID는 16진수로 구성되며, 형식은 `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`입니다.
 * 이 함수는 Math.random()을 사용하여 랜덤 값을 생성하고, 이를 기반으로 UUID의 각 자리를 채웁니다.
 *
 * @returns {string} 고유한 UUID 문자열
 *
 * @example
 * const uuid = generateUUID();
 * console.log(uuid); // 예: 'e89b9a5b-ff59-4c34-923b-7367b4a5b321'
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
