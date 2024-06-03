import { utcToZonedTime } from 'date-fns-tz';

const TZ = 'Asia/Seoul';

/**
 * 지정된 시간대의 현재 날짜를 가져옵니다.
 *
 * @param timezone - 시간대 문자열 (기본값은 'Asia/Seoul'입니다).
 * @returns 지정된 시간대의 현재 날짜.
 *
 * @example
 * // 현재 시각을 Asia/Seoul 시간대로 변환하여 반환
 * getCurrentDate();
 */
export const getCurrentDate = (timezone: string = TZ): Date => utcToZonedTime(Date.now(), timezone);
