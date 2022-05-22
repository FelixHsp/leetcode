/*
 * @Author: Felix 
 * @Date: 2022-05-22 16:00:38 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 16:19:25
 */

const merge = (intervals: number[][]): number[][] => {
  const result: number[][] = [];
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    else {
      return a[1] - b[1];
    }
  });

  let cur = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (result.length && intervals[i][0] <= result[cur][1]) {
      result[cur][1] = Math.max(intervals[i][1], result[cur][1]);
    }
    else {
      cur = result.length;
      result.push(intervals[i]);
    }
  }

  return result;
};

console.log(merge([[1,4],[2,3]]));

export default void 0;