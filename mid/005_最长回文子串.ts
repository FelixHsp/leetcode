/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/longest-palindromic-substring/
 * @Date: 2022-05-21 20:10:10 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 20:22:48
 */

const longestPalindrome = (s: string): string => {
  let result = '';

  const getPalindrome = (mid1: number, mid2: number = mid1) => {
    let n = 0;
    while (mid1 - n >= 0 && mid2 + n < s.length) {
      if (s[mid1 - n] !== s[mid2 + n]) {
        break;
      }
      if (result.length < 2 * n + 1 + (mid2 - mid1)) {
        result = s.slice(mid1 - n, mid2 + n + 1);
      }
      n++;
    }
  };
  
  for (let i = 0; i < s.length; i++) {
    getPalindrome(i);
    getPalindrome(i, i+1);
  }

  return result;
};


export default void 0;
