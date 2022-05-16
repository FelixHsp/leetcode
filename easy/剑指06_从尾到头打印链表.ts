/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * @Tags: 链表
 * @Date: 2022-05-16 21:21:17 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-16 21:24:06
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const reversePrint = (head: ListNode | null): number[] => {
  const printArray: number[] = [];
 
  while (head) {
    printArray.unshift(head.val);
    head = head.next;
  }

  return printArray;
};

export default void 0;