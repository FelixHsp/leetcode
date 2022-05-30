/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/distinct-subsequences/
 * @Date: 2022-05-30 22:07:32 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-30 22:35:30
 */

const numDistinct = (s: string, t: string): number => {
  const array: number[][] = Array.from({ length: s.length }).map(() => {
    return Array.from({ length: t.length });
  });

  let m = s.length - 1;
  let n = t.length - 1;

  const foo = (m: number, n: number): number => {
    if (n < 0) {
      return 1;
    }
    if (m < 0) {
      return 0;
    }

    if (array[m][n] >= 0) {
      return array[m][n];
    }

    if (s[m] === t[n]) {
      array[m][n] = foo(m - 1, n - 1) + foo(m - 1, n)
    }
    else {
      array[m][n] = foo(m - 1, n)
    }
    return array[m][n];
  };

  return foo(m, n);
};


export default void 0;