/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/
 * @Date: 2022-05-04 09:38:41 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-04 09:52:04
 */

const findTheWinner = (n: number, k: number): number => {
  const array = Array.from({ length: n }).map((_, index) => index + 1);
  let i = 0;

  while (array.length > 1) {
    i = (i + k - 1) % array.length;
    array.splice(i, 1);
  }

  return array[0];
};

console.log(findTheWinner(6, 5));


export default void 0;