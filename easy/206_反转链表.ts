/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/reverse-linked-list/
 * @Tags: 链表
 * @Date: 2022-05-25 22:11:24 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-25 22:22:55
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

// const reverseList = (head: ListNode | null): ListNode | null => {
//   if (!head) {
//     return null;
//   }
  
//   let result: ListNode | null = new ListNode(head.val);
 
//   while (head) {
//     result = new ListNode(head.val, result);
//     head = head.next;
//   }

//   return result;
// };
const reverseList = (head: ListNode | null): ListNode | null => {
  let cur = null;
  let next = head;

  while (next) {
    const newNext = next.next;
    next.next = cur;
    cur = next;
    next = newNext;
  }

  return head;
}

export default void 0;
