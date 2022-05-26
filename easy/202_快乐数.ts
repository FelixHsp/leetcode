/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/happy-number/
 * @Tags: 哈希表、环
 * @Date: 2022-05-26 21:57:37 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-26 22:08:16
 */

// const isHappy = (n: number): boolean => {
//   const set = new Set();
//   let num = n;

//   while (true) {
//     if (num === 1) {
//       return true;
//     }

//     num = Array.from(`${num}`).reduce((pre, cur) => {
//       return pre + Number(cur) * Number(cur);
//     }, 0);

//     if (set.has(num)) {
//       return false;
//     }

//     set.add(num);
//   }
// };

const isHappy = (n: number): boolean => {
  let slow = n;
  let fast = n;

  while (true) {
    if (fast === 1) {
      return true;
    }

    fast = doCompute(fast);
    fast = doCompute(fast);
    slow = doCompute(slow);

    if (slow === fast) {
      return false;
    }
  }
};

const doCompute = (n: number) => {
  return Array.from(`${n}`).reduce((pre, cur) => {
    return pre + Number(cur) * Number(cur);
  }, 0);
};


export default void 0;