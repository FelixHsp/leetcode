/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/smallest-range-i/
 * @Date: 2022-04-30 19:06:57 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-30 19:21:55
 */

const smallestRangeI = (nums: number[], k: number): number => {
  let max = 0, min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
    min = Math.min(nums[i], min);
  }

  const result = max - min - 2 * k;
  
  return (result > 0 && nums.length > 1) ? result : 0;
};

const nums = [2,7,2];
const k = 1;
console.log(smallestRangeI(nums, k));

export default void 0;