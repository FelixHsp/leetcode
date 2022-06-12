/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-and-replace-pattern/
 * @Date: 2022-06-12 15:49:38 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-12 16:56:21
 */

const findAndReplacePattern = (words: string[], pattern: string): string[] => {
  const result: string[] = [];

  const check = (word: string): boolean => {
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < word.length; i++) {
      const w = word.charCodeAt(i);
      const p = pattern.charCodeAt(i);

      if (map1.has(w)) {
        if (map1.get(w) !== p) {
          return false;
        }
        continue;
      }

      if (map2.has(p)) {
        if (map2.get(p) !== w) {
          return false;
        }
        continue;
      }

      map1.set(w, p);
      map2.set(p, w);
    }
    return true;
  };

  for (const word of words) {
    if (check(word)) {
      result.push(word);
    }
  }

  return result;
};

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));

export default void 0;
