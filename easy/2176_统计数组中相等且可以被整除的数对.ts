/*
 * @Author: Felix 
 * @file: https://leetcode-cn.com/problems/count-equal-and-divisible-pairs-in-an-array/
 * @Date: 2022-04-20 22:21:42 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-20 22:41:25
 */

// const countPairs = (nums: number[], k: number): number => {
//   let number = 0;
//   const map: Record<number, number[]> = {};
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (map[nums[i]]) {
//       if (nums[i] === 0) {
//         number += map[nums[i]].length;
//         continue
//       }
//       for (let j = 0; j < map[nums[i]].length; j++) {
//         if ((map[nums[i]][j] * i) % k === 0) {
//           number += 1;
//         }
//       }
//       map[nums[i]].push(i);
//     }
//     else {
//       map[nums[i]] = [i];
//     }
//   }
//   return number;
// };

const countPairs = (nums: number[], k: number): number => {
  let result: number = 0;
    for(let i = 0; i < nums.length; i++){
      for(let j = i + 1; j < nums.length; j++){
        if(nums[i] === nums[j] && (i * j) % k === 0){
          result++;
        }
      }
    }
  return result;
};

console.log(countPairs([3,1,2,2,2,1,3], 2));