/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/task-scheduler/
 * @Date: 2022-07-17 18:49:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-17 19:12:16
 */

const leastInterval = (tasks: string[], n: number): number => {
  let count = 0;
  let max = 0;
  const array = Array.from({ length: 26 }).fill(0) as number[];
  for (const task of tasks) {
    max = Math.max(++array[task.charCodeAt(0) - 'A'.charCodeAt(0)], max);
  }
  
  count = (max - 1) * (n + 1);

  for (let i = 0; i < 26; i++) {
    array[i] === max && count++;
  }

  return Math.max(count, tasks.length);
};

export default void 0;