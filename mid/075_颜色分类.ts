/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/sort-colors/
 * @Date: 2022-06-19 11:41:48 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 12:05:13
 */

const sortColors = (nums: number[]): void => {
  let i = 0;
  let j = nums.length - 1;
  let cur = 0;

  while (cur <= j) {
    const curVal = nums[cur];
    if (curVal === 2) {
      [nums[cur], nums[j]] = [nums[j], nums[cur]];
      j--;
    }
    else if (curVal === 0) {
      [nums[i], nums[cur]] = [nums[cur], nums[i]];
      i++;
      cur++;
    }
    else {
      cur++;
    }
  }
};


export default void 0;