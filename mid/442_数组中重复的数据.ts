/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
 * @Date: 2022-05-08 09:49:19 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-08 09:52:40
 */

const findDuplicates = (nums: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(index + 1);
    }
    else {
      nums[index] = -nums[index];
    }
  }

  return result;
};

const nums = [1];
console.log(findDuplicates(nums));

export default void 0;
