/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/first-bad-version/
 * @Tags: 二分、查找
 * @Date: 2022-04-24 21:45:29 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-25 21:10:08
 */

const solution = (isBadVersion: any) => {
  return function(n: number): number {
    let i = 1;
    let j = n;

    while (i < j) {
      let midVersion = Math.floor((i + j) / 2);
      if (isBadVersion(midVersion)) {
        j = midVersion;
      }
      else {
        i = midVersion + 1;
      }
    }

    return i;
  };
};

const isBadVersion = (n: number): boolean => {
  if (n >= 5) {
    return true;
  }
  return false
};

console.log(solution(isBadVersion)(5));

export default void 0;