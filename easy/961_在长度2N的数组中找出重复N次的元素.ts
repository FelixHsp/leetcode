/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/
 * @Date: 2022-05-21 09:45:02 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 09:59:02
 */

const repeatedNTimes = (nums: number[]): number => {
  const array: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let cur = array[nums[i]] || 0;
    if (cur) {
      return nums[i];
    }
    else {
      array[nums[i]] = cur + 1;
    }
  }
  
  return -1;
};


export default void 0;
