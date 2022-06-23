/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/substring-with-concatenation-of-all-words/
 * @Date: 2022-06-23 20:49:07 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-23 20:50:00
 */

const findSubstring = (s: string, words: string[]): number[] => {
  const wordsStr = words.sort().join('');
  const result = [];
  
  for (let i = 0; i < s.length - wordsStr.length + 1; i++) {
    // @ts-ignore
    if (s.substr(i, wordsStr.length).match(new RegExp('\\w' + '{' + words[0].length + '}', 'g')).sort().join('') === wordsStr) {
      result.push(i);
    }
  }

  return result;
};

export default void 0;