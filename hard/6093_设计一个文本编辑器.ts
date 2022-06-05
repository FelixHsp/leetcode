/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/design-a-text-editor/
 * @Date: 2022-06-05 13:46:49 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 13:57:17
 */

class TextEditor {
  private stack: string[]

  constructor() {
    this.stack = ['', ''];
  }

  addText(text: string): void {
    this.stack[0] += text;
  }

  deleteText(k: number): number {
    const curStr = this.stack[0];
    this.stack[0] = curStr.slice(0, -k);
    return curStr.length - this.stack[0].length;
  }

  cursorLeft(k: number): string {
    this.stack[1] = this.stack[0].slice(-k) + this.stack[1];
    this.stack[0] = this.stack[0].slice(0, -k);
    
    return this.stack[0].slice(-10);
  }

  cursorRight(k: number): string {
    this.stack[0] += this.stack[1].slice(0, k);
    this.stack[1] = this.stack[1].slice(k);
    
    return this.stack[0].slice(-10);
  }
}

export default void 0;