/*
 * @Author: Felix 
 * @Date: 2022-06-04 10:33:29 
 * @File: https://leetcode.cn/problems/evaluate-reverse-polish-notation/
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 10:44:44
 */

const evalRPN = (tokens: string[]): number => {
  const stack: Array<string | number> = [];

  for (const word of tokens) {
    console.log(stack);
    switch (word) {
      case '+': {
        const second = Number(stack.pop());
        const first = Number(stack.pop());
        stack.push(first + second);
        break;
      }
      case '-': {
        const second = Number(stack.pop());
        const first = Number(stack.pop());
        stack.push(first - second);
        break;
      }
      case '*': {
        const second = Number(stack.pop());
        const first = Number(stack.pop());
        stack.push(first * second);
        break;
      }
      case '/': {
        const second = Number(stack.pop());
        const first = Number(stack.pop());
        stack.push(first / second >= 0 ? Math.floor(first / second) : Math.ceil(first / second));
        break; 
      }
      default:
        stack.push(word);
        break;       
    }
  }

  return Number(stack[0]);
};


export default void 0;