/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/minimum-window-substring/
 * @Tags: 滑动窗口、双指针
 * @Date: 2022-05-05 21:44:09 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-05 22:01:49
 */

const minWindow = (s: string, t: string): string => {
  const need: Record<string, number> = {};
  const window: Record<string, number> = {};
  let i = 0;
  let j = 0;
  let valid = 0;

  let start = 0;
  let minLen = Infinity;

  for (let m of t) {
    need[m] = (need[m] || 0) + 1;
  }

  while (j < s.length) {
    let currentAdd = s[j];
    j++;
    
    if (need[currentAdd]) {
      window[currentAdd] = (window[currentAdd] || 0) + 1;

      if (window[currentAdd] === need[currentAdd]) {
        valid++;
      }
    }

    while (valid === Object.keys(need).length) {
      if (j - i < minLen) {
        start = i;
        minLen = j - i;
      }
      
      let currentReduce = s[i];
      i++;

      if (need[currentReduce]) {
        if (window[currentReduce] === need[currentReduce]) {
          valid--;
        }
        window[currentReduce]--;
      }
    }
  }

  return minLen === Infinity ? '' : s.slice(start, start + minLen);
};

const s = 'a';
const t = 'a';

console.log(minWindow(s, t));

export default void 0;