/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/kth-largest-element-in-an-array/
 * @Date: 2022-06-20 22:38:17 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-20 22:47:06
 */

const findKthLargest = (nums: number[], k: number): number => {
  return nums.sort((a, b) => b - a)[k - 1];
};

export default void 0;