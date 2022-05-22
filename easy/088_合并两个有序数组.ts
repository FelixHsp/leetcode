/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/merge-sorted-array/
 * @Date: 2022-05-22 10:21:36 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 10:30:38
 */

const merge = (nums1: number[], m: number, nums2: number[], n: number): void =>{
  for (let i = 0; i < nums1.length; i++) {
    while (nums2.length && (nums2[0] <= nums1[i] || i >= m)) {
      nums1.splice(i, 0, nums2.shift() as number);
      nums1.pop();
      m++
    }
  }

  console.log(nums1);
};

console.log(merge([0], 0, [1], 1));

export default void 0;