import { describe, expect, test } from 'vitest'
import { removeCommas } from './removeCommas';

// 콤마표기식 숫자에서 콤마를 제거 한다. 1,000 => 1000
describe("string|removeCommas", () => {
  // 콤마로 표기된 숫자를 일반 숫자로 바꾼다.
  test('Replace the numbers in commas with regular numbers.', () => {
    expect(removeCommas('1')).toEqual('1');
    expect(removeCommas('10')).toEqual('10');
    expect(removeCommas('1,000')).toEqual('1000');
    expect(removeCommas('1,000,000')).toEqual('1000000');
    expect(removeCommas('1,000,000,000')).toEqual('1000000000');
  });
});