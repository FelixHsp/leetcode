/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/ransom-note/
 * @Tags: 哈希表
 * @Date: 2022-05-29 19:30:45 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 19:45:39
 */

// const canConstruct = (ransomNote: string, magazine: string): boolean => {
//   let i = 0;
//   const length = Math.max(ransomNote.length, magazine.length);
//   const map: Map<string, number> = new Map();
  
//   while (i < length) {
//     if (ransomNote?.[i]) {
//       map.set(ransomNote[i], (map.get(ransomNote[i]) || 0) + 1);
//     }

//     if (magazine?.[i]) {
//       map.set(ransomNote[i], (map.get(ransomNote[i]) || 0) - 1);
//     }

//     i++;
//   }

//   for (let item of map) {
//     if (item[1] > 0) {
//       return false;
//     }
//   }
//   return true;
// };

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const giveMap: Map<string, number> = new Map();

  for (let word of magazine) {
    giveMap.set(word, (giveMap.get(word) || 0) + 1);
  }

  for (let word of ransomNote) {
    const cur = giveMap.get(word);
    if (cur) {
      giveMap.set(word, cur - 1);

      if (cur < 1) {
        return false;
      }
    }
    else {
      return false;
    }
  }

  return true;
}

export default void 0;