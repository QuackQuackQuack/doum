import { describe, expect, test } from 'vitest'
import { addCommas } from './addCommas';

describe("string|addCommas", () => {
  // 숫자형 문자를 콤마로 표기한다. 1000 => 1,000'
  test('Write numeric characters in commas', () => {
    expect(addCommas('1')).toEqual('1');
    expect(addCommas('10')).toEqual('10');
    expect(addCommas(0.123456)).toEqual(`0.123,456`);
    expect(addCommas('1000')).toEqual('1,000');
    expect(addCommas(1000)).toEqual('1,000');
    expect(addCommas('1000000')).toEqual('1,000,000');
    expect(addCommas('1000000000')).toEqual('1,000,000,000');
  });
  // 일반 문자는 일반 문자로 돌려준다.
  test('Normal characters are returned to normal characters', () => {
    expect(addCommas('abcdef')).toEqual('abcdef');
  });
  // 0은 0으로 돌려준다.
  test('Zero is returned to zero.', () => {
    expect(addCommas('0')).toEqual('0');
  });
});