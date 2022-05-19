/*
 * @Author: Felix 
 * @Date: 2022-05-19 21:03:41 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-19 21:23:34
 */

const minMoves2 = (nums: number[]): number => {
  nums.sort((a, b) => a - b);
  let count = 0;
  let i = 0;
  let j = nums.length - 1;
  
  while (i <= j) {
    if (i !== j) {
      count += nums[j] - nums[i];
    }

    i++;
    j--;
  }

  return count;
};

console.log(minMoves2([1, 10, 2, 9]));


export default void 0;