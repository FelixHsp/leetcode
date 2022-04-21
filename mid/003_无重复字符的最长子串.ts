/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @Date: 2022-04-21 21:54:10 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-21 22:26:37
 */

const lengthOfLongestSubstring = (s: string): number => {
  let maxNumber = 0;
  let currentNumber = 0;
  let currentWord: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const sameIndex = currentWord.findIndex((word) => word === s[i]);
    if (sameIndex >= 0) {
      maxNumber = Math.max(maxNumber, currentNumber);
      currentWord = currentWord.slice(sameIndex + 1);
      currentNumber = currentWord.length;
    }
    currentWord.push(s[i]);
    currentNumber += 1;
  }

  return Math.max(maxNumber, currentNumber);
};

const s = 'pwwkew';
console.log(lengthOfLongestSubstring(s));

export default void 0;