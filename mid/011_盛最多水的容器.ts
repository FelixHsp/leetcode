/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/container-with-most-water/
 * @Date: 2022-04-21 22:40:32 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-21 23:06:06
 */

// timeout
// const maxArea = (height: number[]): number => {
//   let maxNumber = 0;
//   const length = height.length;
//   const ignoreMap = new Map();
  
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = 0; j <= i; j++) {
//       const m = j;
//       const n = length - 1 - i + m;
//       if (ignoreMap.get(m) || ignoreMap.get(n)) {
//         continue;
//       }
//       const minHeight = maxNumber / (n - m);
//       if (height[m] <= minHeight) {
//         ignoreMap.set(m, 1);
//         continue;
//       }
//       if (height[n] <= minHeight) {
//         ignoreMap.set(n, 1);
//         continue;
//       }
//       maxNumber = Math.max((n - m) * Math.min(height[m], height[n]), maxNumber);
//     }
//   }
  
//   return maxNumber;
// };

const maxArea = (height: number[]): number => {
  let maxNumber = 0;
  let m = 0;
  let n = height.length - 1;

  while (m < n) {
    maxNumber = Math.max(maxNumber, (n - m) * Math.min(height[m], height[n]));
    
    if (height[m] <= height[n]) {
      m++;
    }
    else {
      n--
    }
  }
  
  return maxNumber;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

export default void 0;