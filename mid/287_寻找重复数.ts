/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-the-duplicate-number/
 * @Date: 2022-07-24 10:21:19 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-24 10:35:43
 */

const findDuplicate = (nums: number[]): number => {
  let fast = 0;
  let slow = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];

    if (fast === slow) {
      let newSlow = 0;
      while (nums[newSlow] !== nums[slow]) {
        newSlow = nums[newSlow];
        slow = nums[slow];
      }
      return nums[newSlow];
    }
  }
};

export default void 0;