/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/random-pick-index/
 * @Tags: map
 * @Date: 2022-04-25 20:53:30 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-25 21:10:45
 */

class Solution {
  private map: Map<number, number[]>;

  constructor(nums: number[]) {
    this.map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (!this.map.has(nums[i])) {
        this.map.set(nums[i], [i]);
      }
      else {
        this.map.get(nums[i])?.push(i);
      }
    }
  }

  pick(target: number): number {
    const array = this.map.get(target) || [];
    return array[Math.floor(Math.random() * array.length)];
  }
}

export default void 0;