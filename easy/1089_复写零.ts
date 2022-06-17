/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/duplicate-zeros/
 * @Date: 2022-06-17 22:41:33 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-17 23:28:03
 */

// 输入：[1,0,2,3,0,4,5,0]
// 输出：null
// 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]

const duplicateZeros = (arr: number[]): void => {
  let i = 0;
  let j = arr.length - 1;
  let m = arr.length - 1;
  
  while (i < j) {
    if (arr[i++] === 0) {
      j--;
    }
  }

  if (i === j && arr[i] === 0) {
    arr[m] = 0;
    m--;
    j--;
  }

  while (j < m) {
    arr[m] = arr[j];
    if (arr[j] === 0) {
      m--;
      arr[m] = 0;
    }
    m--;
    j--;
  }
};

console.log(duplicateZeros([1,5,2,0,6,8,0,6,0]));

export default void 0;