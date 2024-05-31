import { describe, it, expect, beforeEach } from '@jest/globals';

import LocalStorageWorker from './LocalStorageWorker';
import { StorageItem } from './StorageItem';

describe('LocalStorageWorker', () => {
  let localStorageWorker: LocalStorageWorker;

  beforeEach(() => {
    localStorageWorker = new LocalStorageWorker();
    // 각 테스트 전에 localStorage를 초기화합니다.
    localStorageWorker.clear();
  });

  it('should verify localStorage is supported', () => {
    expect(localStorageWorker.isLocalStorageSupported()).toBe(true);
  });

  it('should add item to localStorage', () => {
    localStorageWorker.add('testKey', 'testValue');
    const storedValue = localStorageWorker.get('testKey');
    expect(storedValue).toBe('testValue');
  });

  it('should remove item from localStorage', () => {
    localStorageWorker.add('testKey', 'testValue');
    localStorageWorker.remove('testKey');
    const storedValue = localStorageWorker.get('testKey');
    expect(storedValue).toBeNull();
  });

  it('should clear localStorage', () => {
    localStorageWorker.add('testKey1', 'testValue1');
    localStorageWorker.add('testKey2', 'testValue2');
    localStorageWorker.clear();
    const storedValue1 = localStorageWorker.get('testKey1');
    const storedValue2 = localStorageWorker.get('testKey2');
    expect(storedValue1).toBeNull();
    expect(storedValue2).toBeNull();
  });

  it('should get item from localStorage', () => {
    localStorageWorker.add('testKey', 'testValue');
    const storedValue = localStorageWorker.get('testKey');
    expect(storedValue).toBe('testValue');
  });

  it('should return all items from localStorage', () => {
    localStorageWorker.add('testKey1', JSON.stringify('testValue1'));
    localStorageWorker.add('testKey2', JSON.stringify('testValue2'));
    const items = localStorageWorker.getAllItems();
    expect(items.length).toBe(2);
    expect(items[0]).toBeInstanceOf(StorageItem);
    expect(items[1]).toBeInstanceOf(StorageItem);
    expect(items[0].key).toBe('testKey1');
    expect(items[1].key).toBe('testKey2');
    expect(items[0].value).toBe('testValue1');
    expect(items[1].value).toBe('testValue2');
  });

  it('should return all values from localStorage', () => {
    localStorageWorker.add('testKey1', JSON.stringify('testValue1'));
    localStorageWorker.add('testKey2', JSON.stringify('testValue2'));
    const values = localStorageWorker.getAllValues();
    expect(values.length).toBe(2);
    expect(values).toContain('testValue1');
    expect(values).toContain('testValue2');
  });
});

describe('StorageItem', () => {
  it('should create StorageItem instance', () => {
    const itemData = { key: 'testKey', value: 'testValue' };
    const storageItem = new StorageItem(itemData);
    expect(storageItem.key).toBe('testKey');
    expect(storageItem.value).toBe('testValue');
  });
});
