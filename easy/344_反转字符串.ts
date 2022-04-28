/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/reverse-string/
 * @Date: 2022-04-28 21:19:47 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-28 21:25:41
 */

const reverseString = (s: string[]): void => {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]

    i++;
    j--;
  }
  
  console.log(s);
};

reverseString(["h","e","l","l","o"]);

export default void 0;