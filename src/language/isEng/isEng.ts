'use strict';

/**
 * isEng
 * @example isEng('abcdefg') => true,
 * @param {string} contents contents
 * @returns {boolean} boolean
 */
export function isEng(contents: string): boolean {  
  const pattern = /^[a-zA-Z]+$/;

  return pattern.test(contents);
}
