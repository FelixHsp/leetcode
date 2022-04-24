/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/binary-gap/
 * @Date: 2022-04-24 21:01:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-24 21:16:35
 */

const binaryGap = (n: number): number => {
  // 存放当前计算得出位数的索引
  let currentIndex = 0;
  // 存放上一个1的索引
  let lastIndex = -1;
  // 存放当前最长距离
  let maxDistance = 0;

  while (n !== 0) {
    if (n % 2) {
      // 如果上一个1的索引不为-1 则计算两次的距离
      lastIndex >= 0 && (maxDistance = Math.max(maxDistance, currentIndex - lastIndex));
      lastIndex = currentIndex;
    }
    n = Math.floor(n / 2);
    currentIndex++;
  }
  return maxDistance;
};

console.log(binaryGap(22));


export default void 0;