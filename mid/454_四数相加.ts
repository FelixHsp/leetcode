/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/4sum-ii/
 * @Tags: 哈希表
 * @Date: 2022-05-29 09:25:32 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 09:57:09
 */

// 回朔 timeout
// const fourSumCount = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number => {
//   const array = [nums2, nums3, nums4];

//   const compute = (result: number[] = []): number => {
//     const cur = array.shift();
//     if (!cur) {
//       return result.filter((item) => item === 0).length;
//     }

//     const newResult = [];
//     for (let num1 of cur) {
//       for (let num2 of result) {
//         newResult.push(num1 + num2);
//       }
//     }

//     return compute(newResult);
//   };

//   return compute(nums1);
// };

const fourSumCount = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number => {
  const map: Map<number, number> = new Map();
  let count: number = 0;

  for (let num1 of nums1) {
    for (let num2 of nums2) {
      map.set(num1 + num2, (map.get(num1 + num2) || 0) + 1);
    }
  }

  for (let num3 of nums3) {
    for (let num4 of nums4) {
      count += (map.get(0 - num3 - num4) || 0);
    }
  }

  return count;
}


export default void 0;