/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/product-of-array-except-self/
 * @Date: 2022-06-05 15:20:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 15:32:26
 */

const productExceptSelf = (nums: number[]): number[] => {
  const result: number[] = Array.from({ length: nums.length }).fill(0) as number[];
  let zeroCount: number = 0;
  let foo: number = 1;

  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      zeroCount++;
      continue;
    }
    if (zeroCount > 1) {
      foo = 0;
      return result;
    }
    foo *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount) {
      if (nums[i]) {
        result[i] = 0;
      }
      else {
        result[i] = foo;
      }
    }
    else {
      result[i] = foo / nums[i];
    }
  }

  return result;
};

export default void 0;