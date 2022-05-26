/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/intersection-of-two-arrays/
 * @Tags: 哈希表
 * @Date: 2022-05-26 21:45:11 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-26 21:51:09
 */

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const array: number[] = [];
  const set1 = new Set(nums1);

  for (let num of set1) {
    if (nums1.includes(num)) {
      array.push(num);
    }
  }

  return array;
};


export default void 0;