/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-k-th-smallest-pair-distance/
 * @Tags: 二分
 * @Date: 2022-06-15 21:49:25 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-15 22:14:34
 */

const smallestDistancePair = (nums: number[], k: number): number => {
  nums.sort((a, b) => a - b);

  const getCount = (num: number): number => {
    let count = 0;
    let start = 0;

    for (let i = 1; i < nums.length; i++) {
      while (nums[i] - nums[start] > num) {
        start++;
      }
      count += i - start;
    }

    return count;
  };

  let l = 0;
  let r = nums[nums.length - 1] - nums[0];
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (getCount(mid) >= k) {
      r = mid;
    }
    else {
      l = mid + 1;
    }
  }
  return l;
};

export default void 0;