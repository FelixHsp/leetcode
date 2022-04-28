/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @Tags: 双指针
 * @Date: 2022-04-28 21:27:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-28 21:38:03
 */

const reverseWords = (s: string): string => {
  return s.split(' ').map((words) => {
    return reverseString(words.split('')).join('');
  }).join(' ');
};

const reverseString = (s: string[]): string[] => {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]

    i++;
    j--;
  }
  
  return s;
};

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));

export default void 0;