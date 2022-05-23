/*
 * @Author: Felix 
 * @Date: 2022-05-23 21:33:10 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-23 22:11:31
 */

const search = (nums: number[], target: number): number => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[i] <= nums[mid]) {
      if (nums[i] <= target && target <= nums[mid]) {
        j = mid - 1;
      }
      else {
        i = mid + 1;
      }
    }
    else {
      if (nums[mid] <= target && target <= nums[j]) {
        i = mid + 1;
      }
      else {
        j = mid - 1;
      }
    }
  }

  return nums[i] === target ? i : -1;
};

export default void 0;