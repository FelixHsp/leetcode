/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/3sum/
 * @Tags: 双指针
 * @Date: 2022-05-29 19:48:33 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 20:52:18
 */

const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums?.[i - 1]) {
      continue;
    }
    let m = i + 1;
    let n = nums.length - 1;

    while (m < n) {
      if (nums[i] + nums[m] + nums[n] === 0) {
        result.push([nums[i], nums[m], nums[n]]);
        while (m < n && nums[m] === nums[m + 1]) {
          m++;
        }
        while (m < n && nums[n] === nums[n - 1]) {
          n--;
        }
        m++;
        n--;
        continue;
      }

      if (nums[i] + nums[m] + nums[n] < 0) {
        m++;
      }
      else {
        n--;
      }
    }
  }

  return result;
};

console.log(threeSum([-2,0,0,2,2]));

export default void 0;