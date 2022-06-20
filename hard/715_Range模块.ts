/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/range-module/
 * @Date: 2022-06-20 21:19:42 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-20 21:53:04
 */

// class RangeModule {
//   private map: Record<string, number>;
//   private list: number[][];

//   constructor() {
//     this.map = {};
//     this.list = [];
//   }

//   addRange(left: number, right: number): void {
//     if (this.map[left] === -1) {
//       delete this.map[left]
//     }
//     else {
//       this.map[left] = 1;
//     }

//     if (this.map[right] === 1) {
//       delete this.map[right]
//     }
//     else {
//       this.map[right] = -1;
//     }
//   }

//   queryRange(left: number, right: number): boolean {
//     const array = Object.keys(this.map);
//     for (let i = 1; i < array.length; i++) {
//       if (
//         Number(array[i - 1]) <= left
//         && this.map[i - 1] === 1
//         && Number(array[i]) >= right
//         && this.map[i] === -1
//       ) {
//         return true;
//       }
//     }
//     return false;
//   }

//   removeRange(left: number, right: number): void {
//     let hasMin = false;
//     let hasMax = false;
//     Object.keys(this.map).forEach((value) => {
//       const status = this.map[value];

//       if (Number(value) < left && status === 1) {
//         hasMin = true;
//       }

//       if (Number(value) > right && status === -1) {
//         hasMax = true;
//       }

//       if (Number(value) > left && Number(value) < right) {
//         delete this.map[value];
//       }
//     });

//     if (hasMin) {
//       this.map[left] = -1;
//     }
//     if (hasMax) {
//       this.map[right] = 1;
//     }
//   }
// }

export default void 0;