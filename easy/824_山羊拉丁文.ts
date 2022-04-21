/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/goat-latin/
 * @Date: 2022-04-21 20:53:57 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-21 21:27:04
 */
const toGoatLatin = (sentence: string): string => {
  return sentence.split(' ').map((words, index) => {
    if (/\b(a|e|i|o|u)\w*\b/i.test(words)) {
      return `${words}ma${'a'.repeat(index + 1)}`
    }
    else {
      return `${words.slice(1)}${words[0]}ma${'a'.repeat(index + 1)}`
    }
  }).join(' ');
};

const sentence = 'I speak Goat Latin';
// const sentence = 'The quick brown fox jumped over the lazy dog';

console.log(toGoatLatin(sentence));

export default void 0;