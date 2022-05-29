/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/apply-discount-to-prices/
 * @Date: 2022-05-29 12:26:20 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 12:26:47
 */

const discountPrices = (sentence: string, discount: number): string => {
  return sentence.split(' ').map(item => {
    const convert = (str: string, p1: number) => {
      return `$${(p1 * (1 - (discount / 100))).toFixed(2)}`;
    };
    return item.replace(/^\$(\d+)$/, convert);
  }).join(' ');
};

console.log(discountPrices('$76111 ab $6 $', 48));

export default void 0;