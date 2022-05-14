/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/one-away-lcci/
 * @Tags: 双指针
 * @Date: 2022-05-14 16:00:25 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-14 16:23:12
 */

const oneEditAway = (first: string, second: string): boolean => {
  let i = first.length;
  let j = second.length;
  let times = 0;
  if (Math.abs(i - j) > 1) {
    return false;
  }

  while (i >= 0) {
    if (first[i] === second[j]) {
      i--;
      j--;
    }
    else {
      if (i === j) {
        i--;
        j--;
        times++;
      }
      else if (i < j) {
        j--;
        times++;
      }
      else {
        i--;
        times++;
      }
    }
  }

  return times <= 1;
};

console.log(oneEditAway('', ''));


export default void 0;
