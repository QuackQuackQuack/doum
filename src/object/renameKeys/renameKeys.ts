'use strict';

/**
 * renameKeys
 * @description Key Map Object를 받아 변경하고싶은 키를 변경한다.
 * @example renameKeys({ a: 'test' }, { a: 'test' })  => { test: 'test' }
 * @param {Object} obj 대상 Object
 * @param {Object} keysMap Keys Object
 * @returns {Object}
 */
export function renameKeys(
  obj: Record<string, unknown>,
  keysMap: Record<string, string>
): Record<string, unknown> {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
}