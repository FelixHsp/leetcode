/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/remove-element/
 * @Date: 2022-06-02 20:35:09 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-02 20:39:54
 */

const removeElement = (nums: number[], val: number): number => {
  let i = 0;
  let count = nums.length;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      console.log(nums);
      count--;
    }
    else {
      i++
    }
  }
  return count;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

export default void 0;