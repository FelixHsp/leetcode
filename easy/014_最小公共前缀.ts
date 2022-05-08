/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/longest-common-prefix/
 * @Date: 2022-05-08 09:56:41 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-08 10:34:32
 */

const longestCommonPrefix = (strs: string[]): string => {
  const string = strs.join(' ');
  let pre = '';
  
  for (let i = 1; i <= strs[0].length; i++) {
    const str = strs[0].slice(0, i);
    
    if (string.match(new RegExp('\\b' + str + '\\w*\\b', 'g'))?.length === strs.length) {
      pre = str;
    }
    else {
      break;
    }
  }

  return pre;
};

const strs = ['abcde', 'abkojoi'];

console.log(longestCommonPrefix(strs));

export default void 0;