/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/search-insert-position/
 * @Tags: 二分、查找
 * @Date: 2022-04-24 22:24:31 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-24 22:33:13
 */

const searchInsert = (nums: number[], target: number): number => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let midIndex = Math.floor((i + j) / 2);
    if (nums[midIndex] >= target) {
      j = midIndex;
    }
    else {
      i = midIndex + 1;
    }
  }

  return nums[i] < target ? i + 1 : i;
};

const nums = [2, 4, 6, 8, 10, 12];
const target = 11;

console.log(searchInsert(nums, target));
