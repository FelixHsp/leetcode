/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/longest-palindrome-by-concatenating-two-letter-words/
 * @Date: 2022-07-17 17:58:29 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-17 18:39:31
 */

const longestPalindrome = (words: string[]): number => {
  const map: Map<string, number> = new Map();
  let result = 0;
  let sameCount = 0;
  
  for (const word of words) {
    const isSame = /^(\w)\1*$/.test(word);
    const currentCount = map.get(word) || 0;

    if (currentCount) {
      result += 4;
      map.set(word, currentCount - 1);
      if (isSame) {
        sameCount -= 1;
      }
    }
    else {
      if (isSame) {
        sameCount += 1;
      }
      map.set((word.match(/\w/g) as RegExpMatchArray).reverse().join(''), currentCount + 1);
    }
  }

  return sameCount ? result + 2 : result;
};

export default void 0;