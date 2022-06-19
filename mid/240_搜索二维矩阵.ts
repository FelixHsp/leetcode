/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/search-a-2d-matrix-ii/
 * @Date: 2022-06-19 10:34:33 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 10:48:21
 */

const searchMatrix = (matrix: number[][], target: number): boolean => {
  const find = (nums: number[]) => {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] >= target) {
        r = mid;
      }
      else {
        l = mid + 1;
      }
    }
    if (nums[l] === target) {
      return true;
    }
    else {
      return false;
    }
  };
  
  for (let i = 0; i < matrix.length; i++) {
    const curRow = matrix[i];
    if ((curRow[0] <= target && curRow[curRow.length - 1] >= target) && (curRow[0] === target || curRow[curRow.length - 1] === target || find(matrix[i]))) {
      return true;
    }
  }

  return false;
};


export default void 0;