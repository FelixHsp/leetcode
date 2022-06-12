/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/strong-password-checker-ii/
 * @Date: 2022-06-12 09:40:41 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-12 09:49:04
 */

const strongPasswordCheckerII = (password: string): boolean => {
  if (
    /(.)(\1)/.test(password)
    || !/.{8,}/.test(password)
    || !/[a-z]/.test(password)
    || !/[A-Z]/.test(password)
    || !/\d/.test(password)
    || !/[\!\@\#\$\%\^\&\*\(\)\-\+]/.test(password)
  ) {
    return false;
  }
  return true;
};


export default void 0;