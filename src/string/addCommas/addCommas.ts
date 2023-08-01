'use strict';

/**
 * addCommas
 * @example 1000 => 1,000
 * @param {string | number} num numeric characters | number
 * @returns {string}  
 */
export function addCommas(num: string | number): string {
  return String(num).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}