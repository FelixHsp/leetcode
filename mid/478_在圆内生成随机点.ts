/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/generate-random-point-in-a-circle/
 * @Date: 2022-06-05 09:14:24 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 09:40:07
 */

class Solution {
  private radius: number;
  private x_center: number;
  private y_center: number;
  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
  }

  randPoint(): number[] {
    while (true) {
      // 先在[-r, r]范围内生成随机数
      const x = Math.random() * 2 * this.radius - this.radius;
      const y = Math.random() * 2 * this.radius - this.radius;

      // 如果满足圆形内的要求平方和小于半径平方，则返回随机点加偏移值
      if (x * x + y * y <= this.radius * this.radius) {
        return [x + this.x_center, y + this.y_center];
      }
    }
  }
}

export default void 0;