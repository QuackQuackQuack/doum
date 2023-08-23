'use strict';

/**
 * chunkArray
 * @example
 * const example = [1, 2, 3, 4, 5]
 * chunkArray(example, 2) result = [[1,2],[3,4],[5]]
 * @param {Array} arr Array
 * @param {number} num chunk Size
 * @return {Array} new Array in Array
 */
export function chunkArray<T>(arr: T[], num: number): any[T] {

  if (!arr || !num) { return arr; }

  const length = arr.length;
  const newArray = [];
  let sliceCount = 0;

  while (sliceCount < length) {
    newArray.push(arr.slice(sliceCount, sliceCount + num));
    sliceCount += num;
  }
  return newArray;
};