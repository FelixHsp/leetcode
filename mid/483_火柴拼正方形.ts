/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/matchsticks-to-square/
 * @Date: 2022-06-01 21:49:31 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-01 22:15:17
 */

const makesquare = (matchsticks: number[]): boolean => {
  const theSum = matchsticks.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  if (theSum % 4 !== 0 || matchsticks.length < 4) {
    return false;
  }

  matchsticks.sort((a, b) => b - a);
  const bucket = Array.from({ length: 4 }).fill(0) as number[];
  const width = theSum / 4;

  const dfs = (index: number) => {
    if (index === matchsticks.length) {
        return true;
    }
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] += matchsticks[index];
        if (bucket[i] <= width && dfs(index + 1)) {
            return true;
        }
        bucket[i] -= matchsticks[index];
    }
    return false;
  };
  
  return dfs(0);
};

console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]));

export default void 0;
