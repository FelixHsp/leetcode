/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/two-sum/
 * @Date: 2022-05-18 20:39:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-18 20:43:26
 */

const twoSum = (nums: number[], target: number): number[] => {
  const obj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (obj[current] !== undefined) {
      return [obj[current], i];
    }
    else {
      obj[target - current] = i;
    }
  }

  return [];
};


export default void 0;