/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/reverse-words-in-a-string/
 * @Date: 2022-05-21 15:57:59 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 16:00:01
 */

const reverseWords = (s: string): string => {
  return (s.match(/\b\w+\b/g) as RegExpMatchArray).reverse().join(' ');
};


export default void 0;