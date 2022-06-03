/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/implement-stack-using-queues/
 * @Date: 2022-06-03 20:06:23 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-03 20:18:22
 */

class MyStack {
  private mainQueue: number[];
  private secondQueue: number[];

  constructor() {
    this.mainQueue = [];
    this.secondQueue = [];
  }

  push(x: number): void {
    this.mainQueue.push(x);
  }

  pop(): number {
    while (this.mainQueue.length) {
      this.secondQueue.unshift(this.mainQueue.shift() as number);
    }
    return this.secondQueue.shift() as number;
  }

  top(): number {
    while (this.mainQueue.length) {
      this.secondQueue.unshift(this.mainQueue.shift() as number);
    }
    return this.secondQueue[0];
  }

  empty(): boolean {
    return !this.mainQueue.length && !this.secondQueue.length;
  }
}

export default void 0;