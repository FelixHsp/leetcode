/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/min-stack/
 * @Date: 2022-05-15 10:58:14 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-15 15:27:45
 */

class MinStack {
  private stack: number[];
  private topIndex: number;
  private minVal: number;
  private needRefresh: boolean;
  constructor() {
    this.stack = [];
    this.topIndex = -1;
    this.minVal = Infinity;
    this.needRefresh = true;
  }

  push(val: number): void {
    if (val < this.minVal) {
      this.minVal = val;
    }
    this.stack.push(val);
    this.topIndex += 1;
  }

  pop(): void {
    this.minVal = Infinity;
    this.needRefresh = true;
    this.stack.pop();
    this.topIndex -= 1;
  }

  top(): number {
    return this.stack?.[this.topIndex];
  }

  getMin(): number {
    if (this.needRefresh) {
      for (let i = 0; i < this.stack.length; i++) {
        this.minVal = Math.min(this.minVal, this.stack[i]);
      }
      this.needRefresh = false;
    }
    return this.minVal;
  }
}

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
obj.top();
console.log(obj.getMin());

export default void 0;