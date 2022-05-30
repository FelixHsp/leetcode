/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/repeated-substring-pattern/
 * @Tags: 字符串
 * @Date: 2022-05-30 21:06:30 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-30 21:18:57
 */

const repeatedSubstringPattern = (s: string): boolean => {
  return /^(.+)(\1)+$/.test(s);
};

export default void 0;