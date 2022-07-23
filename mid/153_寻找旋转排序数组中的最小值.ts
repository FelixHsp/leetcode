/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
 * @Date: 2022-07-23 10:47:36 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-23 11:25:18
 */

const findMin = (nums: number[]): number => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const mid = Math.floor((i + j) / 2);

    if (nums[mid] < nums[j]) {
      // [1, 2, 3, 4, 5]
      // [5, 1, 2, 3, 4]
      j = mid;
    }
    else {
      // [3, 4, 5, 1, 2]
      i = mid + 1;
    }
  }

  return nums[i];
};

export default void 0;