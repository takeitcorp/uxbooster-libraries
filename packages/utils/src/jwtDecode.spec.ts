import { describe, expect, it } from '@jest/globals';
import { jwtDecode, InvalidTokenError, JwtPayload } from './jwtDecode';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZm9vIjoiYmFyIiwiaWF0IjoxNzM3MzM5NzE4LCJleHAiOjE3MzczNTA1MTh9.2ccP-TPKJNXeFS6I2dPc8DfjG16_drWoKTeHv3KxoGk';

describe('jwtDecode function', () => {
  it('기본 클레임 및 사용자 정의 클레임을 반환해야 한다', () => {
    const decoded = jwtDecode<JwtPayload & { foo: string }>(token);
    expect(decoded.exp).toEqual(1737350518);
    expect(decoded.iat).toEqual(1737339718);
    expect(decoded.foo).toEqual('bar');
  });

  it('헤더 정보를 반환해야 한다', () => {
    const decoded = jwtDecode(token, { header: true });
    expect(decoded.typ).toEqual('JWT');
    expect(decoded.alg).toEqual('HS256');
  });

  it('UTF-8 토큰을 잘 처리해야 한다', () => {
    const utf8Token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9zw6kiLCJpYXQiOjE0MjU2NDQ5NjZ9.1CfFtdGUPs6q8kT3OGQSVlhEMdbuX0HfNSqum0023a0';
    const decoded = jwtDecode<JwtPayload & { name: string }>(utf8Token);
    expect(decoded.name).toEqual('José');
  });

  it('이진 데이터가 포함된 토큰을 잘 처리해야 한다', () => {
    const binaryToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9z6SIsImlhdCI6MTQyNTY0NDk2Nn0.cpnplCBxiw7Xqz5thkqs4Mo_dymvztnI0CI4BN0d1t8';
    const decoded = jwtDecode<JwtPayload & { name: string }>(binaryToken);
    expect(decoded.name).toEqual('José');
  });

  it('더블 패딩이 있는 토큰을 잘 처리해야 한다', () => {
    const utf8Token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpvc8OpIiwiaWF0IjoxNTE2MjM5MDIyfQ.7A3F5SUH2gbBSYVon5mas_Y-KCrWojorKQg7UKGVEIA';
    const decoded = jwtDecode<JwtPayload & { name: string }>(utf8Token);
    expect(decoded.name).toEqual('José');
  });

  it('싱글 패딩이 있는 토큰을 잘 처리해야 한다', () => {
    const utf8Token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpvc8OpZSIsImlhdCI6MTUxNjIzOTAyMn0.tbjJzDAylkKSV0_YGR5xBJBlFK01C82nZPLIcA3JX1g';
    const decoded = jwtDecode<JwtPayload & { name: string }>(utf8Token);
    expect(decoded.name).toEqual('Josée');
  });

  it('문자열이 아닌 값이 들어오면 InvalidTokenError를 던져야 한다', () => {
    const badToken = null;
    expect(() => {
      jwtDecode(badToken as unknown as string);
    }).toThrowError(new InvalidTokenError('유효하지 않은 토큰입니다: 문자열이어야 합니다.'));
  });

  it('토큰이 아닌 문자열에 대해 InvalidTokenError를 던져야 한다', () => {
    const badToken = 'fubar';
    expect(() => {
      jwtDecode(badToken);
    }).toThrowError(
      new InvalidTokenError('유효하지 않은 토큰입니다: 2번째 부분이 누락되었습니다.'),
    );
  });

  it('토큰이 null일 때 InvalidTokenError를 던져야 한다', () => {
    const badToken = null;
    expect(() => {
      jwtDecode(badToken as unknown as string, { header: true });
    }).toThrowError(new InvalidTokenError('유효하지 않은 토큰입니다: 문자열이어야 합니다.'));
  });

  it('1번째 부분이 누락된 경우 InvalidTokenError를 던져야 한다', () => {
    const badToken = '.FAKE_TOKEN';
    expect(() => {
      jwtDecode(badToken, { header: true });
    }).toThrowError(
      new InvalidTokenError(
        '유효하지 않은 토큰입니다: 1번째 부분의 JSON 형식이 잘못되었습니다. (Unexpected end of JSON input)',
      ),
    );
  });

  it('1번째 부분이 유효하지 않은 Base64일 때 InvalidTokenError를 던져야 한다', () => {
    const badToken = 'TOKEN';
    expect(() => {
      jwtDecode(badToken, { header: true });
    }).toThrowError(
      new InvalidTokenError(
        '유효하지 않은 토큰입니다: 1번째 부분의 Base64 형식이 잘못되었습니다. (Base64 문자열의 길이가 올바르지 않습니다.)',
      ),
    );
  });

  it('1번째 부분이 유효하지 않은 JSON일 때 InvalidTokenError를 던져야 한다', () => {
    const badToken = 'FAKE.TOKEN';
    expect(() => {
      jwtDecode(badToken, { header: true });
    }).toThrowError(
      /유효하지 않은 토큰입니다: 1번째 부분의 JSON 형식이 잘못되었습니다. \(Unexpected token .* in JSON at position 0\)/,
    );
  });

  it('2번째 부분이 누락된 경우 InvalidTokenError를 던져야 한다', () => {
    const badToken = 'FAKE_TOKEN';
    expect(() => {
      jwtDecode(badToken);
    }).toThrowError(
      new InvalidTokenError('유효하지 않은 토큰입니다: 2번째 부분이 누락되었습니다.'),
    );
  });

  it('2번째 부분이 유효하지 않은 Base64일 때 InvalidTokenError를 던져야 한다', () => {
    const badToken = 'FAKE.TOKEN';
    expect(() => {
      jwtDecode(badToken);
    }).toThrowError(
      new InvalidTokenError(
        '유효하지 않은 토큰입니다: 2번째 부분의 Base64 형식이 잘못되었습니다. (Base64 문자열의 길이가 올바르지 않습니다.)',
      ),
    );
  });

  it('2번째 부분이 유효하지 않은 JSON일 때 InvalidTokenError를 던져야 한다', () => {
    const badToken = 'FAKE.TOKEN2';
    expect(() => {
      jwtDecode(badToken);
    }).toThrowError(
      new InvalidTokenError(
        '유효하지 않은 토큰입니다: 2번째 부분의 JSON 형식이 잘못되었습니다. (Unexpected token L in JSON at position 0)',
      ),
    );
  });
});
