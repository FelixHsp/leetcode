/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @Tags: 双指针
 * @Date: 2022-04-26 21:27:09 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-26 21:35:54
 */

const twoSum = (numbers: number[], target: number): number[] => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    }
    else if (sum < target) {
      i++;
    }
    else {
      j--;
    }
  }
  return [];
};

const numbers = [2,7,11,15];
const target = 9;

console.log(twoSum(numbers, target));

export default void 0;