/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/
 * @Tags: 栈、队列
 * @Date: 2022-05-15 16:04:34 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-15 16:25:20
 */

class MinStack {
  private mainStack: number[];
  private minStack: number[];

  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.mainStack.push(val);
    this.minStack.push(Math.min(val, this.minStack?.[this.minStack.length - 1] ?? Infinity));
  }

  pop(): void {
    this.mainStack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.mainStack?.[this.mainStack.length - 1];
  }

  min(): number {
    return this.minStack?.[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
// console.log(minStack.min());
// minStack.pop();
// console.log(minStack.min());

export default void 0;