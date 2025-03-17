import { format, formatDistanceToNow } from 'date-fns';
import { ko, enUS } from 'date-fns/locale';

import { convertStringToDate } from './convertStringToDate';

/**
 * 주어진 날짜를 상대적 시간(예: "2일 전", "약 3시간 전") 또는 특정 형식(예: "2024년 3월 17일 일요일 오후 3:45")으로 변환합니다.
 *
 * - 3일 미만: "x분 전", "y시간 전" 등의 상대적 표현 사용
 * - 3일 이상: "2024년 3월 17일 일요일 오후 3:45" 형식으로 반환
 *
 * @param {string} dateInput 변환할 날짜 문자열 또는 Date 객체.
 * @param {string} locale 로케일 ('ko': 한국어, 'en': 영어)
 * @returns {string} 변환된 날짜 문자열
 *
 * @example
 * ```ts
 * formatRelativeDate('2025-03-17T14:30:00Z', 'ko'); // "약 2시간 전"
 * formatRelativeDate('2025-03-14T08:00:00Z', 'en'); // "Mar 14, 2025 Fri 8:00 AM"
 * formatRelativeDate('2025-03-17T00:00:00Z'); // "2일 전" 또는 "약 x시간 전"
 * ```
 */
export const formatRelativeDate = (dateInput: string | Date, locale: string = 'ko'): string => {
  const date = convertStringToDate(dateInput);

  const now = Date.now();
  const diffInSeconds = (now - date.getTime()) / 1000;

  if (diffInSeconds < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(date, { addSuffix: true, locale: locale === 'ko' ? ko : enUS });
  }

  return format(date, 'PPP EEE p', { locale: locale === 'ko' ? ko : enUS });
};
