/*
 * @Author: Felix 
 * @Date: 2022-05-21 10:41:05 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 10:47:20
 */

const removeAnagrams = (words: string[]): string[] => {
  let i = 0;

  while (i < words.length - 1) {
    if (words[i].split('').sort().join('') === words[i + 1].split('').sort().join('')) {
      words.splice(i + 1, 1);
    }
    else {
      i++
    }
  }

  return words;
};

export default void 0;