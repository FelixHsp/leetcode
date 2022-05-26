/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
 * @Tags: 链表
 * @Date: 2022-05-26 20:45:30 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-26 21:04:46
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
  let startA = headA;
  let startB = headB;

  while (startA !== startB) {
    startA = !startA ? headB : startA.next;
    startB = !startB ? headA : startB.next;
  }

  return startA;
};

export default void 0;
