/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/permutation-in-string/
 * @Tags: 滑动窗口、双指针
 * @Date: 2022-05-05 22:14:42 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-05 22:28:03
 */

const checkInclusion = (s1: string, s2: string): boolean => {
  const need: Record<string, number> = {};
  const window: Record<string, number> = {};
  
  let i = 0;
  let j = 0;

  let valid = 0;

  for (let m of s1) {
    need[m] = (need[m] || 0) + 1;
  }

  while (j < s2.length) {
    const currentAdd = s2[j];
    if (need[currentAdd]) {
      window[currentAdd] = (window[currentAdd] || 0) + 1;

      if (window[currentAdd] === need[currentAdd]) {
        valid++;
      }
    }

    while (j - i >= s1.length - 1) {
      if (valid === Object.keys(need).length) {
        return true;
      }
      const currentReduce = s2[i];
      i++;
      if (need[currentReduce]) {
        if (window[currentReduce] === need[currentReduce]) {
          valid--;
        }
        window[currentReduce]--;
      }
    }

    j++;
  }

  return false;
};

const s1 = 'ab';
const s2 = 'eidboaoo';
console.log(checkInclusion(s1, s2));

export default void 0;