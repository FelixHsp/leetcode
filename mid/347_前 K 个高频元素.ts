/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/top-k-frequent-elements/
 * @Date: 2022-06-04 11:58:25 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 12:07:19
 */

const topKFrequent = (nums: number[], k: number): number[] => {
  const map: Record<string, number> = {};

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  return Object.keys(map).sort((a, b) => {
    return map[b] - map[a];
  }).slice(0, k).map((item) => {
    return Number(item);
  });
};


export default void 0;