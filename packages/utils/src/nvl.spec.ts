import { describe, it, expect } from '@jest/globals';
import { nvl } from './nvl';

describe('nvl function', () => {
  it('should return default value if input value is undefined', () => {
    expect(nvl(undefined, 'default')).toBe('default');
  });

  it('should return default value if input value is null', () => {
    expect(nvl(null, 'default')).toBe('default');
  });

  it('should return default value if input value is empty string', () => {
    expect(nvl('', 'default')).toBe('default');
  });

  it('should return input value if it is not undefined, null, or empty string', () => {
    expect(nvl('value', 'default')).toBe('value');
  });

  it('should return input value even if default value is provided', () => {
    expect(nvl('value', 'default')).toBe('value');
  });
});
