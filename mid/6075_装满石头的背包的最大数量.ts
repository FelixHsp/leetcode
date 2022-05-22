/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/maximum-bags-with-full-capacity-of-rocks/
 * @Date: 2022-05-22 10:38:40 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 12:16:06
 */

const maximumBags = (capacity: number[], rocks: number[], additionalRocks: number): number => {
  const reset: number[] = Array.from({ length: capacity.length }).map((_, index) => {
    return capacity[index] - rocks[index];
  }).sort((a, b) => {
    return a - b;
  });

  let count: number = 0;
  let cur: number = 0;
  
  while (cur < reset.length && additionalRocks) {
    if (additionalRocks < reset[cur]) {
      break;
    }

    if (reset[cur]) {
      additionalRocks -= reset[cur];
    }

    count ++;
    cur++;
  }

  return count;
};

console.log(maximumBags([10,2,2], [2,2,0], 9));

export default void 0;