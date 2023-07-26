import { isKor } from './isKor';

describe('Language|isKor', () => {
  // 문자열이 한글로만 되있는지 확인 후 반환합니다.
  test('Check if the string is in Korean only and return it', () => {
    const contents = '';
    const contents2 = '123456';
    const contents3 = '나이키코카콜라맥도날드베스킨라빈스삼십일';
    const contents4 = 'ㄱㄴ';
    const contents5 = '1ab나이키cdef1';
    const contents6 = 'ㄴㅏㅇㅣㅋㅣ';

    expect(isKor(contents)).toEqual(false);
    expect(isKor(contents2)).toEqual(false);
    expect(isKor(contents3)).toEqual(true);
    expect(isKor(contents4)).toEqual(true);
    expect(isKor(contents5)).toEqual(false);
    expect(isKor(contents6)).toEqual(false);
  });
});