/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/defanging-an-ip-address/
 * @Date: 2022-06-21 21:13:54 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-21 21:15:02
 */

const defangIPaddr = (address: string): string => {
  return address.replace(/\./g, '[.]');
};

export default void 0;