import { describe, it, expect } from '@jest/globals';
import { replaceDynamicSegments } from './replaceDynamicSegments';

describe('replaceDynamicSegments', () => {
  it('단일 동적 세그먼트 치환', () => {
    expect(replaceDynamicSegments('/post/[id]', '{"id":"123"}')).toBe('/post/123');
  });

  it('다중 동적 세그먼트 치환', () => {
    expect(
      replaceDynamicSegments('/category/[category]/post/[id]', '{"category":"tech","id":"456"}'),
    ).toBe('/category/tech/post/456');
  });

  it('배열 값이 들어갈 경우 [...slug] 변환', () => {
    expect(replaceDynamicSegments('/tags/[...tags]', '{"tags":["news","tech"]}')).toBe(
      '/tags/news/tech',
    );
  });

  it('배열 값이 들어갈 경우 [[...param]] 변환', () => {
    expect(
      replaceDynamicSegments('/dashboard/[[...path]]', '{"path":["settings","profile"]}'),
    ).toBe('/dashboard/settings/profile');
  });

  it('치환할 값이 없는 경우 원본 유지', () => {
    expect(replaceDynamicSegments('/post/[id]', '{}')).toBe('/post/[id]');
  });

  it('일부 값이 없는 경우 해당 세그먼트만 유지', () => {
    expect(replaceDynamicSegments('/category/[category]/post/[id]', '{"category":"tech"}')).toBe(
      '/category/tech/post/[id]',
    );
  });

  it('값이 없을 경우 빈 문자열로 치환', () => {
    expect(replaceDynamicSegments('/user/[username]', '{"username":""}')).toBe('/user/');
  });

  it('menuParam이 null일 경우 원본 유지', () => {
    expect(replaceDynamicSegments('/profile/[user]', null as unknown as string)).toBe(
      '/profile/[user]',
    );
  });

  it('menuParam이 빈 문자열일 경우 원본 유지', () => {
    expect(replaceDynamicSegments('/profile/[user]', '')).toBe('/profile/[user]');
  });

  it('유효하지 않은 JSON이 들어올 경우 원본 유지', () => {
    expect(replaceDynamicSegments('/order/[id]', '{"id":123')).toBe('/order/[id]');
  });

  it('경로에 동적 세그먼트가 없을 경우 그대로 반환', () => {
    expect(replaceDynamicSegments('/about', '{"id":"123"}')).toBe('/about');
  });

  it('배열이 아닌 값이 들어가야 할 때 배열이 전달된 경우 첫 번째 값만 사용', () => {
    expect(replaceDynamicSegments('/user/[id]', '{"id":["789","101"]}')).toBe('/user/789/101');
  });

  it('여러 개의 [...params]가 있을 경우 각각 변환', () => {
    expect(
      replaceDynamicSegments(
        '/section/[...section]/page/[...page]',
        '{"section":["docs","api"],"page":["1"]}',
      ),
    ).toBe('/section/docs/api/page/1');
  });
});
