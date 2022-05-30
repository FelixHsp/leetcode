/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/implement-strstr/
 * @Tags: 字符串
 * @Date: 2022-05-30 21:01:04 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-30 21:05:30
 */

const strStr = (haystack: string, needle: string): number => {
  return haystack.match(new RegExp(needle))?.['index'] ?? -1;
};


export default void 0;