'use strict';

/**
 * isKoZipCode 
 * Korean Zip Code / Postal code
 * @example isKoZipCode('06608') => true,
 * @param {string} zipcode Korean Zip Code / Postal code
 * @returns {boolean} boolean
 */
export function isKoZipCode(zipcode: string): boolean {

  const pattern = /^((0[1-9]|1\d|2\d|3\d|4\d|5\d|6[0-3]){1}?)\d{3}?$/;
  return pattern.test(zipcode);
}