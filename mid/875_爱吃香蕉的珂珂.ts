/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/koko-eating-bananas/
 * @Tags: 二分查找
 * @Date: 2022-06-07 21:05:52 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-07 21:30:24
 */

const minEatingSpeed = (piles: number[], h: number): number => {
  let min = 0;
  let max = 0;
  for (const pile of piles) {
    max = Math.max(pile, max);
  }

  const getTime = (cur: number) => {
    let time = 0;
    for (const pile of piles) {
      time += Math.ceil(pile / cur);
    }
    return time;
  };  

  while (min < max) {
    const curSpeed = Math.floor((max + min) / 2);
    const curTime = getTime(curSpeed);

    if (curTime <= h) {
      min = curSpeed + 1;
    }
    else {
      max = curSpeed - 1;
    }
  }
  
  return min;
};

export default void 0;