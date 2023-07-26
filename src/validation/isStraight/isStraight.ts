'use strict';

/**
 * isStraight
 * @example isStraight('가가a12312') => true,
 * @param {string} contents contents
 * @param {boolean} [gap=true] gap 공백문자를 중복으로 처리할지 여부
 * @returns {boolean} boolean
 */
export function isStraight(contents: string, gap: boolean = true): boolean {  
  const pattern = /(.)\1+/;
  const result = gap ? contents : contents.replace(/\s/gi, '');

  return pattern.test(result);
}