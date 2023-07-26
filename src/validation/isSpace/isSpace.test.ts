import { describe, expect, test } from 'vitest'
import { isSpace } from './isSpace';

describe("validation|isSpace", () => {  
  // 문자 사이에 공백이 있는지를 환인 후 반환합니다.
  test('Returns whether there is a space between characters.', () => {
    expect(isSpace('test ')).toEqual(true); 
    expect(isSpace(' test')).toEqual(true); 
    expect(isSpace('te st')).toEqual(true); 
    expect(isSpace('   ')).toEqual(true); 
    expect(isSpace('test')).toEqual(false); 
    expect(isSpace('')).toEqual(false); 
  });
});
