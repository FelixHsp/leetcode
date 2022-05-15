/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 * @Date: 2022-05-15 15:52:18 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-15 16:03:12
 */

class CQueue {
  private stack1: number[];
  private stack2: number[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (this.stack2.length) {
      return this.stack2.pop() as number;
    }
    else if (this.stack1.length){
      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop() as number);
      }
      return this.stack1.pop() as number;
    }
    else {
      return -1;
    }
  }
}

export default void 0;