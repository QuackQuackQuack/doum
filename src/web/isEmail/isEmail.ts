'use strict';

/**
 * isEmail
 * @example isEmail('test@test.co.jp') => true,
 * @param {string} email email
 * @returns {boolean} boolean
 */
export function isEmail(email: string): boolean {  
  const pattern = /\b(?:[a-zA-Z0-9_\.\-])+?\@(?:([a-zA-Z0-9\-])+?\.)+(?:[a-zA-Z0-9]{2,4})+\b/;
  return pattern.test(email);
}



