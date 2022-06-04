/*
 * @Author: Felix 
 * @Date: 2022-06-04 11:23:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 11:48:39
 */

const maxSlidingWindow = (nums: number[], k: number): number[] => {
  const result: number[] = [];
  // 非递增队列
  const queue: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (nums?.[queue?.[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
    while (queue[0] <= i - k) {
      queue.shift();
    }

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, 2, 4, 4, 2, 3, 2, 5], 3));

export default void 0;