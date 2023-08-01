'use strict';

/**
 * removeCommas
 * @example 1,000 => 1000
 * @param {string} commasNum Write numeric characters in commas 콤마로 표기된 숫자 문자 
 * @returns {string}  
 */
export function removeCommas(commasNum: string): string {
  return String(commasNum).replace(/[^\d]+/g, '');
}