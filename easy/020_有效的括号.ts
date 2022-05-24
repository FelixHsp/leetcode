/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/valid-parentheses/
 * @Date: 2022-05-24 21:51:49 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-24 22:03:04
 */

// const check = (start: string, end: string): boolean => {
//   if ((start === '(' && end === ')') || (start === '{' && end === '}') || (start === '[' && end === ']')) {
//     return true;
//   }
//   return false;
// };


// const isValid = (s: string): boolean => {
//   const array: string[] = [];

//   for (let i = 0; i < s.length; i++) {
//     if (array[0] && check(array[0], s[i])) {
//       array.shift();
//     }
//     else {
//       array.unshift(s[i]);
//     }
//   }

//   return !array.length;
// };

const isValid = (s: string): boolean => {
  while (/\[\]|\(\)|\{\}/.test(s)) {
    s = s.replace(/\[\]|\(\)|\{\}/g, '')
  }
  return s === '';
};


export default void 0;
