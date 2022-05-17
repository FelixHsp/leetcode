/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @Date: 2022-05-17 22:03:59 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-17 22:19:37
 */

const findRepeatNumber = (nums: number[]): number => {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map[current]) {
      return current;
    }
    else {
      map[current] = 1;
    }
  }

  return 0;
};

export default void 0;