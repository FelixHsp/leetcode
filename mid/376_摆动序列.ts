/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/wiggle-subsequence/
 * @Date: 2022-06-13 20:47:43 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-13 20:58:50
 */

const wiggleMaxLength = (nums: number[]): number => {
  let result = 0;
  let pre: 'up' | 'down' | 'default' = 'default';

  for (let i = 0; i < nums.length; i++) {
    if (pre === 'default') {
      result ++;
      continue;
    }

    const value = nums[i] - nums[i - 1];
    let cur: 'up' | 'down' | 'default';

    if (value > 0) {
      cur = 'up';
    }
    else if (value < 0) {
      cur = 'down';
    }
    else {
      continue;
    }
    
    if (cur !== pre) {
      result++;
    }
    pre = cur;
  }

  return result;
};
