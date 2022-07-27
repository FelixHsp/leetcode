/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/permutations/
 * @Date: 2022-07-27 20:07:02 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-27 20:22:26
 */

const permute = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const path: number[] = [];

  const foo = (array: number[], len: number, usedArray: boolean[]) => {
    if (path.length === len) {
      result.push([...path]);
    }

    for (let i = 0; i < array.length; i++) {
      if (usedArray[i]) {
        continue;
      }

      path.push(array[i]);
      foo(array, len, usedArray);
      path.pop();
      usedArray[i] = false;
    }
  };

  foo(nums, nums.length, []);

  return result;
};

export default void 0;