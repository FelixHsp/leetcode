/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/partition-array-such-that-maximum-difference-is-k/
 * @Date: 2022-06-05 12:51:01 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 12:51:26
 */

const partitionArray = (nums: number[], k: number): number => {
  let count = 0;
  let curMax = -1;
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    if (curMax < nums[i]) {
      count++;
      curMax = nums[i] + k;
    }
  }

  return count;
};

export default void 0;