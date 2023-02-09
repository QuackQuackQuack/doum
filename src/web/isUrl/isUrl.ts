'use strict';

/**
 * isUrl
 * @example isUrl('https://www.test.com') => true
 * @param {string} url url
 * @returns {boolean} boolean
 */
export function isUrl(url: string): boolean {
  const pattern = /^(?:http(s)?:\/\/)?[\wㄱ-힣.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]ㄱ-힣@!\$&%'\(\)\*\+,;=.|{}"<>^]+$/;
  return pattern.test(url);
}