/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/my-calendar-i/
 * @Date: 2022-07-05 21:32:20 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-05 21:51:01
 */

class MyCalendar {
  private stack: [number, 1 | -1][];

  constructor() {
    this.stack = [];
  }

  book(start: number, end: number): boolean {
    const status = this.stack.filter((time) => {
      return time[0] < end;
    }).reduce((pre, cur) => {
      if (cur[0] <= start) {
        return pre + cur[1];
      }
      else if (cur[1] === 1) {
        return Infinity;
      }
      else {
        return pre;
      }
    }, 0);

    if (status > 0) {
      return false;
    }
    else {
      this.stack.push([start, 1]);
      this.stack.push([end, -1]);
      return true;
    }
  }
}

export default void 0;