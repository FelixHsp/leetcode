/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/subarray-product-less-than-k/
 * @Tags: 滑动窗口、双指针
 * @Date: 2022-05-05 20:57:05 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-05 21:35:01
 */

const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
  let result = 1;
  let i = 0;
  let count = 0;

  for (let j = 0; j < nums.length; j++) {
    result *= nums[j];
    while (i <= j && result >= k) {
      result /= nums[i++];
    }
    count += i <= j ? j - i + 1 : 0;
  }

  return count;
};

const nums = [1, 2, 3];
const k = 0;

console.log(numSubarrayProductLessThanK(nums, k));

export default void 0;
