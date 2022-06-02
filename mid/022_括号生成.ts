/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/generate-parentheses/
 * @Date: 2022-06-02 20:16:55 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-02 20:27:17
 */

const generateParenthesis = (n: number): string[] => {
  let result = ['()'];
  while (n > 1) {
    const set: Set<string> = new Set();

    for (let val of result) {
      for (let i = 0; i < val.length; i++) {
        set.add(`${val.slice(0, i)}()${val.slice(i)}`);
      }
    }
    result = [...set];
    n--;
  }
  return result;
};

console.log(generateParenthesis(3));

export default void 0;