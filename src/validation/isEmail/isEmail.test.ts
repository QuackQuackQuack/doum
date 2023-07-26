import { describe, expect, test } from 'vitest'
import { isEmail } from './isEmail';

describe('validation|isEmail', () => {
  // 문자열이 Email 타입인지 아닌지를 확인 후 반환합니다.
  test('Check whether the string is Email type or not and return it.(with Korean Url Type)', () => {
    const email = '';
    const email2 = '123456';
    const email3 = 'abcdefg';
    const email4 = 'test@test.co.jp';
    const email5 = 'test-test@test.co.kr';
    const email6 = 'test@test.com';
    const email7 = 'a-b.c@t-e-s-t.co.kr.uk';

    expect(isEmail(email)).toBeFalsy();
    expect(isEmail(email2)).toBeFalsy();
    expect(isEmail(email3)).toBeFalsy();
    expect(isEmail(email4)).toBeTruthy();
    expect(isEmail(email5)).toBeTruthy();
    expect(isEmail(email6)).toBeTruthy();
    expect(isEmail(email7)).toBeTruthy();
  });
});
