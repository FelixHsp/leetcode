/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/binary-search/
 * @Tags: 二分、查找
 * @Date: 2022-04-24 21:18:17 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-24 21:44:26
 */

const search = (nums: number[], target: number): number => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let midIndex = Math.floor((j + i) / 2);
    if (nums[midIndex] === target) {
      i = midIndex;
      j = midIndex;
    }
    else if (nums[midIndex] > target) {
      j = midIndex;
    }
    else {
      i = midIndex + 1;
    }
  }

  return nums[i] === target ? i : -1;
};

const nums = [-1, 0, 3, 5, 9, 12, 13, 14];
const target = 14;

console.log(search(nums, target));

export default void 0;
