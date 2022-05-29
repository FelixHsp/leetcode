/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/reverse-string-ii/
 * @Tags: 字符串
 * @Date: 2022-05-29 21:00:34 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 21:31:05
 */

const reverseStr = (s: string, k: number): string => {
  const array = Array.from(s);

  for (let i = 0; i < s.length; i += 2 * k) {
    let m = i;
    let n = i + k - 1 >= s.length ? s.length - 1 : i + k -1;
    
    while (m < n) {
      [array[m], array[n]] = [array[n], array[m]];
      m++;
      n--;
    }
  }

  return array.join('');
};

console.log(reverseStr('abcd', 2));

export default void 0;