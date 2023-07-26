import { describe, expect, test } from 'vitest'
import { isKoZipCode } from './isKoZipCode';

describe('validation|isKoZipCode', () => {
  // 한국 도로명주소 우편번호
  test('Korean Road Name Address Zip Code(Postal Code)', () => {
    const zipCode = '';
    const zipCode2 = '30062';
    const zipCode3 = '00001';
    const zipCode4 = '64123';
    const zipCode5 = '63086';

    expect(isKoZipCode(zipCode)).toBeFalsy();
    expect(isKoZipCode(zipCode2)).toBeTruthy();
    expect(isKoZipCode(zipCode3)).toBeFalsy();
    expect(isKoZipCode(zipCode4)).toBeFalsy();
    expect(isKoZipCode(zipCode5)).toBeTruthy();
  });
});