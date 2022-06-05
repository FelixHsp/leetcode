/*
 * @Author: Felix 
 * @Date: 2022-06-05 19:22:33 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 19:41:49
 */
/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/multiply-strings/
 * @Date: 2022-06-05 19:08:49 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 19:15:44
 */

const multiply = (num1: string, num2: string): string => {
  const array = Array.from({ length: num1.length + num2.length }).fill(0) as number[];

  for (let i = num1.length - 1; i >= 0; i--) {
    let reset = 0;
    for (let j = num2.length - 1; j >= 0; j--) {
      const result = Number(num2[j]) * Number(num1[i]) + reset + array[i + j + 1];
      array[i + j + 1] = result % 10;
      reset = Math.floor(result / 10);
    }

    // 消除乘法运算后的剩余余数
    let m = i;
    while (reset) {
      const cur = reset + array[m];
      array[m] = cur % 10;
      reset =  Math.floor(cur / 10);
      m--;
    }
  }

  // 消除头部0
  while (!array[0] && array.length > 1) {
    array.shift();
  }
  
  return array.join('');
};

console.log(multiply('0', '0'));

export default void 0;