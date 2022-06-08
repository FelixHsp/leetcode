/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/valid-boomerang/
 * @Date: 2022-06-08 20:50:34 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-08 21:16:27
 */

const isBoomerang = (points: number[][]): boolean => {
  const [[a0, a1], [b0, b1], [c0, c1]] = points;
  return (b0 - a0) * (c1 - a1) !== (c0 - a0) * (b1 - a1);
};

console.log(isBoomerang([[0,1],[1,1],[2,1]]));

export default void 0;