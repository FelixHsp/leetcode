/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * @Date: 2022-05-17 21:54:21 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-17 22:02:25
 */

const reverseLeftWords = (s: string, n: number): string => {
  return `${s.slice(n)}${s.slice(0, n)}`;
};

const s = "abcdefg", k = 2;
console.log(reverseLeftWords(s, k));

export default void 0;