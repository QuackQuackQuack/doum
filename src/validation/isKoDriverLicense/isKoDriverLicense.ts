'use strict';

/**
 * isKoDriverLicense 
 * a Korean Driver's License
 * @example isKoDriverLicense('11-12-1234567-89') => true,
 * @param {string} driverLicense a Korean Driver's License Number
 * @returns {boolean} boolean
 */
export function isKoDriverLicense(driverLicense: string): boolean {

  const pattern = /^((1[1-9]|2[0-6,8]){1}?)?-(\d{2}?)?-(\d{7}?)?-(\d{2}?)$/;
  return pattern.test(driverLicense);
}
