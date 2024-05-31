import { describe, it, expect, beforeEach } from '@jest/globals';
import CredentialStorage from './CredentialStorage';

interface LoginFormType {
  username: string;
  password: string;
  isRemember: boolean;
}

describe('CredentialStorage', () => {
  const storageKey = 'testCredentials';
  let credentialStorage: CredentialStorage<LoginFormType>;
  const mockLoginInfo: LoginFormType = {
    username: 'testUser',
    password: 'testPass',
    isRemember: true,
  };

  beforeEach(() => {
    credentialStorage = new CredentialStorage<LoginFormType>(storageKey);
    localStorage.clear();
  });

  it('should initialize with empty login info if none is provided', () => {
    const emptyCredentialStorage = new CredentialStorage<LoginFormType>(storageKey);
    expect(emptyCredentialStorage.get()).toEqual({});
  });

  it('should save login info to localStorage', () => {
    credentialStorage.set(mockLoginInfo);
    const storedValue = localStorage.getItem(storageKey);
    expect(storedValue).toBe(JSON.stringify(mockLoginInfo));
  });

  it('should load login info from localStorage', () => {
    localStorage.setItem(storageKey, JSON.stringify(mockLoginInfo));
    credentialStorage.load();
    const loadedInfo = credentialStorage.get();
    expect(loadedInfo).toEqual(mockLoginInfo);
  });

  it('should clear login info from localStorage', () => {
    credentialStorage.set(mockLoginInfo);
    credentialStorage.clear();
    const storedValue = localStorage.getItem(storageKey);
    expect(storedValue).toBeNull();
    expect(credentialStorage.get()).toEqual({});
  });

  it('should set and save new login info with isRemember true', () => {
    credentialStorage.set(mockLoginInfo);
    expect(credentialStorage.get()).toEqual(mockLoginInfo);
    const storedValue = localStorage.getItem(storageKey);
    expect(storedValue).toBe(JSON.stringify(mockLoginInfo));
  });

  it('should clear login info if isRemember is false', () => {
    const newLoginInfo: LoginFormType = {
      username: 'testUser',
      password: 'testPass',
      isRemember: false,
    };
    credentialStorage.set(newLoginInfo);
    const storedValue = localStorage.getItem(storageKey);
    expect(storedValue).toBeNull();
    expect(credentialStorage.get()).toEqual({});
  });
});
