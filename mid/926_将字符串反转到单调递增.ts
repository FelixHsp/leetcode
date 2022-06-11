/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/flip-string-to-monotone-increasing/
 * @Date: 2022-06-11 19:12:25 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-11 19:43:41
 */

const minFlipsMonoIncr = (s: string): number => {
  let c0 = 0;
  let c1 = 0;
  
  for (let i = 0; i < s.length; i++) {
    let newC0 = c0;
    let newC1 = Math.min(c0, c1);
    if (s[i] === '1') {
      newC0++;
    }
    else {
      newC1++;
    }
    c0 = newC0;
    c1 = newC1;
  }

  return Math.min(c0, c1);
};

console.log(minFlipsMonoIncr('010110'));

export default void 0;