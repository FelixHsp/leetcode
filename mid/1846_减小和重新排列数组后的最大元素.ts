/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/maximum-element-after-decreasing-and-rearranging/
 * @Tags: 排序、贪心
 * @Date: 2022-05-10 21:42:11 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-10 21:49:33
 */

const maximumElementAfterDecrementingAndRearranging = (arr: number[]): number => {
  arr.sort((a, b) => a - b);
  
  arr[0] = 1;
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.min(arr[i], arr[i - 1] + 1);
  }

  return arr[arr.length - 1];
};

console.log(maximumElementAfterDecrementingAndRearranging([2,2,1,2,1]));


export default void 0;