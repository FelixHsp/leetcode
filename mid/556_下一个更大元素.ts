/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/next-greater-element-iii/
 * @Date: 2022-07-03 13:07:40 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-03 13:35:02
 */

const nextGreaterElement = (n: number): number => {
  const str = `${n}`;
  const strLen = str.length;
  const array: number[] = [];

  for (let i = strLen - 1; i >= 0; i--) {
    const cur = Number(str[i]);
    if (!array.length || cur >= array[0]) {
      array.unshift(cur);
    }
    else {
      let j = array.length - 1;
      while (j >= 0) {
        if (array[j] > cur) {
          break;
        }
        j--;
      }
      const first = array.splice(j, 1)[0];
      array.push(cur);
      array.sort((a, b) => a - b);
      const result = Number(`${str.slice(0, i)}${first}${array.join('')}`);
      return result > 2147483647 ? -1 : result;
    }
  }

  return -1;
};


export default void 0;