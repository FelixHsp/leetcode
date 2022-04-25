/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/rotate-array/
 * @Date: 2022-04-25 21:44:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-25 22:03:29
 */

// const rotate = (nums: number[], k: number): void => {
//   let rotateIndex = k % nums.length;
//   while (rotateIndex) {
//     nums.unshift(nums.pop() as number);
//     rotateIndex--;
//   }
// };

const rotate = (nums: number[], k: number): void => {
  nums.splice(0, 0, ...nums.splice(nums.length - k % nums.length));
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));

export default void 0;