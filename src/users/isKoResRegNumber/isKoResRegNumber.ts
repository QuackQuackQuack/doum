'use strict';

/**
 * isKoResRegNumber 
 * Korean Resident's Registration Number
 * @example isKoResRegNumber('001111-1234567') => true,
 * @param {string} koResRegNumber Korean Resident's Registration Number
 * @returns {boolean} boolean
 */
export function isKoResRegNumber(koResRegNumber: string): boolean {

  const pattern = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/;
  return pattern.test(koResRegNumber);
}