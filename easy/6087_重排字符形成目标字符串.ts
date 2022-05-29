/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/rearrange-characters-to-make-target-string/
 * @Tags: 哈希表
 * @Date: 2022-05-29 12:17:43 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 12:24:14
 */

const rearrangeCharacters = (s: string, target: string): number => {
  const needMap: Map<string, number> = new Map();
  const giveMap: Map<string, number> = new Map();
  let result = Infinity;

  for (let i = 0; i < target.length; i++) {
    needMap.set(target[i], (needMap.get(target[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (needMap.get(s[i]) !== undefined) {
      giveMap.set(s[i], (giveMap.get(s[i]) || 0) + 1);
    }
  }

  for (let mapItem of needMap) {
    const [code, count] = mapItem;
    result = Math.min(Math.floor((giveMap.get(code) || 0) / count), result);
  }
  
  return result;
};

console.log(rearrangeCharacters('ilovecodingonleetcode', 'code'));

export default void 0;