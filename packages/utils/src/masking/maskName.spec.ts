import { describe, it, expect } from '@jest/globals';
import { maskName } from './maskName';

describe('maskName', () => {
  it('한국어 이름 (길이 2)', () => {
    expect(maskName('노혁')).toBe('노*');
    expect(maskName('홍설')).toBe('홍*');
  });
  it('한국어 이름 (길이 3)', () => {
    expect(maskName('테이크')).toBe('테*크');
    expect(maskName('권하나')).toBe('권*나');
    expect(maskName('제갈훈')).toBe('제*훈');
  });
  it('한국어 이름 (길이 4)', () => {
    expect(maskName('황보인욱')).toBe('황**욱');
    expect(maskName('안빛가람')).toBe('안**람');
  });
  it('한국어 이름 (길이 5)', () => {
    expect(maskName('크리스티나')).toBe('크***나');
    expect(maskName('레오나르도')).toBe('레***도');
    expect(maskName('세바스티안')).toBe('세***안');
  });
  it('한국어 이름 (길이 6 이상)', () => {
    expect(maskName('손고장난벽시')).toBe('손****시');
    expect(maskName('박초롱초롱빛나리')).toBe('박******리');
    expect(maskName('황금독수리온세상을놀라게하다')).toBe('황************다');
  });
  it('비한국어 이름 (길이 6 미만)', () => {
    expect(maskName('Hi')).toBe('Hi');
    expect(maskName('Mia')).toBe('M*a');
    expect(maskName('Anna')).toBe('A**a');
    expect(maskName('Riley')).toBe('R***y');
  });
  it('비한국어 이름 (길이 6 이상)', () => {
    expect(maskName('John Doe')).toBe('Jo** *oe');
    expect(maskName('Skylar Diaz')).toBe('Sk**** **az');
    expect(maskName('Josephine Morgan')).toBe('Jo******* ****an');
  });
});
