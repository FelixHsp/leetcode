/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/my-calendar-iii/
 * @Date: 2022-06-06 21:25:42 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-06 21:34:24
 */

class MyCalendarThree {
  private stack: number[][];
  constructor() {
    this.stack = [];
  }

  book(start: number, end: number): number {
    let count = 0;
    this.stack.push([start, 1]);
    this.stack.push([end, -1]);
  
    this.stack.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }
      else {
        return a[1] - b[1];
      }
    });
  
    let cur = 0;
    for (let i = 0; i < this.stack.length; i++) {
      cur += this.stack[i][1];
      count = Math.max(count, cur);
    }
  
    return count;
  }
}

export default void 0;