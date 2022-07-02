/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/longest-common-prefix/
 * @Date: 2022-05-08 09:56:41 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-02 10:46:21
 */

const longestCommonPrefix = (strs: string[]): string => {
  const str = strs.join('-');
  const array = str.match(new RegExp(`(\\w*)\\w*(\\-(\\1)\\w*){${strs.length - 1}}`));

  return array ? array[1] : '';
};

const strs = ['abcde', 'abkojoi'];

console.log(longestCommonPrefix(strs));

export default void 0;