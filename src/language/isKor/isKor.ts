'use strict';

/**
 * isKor
 * @example isKor('가나다라') => true,
 * @param {string} contents contents
 * @returns {boolean} boolean
 */
export function isKor(contents: string): boolean {  
  const pattern = /^[ㄱ-ㅎ|가-힣]+$/;

  return pattern.test(contents);
}
