/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/meeting-rooms-ii/
 * @Date: 2022-05-22 15:40:01 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 15:56:12
 */

// const minMeetingRooms = (intervals: number[][]): number =>{
//   let count = 0;
//   const stack: number[] = [];
//   intervals.sort((a, b) => {
//     if (a[0] !== b[0]) {
//       return a[0] - b[0];
//     }
//     else {
//       return a[1] - b[1];
//     }
//   });

//   for (let i = 0; i < intervals.length; i++) {
//     let j = 0;
//     while (j < stack.length) {
//       if (stack[j] <= intervals[i][0]) {
//         stack.splice(j, 1);
//       }
//       else {
//         j++;
//       }
//     }
//     stack.push(intervals[i][1]);

//     count = Math.max(count, stack.length);
//   }

//   return count;
// };
const minMeetingRooms = (intervals: number[][]): number =>{
  let count = 0;
  const stack: number[][] = [];
  
  for (let [start, end] of intervals) {
    stack.push([start, 1]);
    stack.push([end, -1])
  }

  stack.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    else {
      return a[1] - b[1];
    }
  });

  let cur = 0;
  for (let i = 0; i < stack.length; i++) {
    cur += stack[i][1];
    count = Math.max(count, cur);
  }

  return count;
}

console.log(minMeetingRooms([[7,10],[2,4]]));

export default void 0;