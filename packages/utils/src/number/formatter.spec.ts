import { describe, it, expect } from '@jest/globals';
import { ceilToUnit, floorToUnit, roundToUnit } from './formatter';

describe('Formatter Functions', () => {
  it('should round up "value" by "unit"', () => {
    expect(ceilToUnit(320980, 10000)).toBe(330000);
    expect(ceilToUnit(1234.56, 10)).toBe(1240);
    expect(ceilToUnit(1234, 1)).toBe(1234);
    expect(ceilToUnit(1206, -1)).toBe(1206);
  });
  it('should round down "value" by "unit"', () => {
    expect(floorToUnit(320980, 10000)).toBe(320000);
    expect(floorToUnit(1234.56, 10)).toBe(1230);
    expect(floorToUnit(1234, 1)).toBe(1234);
    expect(floorToUnit(1206, -1)).toBe(1206);
  });

  it('should round "value" by "unit"', () => {
    expect(roundToUnit(320980, 1000)).toBe(321000);
    expect(roundToUnit(1234.56, 10)).toBe(1230);
    expect(roundToUnit(1234, 1)).toBe(1234);
    expect(roundToUnit(1206, -1)).toBe(1206);
  });
});
