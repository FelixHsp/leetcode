/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/implement-queue-using-stacks/
 * @Date: 2022-06-03 19:53:03 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-03 20:02:31
 */

class MyQueue {
  private mainStack: number[];
  private secondStack: number[];

  constructor() {
    this.mainStack = [];
    this.secondStack = [];
  }

  push(x: number): void {
    this.mainStack.push(x);
  }

  pop(): number {
    if (this.secondStack.length) {
      return this.secondStack.pop() as number;
    }
    while (this.mainStack.length) {
      this.secondStack.push(this.mainStack.pop() as number);
    }
    return this.secondStack.pop() as number;
  }

  peek(): number {
    if (this.secondStack.length) {
      return this.secondStack[this.secondStack.length - 1];
    }
    while (this.mainStack.length) {
      this.secondStack.push(this.mainStack.pop() as number);
    }
    return this.secondStack[this.secondStack.length - 1];
  }

  empty(): boolean {
    return !this.mainStack.length && !this.secondStack.length;
  }
}

export default void 0;