/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * @Tags: 归并排序
 * @Date: 2022-04-25 21:05:49 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-25 21:41:36
 */

const sortedSquares = (nums: number[]): number[] => {
  const array: number[] = [];
  const negativeArray: number[] = [];
  
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i] * nums[i];
    if (nums[i] < 0) {
      negativeArray.unshift(currentNum);
    }
    else {
      if (currentNum <= negativeArray[0]) {
        array.push(currentNum);
        while (negativeArray.length && (nums[i + 1] === undefined || (negativeArray[0] <= nums[i + 1] * nums[i + 1]))) {
          array.push(negativeArray.shift() as number);
        }
      }
      else {
        while (negativeArray.length && (negativeArray[0] <= currentNum)) {
          array.push(negativeArray.shift() as number);
        }
        array.push(currentNum);
      }
    }
  }

  return array.length ?  array : negativeArray;
};

const nums = [-5,-4,-1,3,5];
console.log(sortedSquares(nums));

export default void 0;