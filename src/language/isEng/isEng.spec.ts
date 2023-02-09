import { isEng } from './isEng';

describe('Language|isEng', () => {
  // 문자열이 영어로만 되있는지 확인 후 반환합니다.
  test('Check if the string is in English only and return it', () => {
    const contents = '';
    const contents2 = '123456';
    const contents3 = 'abcdefg';
    const contents4 = 'AbcdefG';
    const contents5 = '1abcdef1';
    const contents6 = 'ㅁabcdㅂ';

    expect(isEng(contents)).toEqual(false);
    expect(isEng(contents2)).toEqual(false);
    expect(isEng(contents3)).toEqual(true);
    expect(isEng(contents4)).toEqual(true);
    expect(isEng(contents5)).toEqual(false);
    expect(isEng(contents6)).toEqual(false);
  });
});