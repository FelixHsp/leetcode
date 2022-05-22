/*
 * @Author: Felix 
 * @Date: 2022-05-22 10:33:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 10:37:22
 */

const percentageLetter = (s: string, letter: string): number =>{
  return Math.floor((s.match(new RegExp(letter, 'g'))?.length || 0) / s.length * 100);
};

console.log(percentageLetter('foobar', 'o'));

export default void 0;