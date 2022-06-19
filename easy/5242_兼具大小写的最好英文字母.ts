/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case/
 * @Date: 2022-06-19 12:10:05 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 12:19:35
 */

const greatestLetter = (s: string): string => {
  let set = new Set();
  let cur = '';

  for (let i = 0; i < s.length; i++) {
    const word = s[i];
    let need: string;
    let upperWord: string;

    if (word === word.toLowerCase()) {
      need = word.toUpperCase();
      upperWord = need;
    }
    else {
      need = word.toLowerCase();
      upperWord = word;
    }
    
    if (set.has(need)) {
      if (!cur || cur < upperWord) {
        cur = upperWord;
      }
    }
    set.add(word);
  }

  return cur;
};

export default void 0;