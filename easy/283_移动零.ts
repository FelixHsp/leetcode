/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/move-zeroes/
 * @Tags: 双指针
 * @Date: 2022-04-26 21:10:10 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-26 21:26:23
 */

// const moveZeroes = (nums: number[]): void => {
//   let j = nums.length - 1;
//   while (j >= 0) {
//     if (nums[j] === 0) {
//       nums.push(0);
//       nums.splice(j, 1);
//     }
//     j--;
//   }
// };

const moveZeroes = (nums: number[]): void => {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
    fast++;
  }
};

const nums = [0];
moveZeroes(nums);

export default void 0;