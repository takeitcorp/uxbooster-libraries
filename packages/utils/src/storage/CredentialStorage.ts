import LocalStorageWorker from './LocalStorageWorker';

/**
 * 브라우저의 로컬 스토리지를 사용하여 사용자의 로그인 정보를 저장하고 관리하는 클래스입니다.
 *
 * @class CredentialStorage
 * @template T - 로그인 정보의 타입
 * @example
 * interface LoginInfo {
 *   username: string;
 *   token: string;
 *   isRemember: boolean;
 * }
 *
 * const credentials = new CredentialStorage<LoginInfo>('user_credentials', {
 *   username: 'john_doe',
 *   token: 'abcd1234',
 *   isRemember: true
 * });
 *
 * // 로그인 정보 설정 및 저장
 * credentials.set({ username: 'john_doe', token: 'abcd1234', isRemember: true });
 *
 * // 로그인 정보 가져오기
 * const info = credentials.get();
 * console.log(info.username); // 'john_doe'
 *
 * // 로그인 정보 삭제
 * credentials.clear();
 */
export default class CredentialStorage<T extends object> {
  private storageWorker: LocalStorageWorker;
  private storageKey: string;
  private loginInfo: T;

  /**
   * 새 인스턴스를 생성합니다.
   *
   * @param {string} storageKey - 로컬 스토리지에 저장할 데이터의 키
   * @param {T} [loginInfo={}] - 로그인 정보의 초기값 (옵션)
   */
  constructor(storageKey: string, loginInfo: T = {} as T) {
    this.storageWorker = new LocalStorageWorker();
    this.storageKey = storageKey;
    this.loginInfo = loginInfo;
    this.activate();
  }

  /**
   * 클래스를 활성화하고 저장된 데이터를 로드합니다.
   */
  private activate() {
    this.load();
  }

  /**
   * 로컬 스토리지에서 데이터를 로드하여 로그인 정보를 초기화합니다.
   */
  public load() {
    const storageData = this.storageWorker.get(this.storageKey);
    if (storageData != null && storageData.length > 0) {
      const info = JSON.parse(storageData);
      if (info) {
        this.loginInfo = info;
      }
    }
  }

  /**
   * 저장된 로그인 정보를 반환합니다.
   * @returns {T} - 저장된 로그인 정보
   */
  public get(): T {
    return this.loginInfo;
  }

  /**
   * 새로운 로그인 정보를 설정하고 로컬 스토리지에 저장합니다.
   * @param {T} info - 설정할 로그인 정보
   */
  public set(info: T) {
    if ('isRemember' in info && info.isRemember) {
      this.loginInfo = info;
      this.save();
    } else {
      this.clear();
    }
  }

  /**
   * 로컬 스토리지에서 로그인 정보를 모두 제거합니다.
   */
  public clear() {
    this.loginInfo = {} as T;
    this.storageWorker.remove(this.storageKey);
  }

  /**
   * 로그인 정보를 JSON 문자열로 변환하여 로컬 스토리지에 저장합니다.
   */
  public save() {
    const jsonInfo = JSON.stringify(this.loginInfo);
    this.storageWorker.add(this.storageKey, jsonInfo);
  }
}
