/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/verifying-an-alien-dictionary/
 * @Date: 2022-05-17 21:05:37 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-17 21:39:24
 */

const isAlienSorted = (words: string[], order: string): boolean => {
  const map = new Map();
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let tag = true;
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], arr[i]);
  }

  words.reduce((preWord, word, currentIndex) => {
    const newWord = word.split('').map((item) => {
      return map.get(item);
    }).join('');

    if (currentIndex && preWord > newWord) {
      tag = false;
    }
    return newWord;
  }, '');

  return tag;
};

console.log(isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz"));


export default void 0;