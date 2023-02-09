'use strict';

/**
 * isSpace
 * @example isSpace('te st') => true,
 * @param {string} url url
 * @returns {boolean} boolean
 */
export function isSpace(string: string): boolean {
  return string.search(/\s/) !== -1;
}