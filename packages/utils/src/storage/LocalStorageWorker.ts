import { StorageItem } from './StorageItem';

/**
 * 브라우저의 로컬 스토리지를 사용하여 데이터를 저장하고 관리하기 위한 클래스입니다.
 *
 * @class LocalStorageWorker
 */
export default class LocalStorageWorker {
  /**
   * 로컬 스토리지를 지원하는지 여부를 나타내는 플래그입니다.
   * @type {boolean}
   */
  private localStorageSupported: boolean;

  /**
   * 새 인스턴스를 생성합니다.
   */
  constructor() {
    this.localStorageSupported =
      (typeof window !== 'undefined' &&
        typeof window.localStorage !== 'undefined' &&
        window.localStorage != null) ||
      localStorage != null;
  }

  /**
   * 로컬 스토리지를 지원하는지 여부를 반환합니다.
   * @returns {boolean} 로컬 스토리지를 지원하면 true, 그렇지 않으면 false
   */
  public isLocalStorageSupported(): boolean {
    return this.localStorageSupported;
  }

  /**
   * 지정된 키와 값을 로컬 스토리지에 추가합니다.
   * @param {string} key - 저장할 데이터의 키
   * @param {string} item - 저장할 데이터의 값
   */
  public add(key: string, item: string) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, item);
    }
  }

  /**
   * 로컬 스토리지에서 저장된 모든 항목을 가져옵니다.
   * @returns {Array<StorageItem>} - 로컬 스토리지에 저장된 모든 항목의 배열
   */
  public getAllItems(): Array<StorageItem> {
    const list = new Array<StorageItem>();

    if (this.localStorageSupported) {
      Object.keys(localStorage).forEach(key => {
        const value = localStorage.getItem(key);
        if (value !== null) {
          list.push(new StorageItem({ key, value: JSON.parse(value) }));
        }
      });
    }

    return list;
  }

  /**
   * 로컬 스토리지에 저장된 모든 값만을 가져옵니다.
   * @returns {Array<any>} - 로컬 스토리지에 저장된 모든 값의 배열
   */
  public getAllValues(): Array<any> {
    const list = new Array<any>();

    if (this.localStorageSupported) {
      Object.keys(localStorage).forEach(key => {
        const value = localStorage.getItem(key);
        if (value !== null) {
          list.push(JSON.parse(value));
        }
      });
    }

    return list;
  }

  /**
   * 지정된 키에 해당하는 값을 로컬 스토리지에서 가져옵니다.
   * @param {string} key - 검색할 데이터의 키
   * @returns {string | null} - 지정된 키에 해당하는 값, 또는 키가 없는 경우 `null`
   */
  public get(key: string): string | null {
    if (this.localStorageSupported) {
      const item = localStorage.getItem(key);
      return item;
    }
    return null;
  }

  /**
   * 로컬 스토리지에서 지정된 키에 해당하는 값을 제거합니다.
   * @param {string} key - 제거할 데이터의 키
   */
  public remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key);
    }
  }

  /**
   * 로컬 스토리지의 모든 데이터를 제거하여 초기화합니다.
   */
  public clear() {
    if (this.localStorageSupported) {
      localStorage.clear();
    }
  }
}
