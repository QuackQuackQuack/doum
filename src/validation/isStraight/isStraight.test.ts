import { describe, expect, test } from 'vitest'
import { isStraight } from './isStraight';

describe("validation|isStraight", () => {  
  // 문자열 안에 두 개 이상의 연속된 문자가 있는지 확인한다. (공백도 동일문자로 인식)
  test('Check if there are two or more consecutive characters in the string.', () => {
    expect(isStraight('abcdefg123')).toEqual(false); 
    expect(isStraight('bcqqbcd')).toEqual(true); 
    expect(isStraight('te가가st')).toEqual(true); 
    expect(isStraight('te22st')).toEqual(true); 
    expect(isStraight('')).toEqual(false); 
    expect(isStraight('testpp')).toEqual(true);
    expect(isStraight('tesㅁㅁpp')).toEqual(true);
    expect(isStraight('  ')).toEqual(true);
    expect(isStraight('  ', false)).toEqual(false);
    expect(isStraight('ab  cd')).toEqual(true);
    expect(isStraight('ab  cd', false)).toEqual(false);
  });
});





