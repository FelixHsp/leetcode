/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/trapping-rain-water/solution/42-jie-yu-shui-by-chen-wei-f-ll1n/
 * @Date: 2022-05-21 20:49:03 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 21:52:48
 */

// const trap = (height: number[]): number => {
//   let count = 0;
//   let leftMax = 0;
//   let rightMax = 0;
//   const leftMaxArray: number[] = [];
//   const rightMaxArray: number[] = [];

//   for (let i = 0; i < height.length; i++) {
//     leftMax = Math.max(leftMax, height[i]);
//     leftMaxArray[i] = leftMax;
//   }

//   for (let i = height.length - 1; i >= 0; i--) {
//     rightMax = Math.max(rightMax, height[i]);
//     rightMaxArray[i] = rightMax;
//   }

//   for (let i = 0; i < height.length; i++) {
//     count += Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i];
//   }
//   return count;
// };

const trap = (height: number[]): number => {
  let count = 0;
  let stack: number[] = [];
  let i = 0;
  
  while (i < height.length) {
    while (stack.length && (height[stack[0]] < height[i])) {
      const bottom = stack.shift() as number;
      if (!stack.length) {
        break;
      }
      let left = stack[0];
      console.log(i, bottom, left);
      count += (Math.min(height[i], height[left]) - height[bottom]) * (i - left - 1);
    }
    stack.unshift(i);
    i++;
  }

  return count;
};

console.log(trap([4,2,0,3,2,5]));

export default void 0;