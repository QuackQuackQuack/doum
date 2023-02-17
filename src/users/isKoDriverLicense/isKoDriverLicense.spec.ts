import { isKoDriverLicense } from './isKoDriverLicense';

describe('User|isKoDriverLicense', () => {
  // 한국 운전면허증 번호
  // 서울(11), 부산(12), 경기(13), 강원(14), 충북(15), 충남(16), 전북(17), 전남(18), 경북(19), 
  // 경남(20) 제주(21), 대구(22), 인천(23), 광주(24) 대전(25), 울산(26) 경기북부(28)
  test('a Korean driver license', () => {
    const licensegNumber = '';
    const licensegNumber2 = '11-12-1234567-89';
    const licensegNumber3 = '27-22-1234567-89';
    const licensegNumber4 = '20-99-12345687-89';
    const licensegNumber5 = '111-12-1234567-89';
    const licensegNumber6 = '25-56-1234567-89';
    const licensegNumber7 = '1-12-1234567-89';
    const licensegNumber8 = '11-12-124567-89';
    const licensegNumber9 = '22-12-1234567-81';


    expect(isKoDriverLicense(licensegNumber)).toEqual(false);
    expect(isKoDriverLicense(licensegNumber2)).toEqual(true);
    expect(isKoDriverLicense(licensegNumber3)).toEqual(false);
    expect(isKoDriverLicense(licensegNumber4)).toEqual(false);
    expect(isKoDriverLicense(licensegNumber5)).toEqual(false);
    expect(isKoDriverLicense(licensegNumber6)).toEqual(true);
    expect(isKoDriverLicense(licensegNumber7)).toEqual(false);
    expect(isKoDriverLicense(licensegNumber8)).toEqual(false);
    expect(isKoDriverLicense(licensegNumber9)).toEqual(true);
  });
});