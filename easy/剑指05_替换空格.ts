/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
 * @Date: 2022-05-17 21:41:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-17 21:47:45
 */

const replaceSpace = (s: string): string => {
  return s.replace(/\s/g, '%20');
};

const s = "We are happy.";
console.log(replaceSpace(s));

export default void 0;