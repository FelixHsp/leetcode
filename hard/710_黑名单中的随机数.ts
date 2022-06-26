/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/random-pick-with-blacklist/
 * @Date: 2022-06-26 18:42:21 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-26 18:51:04
 */

class Solution {
  private count: number;
  private map: Map<number, number>;

  constructor(n: number, blacklist: number[]) {
    this.count = n - blacklist.length;
    const blackSet: Set<number> = new Set();
    this.map = new Map();
    
    for (const black of blacklist) {
      blackSet.add(black);
    }

    let i = this.count;
    for (const black of blacklist) {
      if (black < this.count) {
        while (blackSet.has(i)) {
          i++;
        }
        this.map.set(black, i++);
      }
    }
  }

  pick(): number {
    const random = Math.floor(Math.random() * this.count);
    return this.map.has(random) ? this.map.get(random) as number : random;
  }
};

export default void 0;