/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/jump-game/
 * @Tags: 贪心
 * @Date: 2022-06-14 22:09:57 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-14 22:16:14
 */

const canJump = (nums: number[]): boolean => {
  let reset = nums[0];

  for (let i = 1 ; i < nums.length; i++) {
    reset = Math.max(nums[i], reset--);
    if (reset === 0) {
      return false;
    }
  }

  return true;
};

export default void 0;
