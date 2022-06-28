/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/wiggle-sort-ii/
 * @Date: 2022-06-28 21:04:29 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-28 21:18:43
 */

const wiggleSort = (nums: number[]): void => {
  const newNums = [...nums];
  newNums.sort((a, b) => a - b);
  const count = nums.length;

  for (let i = Math.floor((count + 1) / 2) - 1, j = count - 1, index = 0; index < count; index++, i--, j--) {
    nums[index++] = newNums[i];
    if (index < count) {
      nums[index] = newNums[j];
    }
  }
};

export default void 0;
