/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/sign-of-the-product-of-an-array/
 * @Date: 2022-05-22 20:19:51 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 20:21:29
 */

const arraySign = (nums: number[]): number => {
  let tag = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }
    if (nums[i] < 0) {
      tag = -tag;
    }
  }

  return tag;
};


export default void 0;
