/*
 * @Author: Felix 
 * @File https://leetcode-cn.com/problems/palindrome-number/
 * @Date: 2022-04-19 22:41:00 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-19 22:44:49
 */

const isPalindrome = (x: number): boolean => {
  let xStr = `${x}`;
  let i = 0;
  let j = xStr.length - 1;
  while (i <= j) {
    if (xStr[i] !== xStr[j]) {
      break;
    }
    i++;
    j--;
  }
  return i > j;
};

console.log(isPalindrome(-121));

export default void 0;