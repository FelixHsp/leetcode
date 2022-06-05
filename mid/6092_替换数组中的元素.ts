/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/replace-elements-in-an-array/
 * @Date: 2022-06-05 12:54:01 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 12:58:21
 */

const arrayChange = (nums: number[], operations: number[][]): number[] => {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }


  for (const operation of operations) {
    const curIndex = map.get(operation[0]);
    if (curIndex !== undefined) {
      nums[curIndex] =  operation[1];
      map.set(operation[1], curIndex);
      map.delete(operation[0]);
    }
  }

  return nums;
};

export default void 0;