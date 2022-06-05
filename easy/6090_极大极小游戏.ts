/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/min-max-game/
 * @Date: 2022-06-05 12:07:29 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 12:08:00
 */

const minMaxGame = (nums: number[]): number => {
  let i = 0;
  let curCount = nums.length;
  
  while (curCount > 1) {
    i = 0;
    curCount = curCount / 2;
    for (let j = 0; j < nums.length; j = j+2) {
      if (i > curCount - 1) {
        break;
      }
      nums[i] = i % 2 === 0 ? Math.min(nums[j], nums[j + 1]) : Math.max(nums[j], nums[j + 1]);
      i++;
    }    
  }

  return nums[0];
};

export default void 0;