/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-right-interval/
 * @Date: 2022-05-20 20:19:46 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-20 20:53:56
 */

const findRightInterval = (intervals: number[][]): number[] => {
  const result: number[] = [];
  const leftSortArray = [...intervals].map((item, index) => {
    return [item[0], index];
  }).sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < intervals.length; i++) {
    result[i] = getLeftIndex(leftSortArray, intervals[i][1]);
  }

  return result;
};

const getLeftIndex = (arr: number[][], right: number): number => {
  let i = 0;
  let j = arr.length - 1;
  if (arr[j][0] < right) {
    return -1;
  }
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (arr[mid][0] < right) {
      i = mid + 1;
    }
    else {
      j = mid;
    }
  }

  return arr[i][1];
};

console.log(findRightInterval([[1,4],[2,3],[3,4]]));


export default void 0;