/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/string-compression/
 * @Date: 2022-06-20 21:54:24 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-20 22:23:20
 */

const compress = (chars: string[]): number => {
  // 存放比对数字
  let i = 0;
  // 存放比对数字最新的相同索引
  let j = 0;
  // 存放真正下标索引
  let cur = -1;
  // 存放比对数字重复数
  let count = 0;

  while (i <= chars.length) {
    if (i === j) {
      chars[++cur] = chars[i++];
      count++;
    }
    else if (chars[i] === chars[j]) {
      count++;
      i++;
    }
    else {
      if (count !== 1) {
        const str = `${count}`;
        for (let m = 0; m < str.length; m++) {
          chars[++cur] = str[m];
        }
      }
      j = i;
      count = 0;
    }
  }
  return cur;
};

export default void 0;