import { isKoResRegNumber } from './isKoResRegNumber';

describe('User|isKoResRegNumber', () => {
  // 한국 주민등록번호는 국적에 관계없이 한국의 모든 거주자에게 발급되는 13자리 숫자입니다. 한국 주민등록번호의 유효성을 검사합니다.
  test('Korean resident registration number is a 13-digit number issued to all residents of South Korea regardless of their nationality. Validation of Korean resident registration number', () => {
    const koResRegNumber = '';
    const koResRegNumber2 = '991111-1234567';
    const koResRegNumber3 = '0011111234567';
    const koResRegNumber4 = '8812123234567';
    const koResRegNumber5 = '001111-1234567';
    const koResRegNumber6 = '001242-1234567';
    const koResRegNumber7 = '001231-5234567';
    const koResRegNumber8 = '001231-123456A';

    expect(isKoResRegNumber(koResRegNumber)).toBeFalsy();
    expect(isKoResRegNumber(koResRegNumber2)).toBeTruthy();
    expect(isKoResRegNumber(koResRegNumber3)).toBeTruthy();
    expect(isKoResRegNumber(koResRegNumber4)).toBeTruthy();
    expect(isKoResRegNumber(koResRegNumber5)).toBeTruthy();
    expect(isKoResRegNumber(koResRegNumber6)).toBeFalsy();
    expect(isKoResRegNumber(koResRegNumber7)).toBeFalsy();
    expect(isKoResRegNumber(koResRegNumber8)).toBeFalsy();
  });
});
