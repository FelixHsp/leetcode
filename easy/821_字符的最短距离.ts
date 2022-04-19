/*
 * @Author: Felix 
 * @File https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * @Date: 2022-04-19 21:09:20 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-19 21:48:53
 */

const shortestToChar = (s: string, c: string): number[] => {
  const array: number[] = Array.from({ length: s.length }).fill(s.length - 1) as number[];
  let currentIndex = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      currentIndex = i;
    }
    if (currentIndex >= 0) {
      array[i] = i - currentIndex;
    }
  }

  currentIndex = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      currentIndex = i;
    }
    if (currentIndex >= 0) {
      array[i] = Math.min(currentIndex - i, array[i]);
    }
  }

  return array;
};

console.log(shortestToChar('loveleetcode', 'e'));

export default void 0;