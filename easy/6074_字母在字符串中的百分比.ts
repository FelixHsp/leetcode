/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/percentage-of-letter-in-string/
 * @Date: 2022-05-22 10:33:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 12:16:32
 */

const percentageLetter = (s: string, letter: string): number =>{
  return Math.floor((s.match(new RegExp(letter, 'g'))?.length || 0) / s.length * 100);
};

console.log(percentageLetter('foobar', 'o'));

export default void 0;