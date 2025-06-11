import CryptoJS from 'crypto-js';

const SESSION_KEY = 'indoex_sessionid';

function getMillies(): string {
  return Date.now().toString();
}

function getMD5(value: string): string {
  return CryptoJS.MD5(value).toString();
}

export function getSessionId(): string {
  const sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    const newId = getMD5(getMillies());
    localStorage.setItem(SESSION_KEY, newId);
    return newId;
  }
  return sessionId;
}
