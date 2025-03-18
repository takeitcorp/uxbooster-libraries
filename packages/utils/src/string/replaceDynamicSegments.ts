/**
 * 메뉴 URL에서 Next.js의 동적 세그먼트(`[param]`, `[...param]`, `[[...param]]`)를 실제 값으로 대체합니다.
 *
 * @param menuUrl - 동적 세그먼트를 포함한 메뉴 URL (`/post/[id]`, `/category/[...slug]` 등)
 * @param menuParam - JSON 형식의 문자열로 전달되는 URL 파라미터 (`{"id":"123"}` 또는 `{"slug":["news","tech"]}`)
 * @returns 동적 세그먼트가 실제 값으로 치환된 URL
 *
 * @example
 * ```ts
 * replaceDynamicSegments("/post/[id]", '{"id":"123"}');
 * // "/post/123"
 *
 * replaceDynamicSegments("/category/[...slug]", '{"slug":["news","tech"]}');
 * // "/category/news/tech"
 *
 * replaceDynamicSegments("/dashboard/[[...path]]", '{"path":["settings","profile"]}');
 * // "/dashboard/settings/profile"
 * ```
 */
export const replaceDynamicSegments = (menuUrl: string, menuParam: string): string => {
  if (!menuParam) return menuUrl;

  let params: Record<string, string | string[]>;
  try {
    params = JSON.parse(menuParam);
  } catch (error) {
    console.error('Invalid JSON in menuParam:', menuParam);
    return menuUrl;
  }

  return menuUrl.replace(/\[\[?\.\.\.]?(\w+)\]?\]|\[(\w+)\]/g, (_, spreadKey, normalKey) => {
    const key = spreadKey || normalKey;
    const value = params[key];

    if (value === undefined) return `[${key}]`; // 값이 없으면 원본 유지
    if (Array.isArray(value)) return value.join('/');
    return typeof value === 'string' ? value : '';
  });
};
