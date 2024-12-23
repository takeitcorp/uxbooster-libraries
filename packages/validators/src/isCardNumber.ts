/**
 * 주어진 문자열이 유효한 카드 번호 형식인지 확인합니다.
 * 카드 번호는 16자리 숫자여야 하며, Luhn 알고리즘을 통해 검증됩니다.
 *
 * @param v - 확인할 카드 번호 문자열입니다.
 * @returns 주어진 카드 번호가 유효한 카드 번호 형식이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 *
 * @example
 * // true
 * isCardNumber('4111111111111111');
 *
 * @example
 * // false
 * isCardNumber('4111-1111-1111-111');
 *
 * @example
 * // false
 * isCardNumber('1234-5678-9876-5432');
 */
export function isCardNumber(v: string | null | undefined): boolean {
  if (!v || typeof v !== 'string') return false;

  // 공백, 하이픈 제거
  const cardNumber = v.replace(/[\s-]/g, '');

  // 카드 번호는 13~19자리 숫자여야 한다.
  if (cardNumber.length < 13 || cardNumber.length > 19 || isNaN(Number(cardNumber))) {
    return false;
  }

  // Luhn 알고리즘 적용
  let sum = 0;
  let shouldDouble = false;

  // 카드 번호의 마지막에서 첫 번째 자리까지 검사
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // Luhn 알고리즘 결과가 0으로 나누어떨어지면 유효한 카드 번호
  return sum % 10 === 0;
}
