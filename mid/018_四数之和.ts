/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/4sum/
 * @Tags: 双指针
 * @Date: 2022-05-30 20:39:47 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-30 20:57:56
 */

const fourSum = (nums: number[], target: number): number[][] => {
  const result: number[][] = [];
  let preI = Infinity;
  let preJ = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === preI) {
      continue;
    }
    preJ = Infinity;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[j] === preJ) {
        continue;
      }
      
      let m = j + 1;
      let n = nums.length - 1;
      while (m < n) {
        const cur = nums[i] + nums[j] + nums[m] + nums[n];
      
        if (cur === target) {
          result.push([nums[i], nums[j], nums[m], nums[n]]);

          while (nums[m] === nums?.[m + 1]) {
            m++;
          }
          while (nums[n] === nums?.[n - 1]) {
            n--;
          }

          m++;
          n--;
          continue;
        }
        if (cur < target) {
          m++;
        }
        else {
          n--;
        }
      }


      preJ = nums[j];
    }
    preI = nums[i];
  }

  return result;
};

console.log(fourSum([2, 2, 2, 2, 2], 8));

export default void 0;
