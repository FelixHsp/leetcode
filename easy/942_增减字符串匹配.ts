/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/di-string-match/
 * @Date: 2022-05-09 20:46:36 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-09 21:15:11
 */

const diStringMatch = (s: string): number[] => {
  const result: number[] = [];
  let min = 0;
  let max = s.length;

  for (let i = 0; i <= s.length; i++) {
    if (s?.[i] === 'I') {
      result.push(min++);
    }
    else {
      result.push(max--);
    }
  }
  
  return result;
};

const s = 'DDI';
console.log(diStringMatch(s));

export default void 0;