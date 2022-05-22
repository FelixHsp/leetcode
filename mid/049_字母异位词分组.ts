/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/group-anagrams/
 * @Date: 2022-05-22 13:13:07 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 13:22:56
 */

const groupAnagrams = (strs: string[]): string[][] => {
  const map: Map<string, string[]> = new Map;

  for (let i = 0; i < strs.length; i++) {
    const cur = Array.from(strs[i]).sort().join('');
    
    if (!map.has(cur)) {
      map.set(cur, [strs[i]]);
    }
    else {
      map.get(cur)?.push(strs[i]);
    }
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


export default void 0;