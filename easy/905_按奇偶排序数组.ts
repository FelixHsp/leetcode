/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/sort-array-by-parity/
 * @Date: 2022-04-28 21:14:08 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-28 21:17:26
 */

const sortArrayByParity = (nums: number[]): number[] => {
  let fast = 0;
  let slow = 0;
  
  while (fast < nums.length) {
    if (nums[fast] % 2 === 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
    fast++;
  }

  return nums;
};

const nums = [3,1,2,4];
console.log(sortArrayByParity(nums));

export default void 0;