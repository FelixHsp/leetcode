/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * @Date: 2022-05-15 10:40:05 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-15 10:53:57
 */

const canBeIncreasing = (nums: number[]): boolean => {
  let times = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i + 1] <= nums[i] && nums[i + 1] <= (nums?.[i - 1] || 0)) {
      nums.splice(i + 1, 1);
      times++;
      continue;
    }
    if (nums[i + 1] <= nums[i] && nums[i + 1] > (nums?.[i - 1] || 0)) {
      times++;
    }
    i++;
  }
  return times <= 1;
};

const nums = [2, 3, 1, 4];
console.log(canBeIncreasing(nums));

export default void 0;