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
  value: any;
}

/**
 * 로컬 스토리지에 저장된 데이터 항목을 나타내는 클래스입니다.
 *
 * @class StorageItem
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
