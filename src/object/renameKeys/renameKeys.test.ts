import { describe, expect, test } from 'vitest'
import { renameKeys } from './renameKeys';

describe("object|renameKeys", () => {  
  const originObject = {
    a: '에이',
    b: '비',
    c: '씨',
    d: '디',
  };

  test('변경하고 싶은 기존키와 변경할 키이름을 밸류로하는 오브젝트에 따라 새로운키로 변경된 오브젝트가 반환된다.', () => {
    expect(renameKeys(originObject, { a: '에이', b: '비', c: '씨', d: '디' })).toEqual({
      에이: '에이',
      비: '비',
      씨: '씨',
      디: '디',
    });
  });

  test('변경하고 싶은 기존키가 오리지날 오브젝트에 존재하지 않으면, 원본 키를 유지한다.', () => {
    expect(renameKeys(originObject, { a: '에이', b: '비', d: '디' })).toEqual({
      에이: '에이',
      비: '비',
      c: '씨',
      디: '디',
    });
  });
  test('새로운키로 변경시 기존 오브젝트의 변경사항은 없다.', () => {
    expect(renameKeys(originObject, { a: '에이', b: '비', d: '디' })).toEqual({
      에이: '에이',
      비: '비',
      c: '씨',
      디: '디',
    });
    expect(originObject).toEqual({
      a: '에이',
      b: '비',
      c: '씨',
      d: '디',
    });
  });
});