/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/number-of-recent-calls/
 * @Date: 2022-05-06 21:11:00 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-06 21:22:09
 */

class RecentCounter {
  private requestList: number[];

  constructor() {
    this.requestList = [];
  }

  ping(t: number): number {
    this.requestList.push(t);
    while (this.requestList[0] < t - 3000) {
      this.requestList.shift();
    }
    return this.requestList.length;
  }
}

const obj = new RecentCounter();
const param_1 = obj.ping(1);
const param_2 = obj.ping(100);
const param_3 = obj.ping(3001);
const param_4 = obj.ping(3002);
console.log(param_1, param_2, param_3, param_4);


export default void 0;