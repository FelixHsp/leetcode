/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/lexicographical-numbers/
 * @Date: 2022-04-19 21:08:32 
 * @Last Modified by:   Felix 
 * @Last Modified time: 2022-04-19 21:08:32 
 */

const lexicalOrder = (n: number): number[] => {
  const array: number[] = [];
  const dfs = (m: number) => {
    if (m > n) {
      return;
    }
    array.push(m);
    for (let i = 0; i < 10; i++) {
      if (m * 10 + i !== 0) {
        dfs(m * 10 + i);
      }
    }
  };
  dfs(0);
  array.shift();
  
  return array;
};

// function lexicalOrder(n: number): number[] {
//   let index = 1;
//   let startNumber = 1;
//   const array: number[] = [];
//   for (let i = 1; i <= n; i++) {
//     const numberList = `${i}`.match(RegExp(startNumber + '(\\w)'));
//     if (numberList) {
//       array.splice(index + Number(numberList[1]), 0, i);
//       if (numberList[1] === '9') {
//         startNumber += 1;
//         index = array.findIndex(number => number === startNumber) + 1;
//       }
//     }
//     else {
//       array.push(i);
//     }
//   };
//   return array;
// };

const n = 23;
console.log(lexicalOrder(n));

export default void 0;