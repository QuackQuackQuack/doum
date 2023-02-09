import { isUrl } from './isUrl';

describe('Web|isUrl', () => {
  // 문자열이 URL 타입인지 아닌지를 확인 후 반환합니다.
  test('Check whether the string is URL type or not and return it.(with Korean Url Type)', () => {
    const url = '';
    const url2 = 'https://testdomain';
    const url3 = '123456';
    const url4 = 'abcdefg';
    const url5 = 'https://한글도메인.com/';
    const url6 = 'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
    const url7 = 'http://www.google.com';
    const url8 = 'https://192.168.0.1';

    expect(isUrl(url)).toEqual(false);
    expect(isUrl(url2)).toEqual(false);
    expect(isUrl(url3)).toEqual(false);
    expect(isUrl(url4)).toEqual(false);
    expect(isUrl(url5)).toEqual(true);
    expect(isUrl(url6)).toEqual(true);
    expect(isUrl(url7)).toEqual(true);
    expect(isUrl(url8)).toEqual(true);
  });
});