/*
 * @Author: Felix 
 * @File https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
 * @Date: 2022-04-19 21:58:16 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-19 22:26:15
 */

const nextGreatestLetter = (letters: string[], target: string): string => {
  if (letters[letters.length - 1] <= target) {
    return letters[0];
  }
  
  let i = 0;
  let j = letters.length - 1;
  while (i < j) {
    let midIndex = Math.floor((j + i) / 2);
    if (letters[midIndex] <= target) {
      i = midIndex + 1;
    }
    else {
      j = midIndex;
    }
  }
  return letters[i];
};

console.log(nextGreatestLetter(["c","f","j", "k", "l", "m"], 'n'));

export default void 0;
