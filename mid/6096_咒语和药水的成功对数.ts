/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/
 * @Date: 2022-06-12 09:50:08 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-12 10:22:18
 */

const successfulPairs = (spells: number[], potions: number[], success: number): number[] => {
  potions.sort((a, b) => a - b);

  const getLowIndex = (target: number) => {
    let i = 0;
    let j = potions.length;

    while (i < j) {
      const mid = Math.floor((i + j) / 2);
      
      if (potions[mid] >= target) {
        j = mid;
      }
      else {
        i = mid + 1;
      }
    }
    return i;
  };

  return spells.map((spell) => {
    return potions.length - getLowIndex(success / spell);
  });
};

const spells = [5,1,3];
const potions = [1,2,3,4,5];
const success = 7;
console.log(successfulPairs(spells, potions, success));

export default void 0;