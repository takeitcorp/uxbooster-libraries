/**
 * @jest-environment jsdom
 */

import { describe, it, expect, beforeAll, afterEach } from '@jest/globals';
import { isMobileDevice } from './isMobileDevice';

describe('isMobileDevice function', () => {
  let originalUserAgent: string;

  beforeAll(() => {
    // 테스트 전에 원래의 userAgent 값을 저장
    originalUserAgent = navigator.userAgent;
  });

  afterEach(() => {
    // 각 테스트가 끝난 후 userAgent를 원래대로 복원
    setUserAgent(originalUserAgent);
  });

  const setUserAgent = (userAgent: string) => {
    Object.defineProperty(navigator, 'userAgent', {
      value: userAgent,
      writable: true,
      configurable: true,
    });
  };

  it('Android 기기에서 접속한 경우', () => {
    setUserAgent(
      'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Mobile Safari/537.36',
    );
    expect(isMobileDevice()).toBe(true);
  });

  it('iPhone 기기에서 접속한 경우', () => {
    setUserAgent(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    );
    expect(isMobileDevice()).toBe(true);
  });

  it('iPad 기기에서 접속한 경우', () => {
    setUserAgent(
      'Mozilla/5.0 (iPad; CPU OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    );
    expect(isMobileDevice()).toBe(true);
  });

  it('데스크톱에서 접속한 경우', () => {
    setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
    );
    expect(isMobileDevice()).toBe(false);
  });
});
