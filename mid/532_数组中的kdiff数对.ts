/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/k-diff-pairs-in-an-array/
 * @Date: 2022-06-16 21:29:03 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-16 22:39:40
 */

const findPairs = (nums: number[], k: number): number => {
  const set = new Set<number>();
  const result = new Set<number>();

  for (const num of nums) {
    if (set.has(num - k)) {
      result.add(num - k);
    }
    if (set.has(num + k)) {
      result.add(num);
    }
    set.add(num);
  }

  return result.size;
};


export default void 0;