/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/random-point-in-non-overlapping-rectangles/
 * Date: 2022-06-09 21:14:27 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-09 21:59:06
 */

class Solution {
  private rects: number[][]
  private presum: number[]
  constructor(rects: number[][]) {
    this.rects = rects;
    this.presum = [0];
    for (const [a, b, x, y] of rects) {
      this.presum.push(this.presum[this.presum.length - 1] + (x - a + 1) * (y - b + 1));
    }
  }

  pick(): number[] {
    const rdm = Math.floor(Math.random() * this.presum[this.presum.length - 1]);
    const idx = this.bineraySearch(rdm) - 1;
    const v = rdm - this.presum[idx], [a, b, x, _] = this.rects[idx];
    const width = x - a + 1;
    return [a + (v % width), b + Math.floor(v / width)];
  }

  bineraySearch(val: number): number {
    let left = 0, right = this.presum.length;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (this.presum[mid] > val) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}

export default void 0;