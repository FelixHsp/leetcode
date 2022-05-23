/*
 * @Author: Felix 
 * @Date: 2022-05-23 22:49:12 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-23 22:50:14
 */

const maxSubArray = (nums: number[]) => {
  let result = nums[0];
  let sum = 0;

  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    }
    else {
      sum = num
    }
    result = Math.max(result, sum);
  }
  
  return result;
};


export default void 0;