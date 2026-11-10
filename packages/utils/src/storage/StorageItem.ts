/**
 * 로컬 스토리지에 저장할 데이터의 항목을 나타내는 인터페이스입니다.
 *
 * @interface IStorageItem
 */
export interface IStorageItem {
  /**
   * 데이터의 키 (key)입니다.
   * @type {string}
   */
  key: string;

  /**
   * 데이터의 값 (value)입니다.
   * @type {any}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 임의 값을 저장하는 공개 속성
  value: any;
}

/**
 * 로컬 스토리지에 저장된 데이터 항목을 나타내는 클래스입니다.
 *
 * @class StorageItem
 * @example
 * const item = new StorageItem({ key: 'username', value: 'john_doe' });
 * console.log(item.key); // 'username'
 * console.log(item.value); // 'john_doe'
 */
export class StorageItem {
  /**
   * 데이터의 키 (key)입니다.
   * @type {string}
   */
  public key: string;

  /**
   * 데이터의 값 (value)입니다.
   * @type {any}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 임의 값을 저장하는 공개 속성
  public value: any;

  /**
   * 새 인스턴스를 생성합니다.
   *
   * @constructor
   * @param {IStorageItem} data - 저장된 데이터 항목의 정보를 포함하는 객체
   */
  constructor(data: IStorageItem) {
    this.key = data.key;
    this.value = data.value;
  }
}
