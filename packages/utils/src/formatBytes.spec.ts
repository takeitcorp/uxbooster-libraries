import { describe, it, expect } from '@jest/globals';
import { formatBytes } from './formatBytes';

describe('formatBytes', () => {
  it('should format bytes correctly', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
    expect(formatBytes(1024)).toBe('1.00 KB');
    expect(formatBytes(1048576)).toBe('1.00 MB');
    expect(formatBytes(1073741824)).toBe('1.00 GB');
  });

  it('should format bytes with different decimal places', () => {
    expect(formatBytes(1024, 0)).toBe('1 KB');
    expect(formatBytes(1024, 1)).toBe('1.0 KB');
    expect(formatBytes(1024, 3)).toBe('1.000 KB');
  });

  it('should handle large byte sizes correctly', () => {
    expect(formatBytes(1e12)).toBe('931.32 GB');
    expect(formatBytes(1e15)).toBe('909.49 TB');
    expect(formatBytes(1e18)).toBe('888.18 PB');
  });

  it('should handle negative decimal places by using 0', () => {
    expect(formatBytes(1024, -1)).toBe('1 KB');
  });

  it('should handle non-integer byte sizes correctly', () => {
    expect(formatBytes(1024.5)).toBe('1.00 KB');
    expect(formatBytes(1048576.78)).toBe('1.00 MB');
  });
});
