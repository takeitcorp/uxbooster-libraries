# @uxbooster/crypto

이 패키지는 암호화 관련 유틸리티 함수들을 제공합니다.

## 설치

```bash
npm install @uxbooster/crypto
```

## 사용법

```typescript
import { encrypt } from '@uxbooster/crypto';
import { randomBytes } from 'crypto';

const key = randomBytes(32);
const plainText = 'Hello, UX Booster!';

// 암호화
const encryptedData = encrypt(plainText, key);
console.log(encryptedData);

// 복호화 예제
const decryptedText = decrypt(encryptedData, key);
console.log(decryptedText); // 출력: 'Hello, UX Booster!'
```

## 함수 목록

이 패키지에서 제공하는 함수 목록은 다음과 같습니다.

| 함수 이름                                       | 설명                                                        | 예제                                                                                             |
| ----------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [decrypt](src/decrypt.ts)                       | 암호화된 문자열을 AES-GCM 알고리즘을 사용하여 복호화합니다. | `decrypt('aHR0cDovL2xvY2FsaG9zdDo4MDgwLwAAAAB1P71Pls4NsfVQ==', key)` <br>- 'Hello, UX Booster!'  |
| [encrypt](src/encrypt.ts)                       | 주어진 텍스트를 AES-GCM 알고리즘을 사용하여 암호화합니다.   | `encrypt('Hello, UX Booster!', key)` <br>- base64로 인코딩된 암호문 문자열                       |
| [generateRSAKeyPair](src/generateRSAKeyPair.ts) | RSA 공개 키와 개인 키 쌍을 생성합니다.                      | `generateRSAKeyPair()` <br>- 공개키와 개인키 객체를 반환합니다.                                  |
| [rsaDecrypt](src/rsaDecrypt.ts)                 | RSA 개인 키를 사용하여 암호화된 데이터를 복호화합니다.      | `rsaDecrypt(encryptedData, privateKey)` <br>- 복호화된 평문 문자열 반환                          |
| [rsaEncrypt](src/rsaEncrypt.ts)                 | RSA 공개 키를 사용하여 텍스트를 암호화합니다.               | `rsaEncrypt('Hello, UX Booster!', publicKey)` <br>- 암호화된 데이터 문자열 반환                  |
| [sha256Hash](src/sha256Hash.ts)                 | 주어진 데이터를 SHA-256 알고리즘으로 해싱합니다.            | `sha256Hash('example')` <br>- '50d8589b6318edc93f7cf7c2d747c6c5d2e2c873a74fc6c7e15c2b84738e4d02' |
