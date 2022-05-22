/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/string-to-integer-atoi/
 * @Tags: 正则
 * @Date: 2022-05-22 09:15:18 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 10:16:14
 */

const myAtoi = (s: string): number => {
  const regExpMatchArray = s.trim().match(/^([+-])?\b(0*)(\d+)/);

  if (!regExpMatchArray) {
    return 0;
  }

  if (regExpMatchArray[1] === '-') {
    return (Number(regExpMatchArray[3]) >= 2147483648 ? 2147483648 : Number(regExpMatchArray[3])) * -1;
  }
  else {
    return Number(regExpMatchArray[3]) >= 2147483647 ? 2147483647 : Number(regExpMatchArray[3]);
  }
};

console.log(myAtoi('  -0012a42'));


export default void 0;