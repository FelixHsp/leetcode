/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 * @Date: 2022-06-04 10:20:51 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 10:27:28
 */

const removeDuplicates = (s: string): string => {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    }
    else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

export default void 0;
