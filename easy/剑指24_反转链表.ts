/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/
 * @Tags: 链表
 * @Date: 2022-05-16 21:26:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-16 21:47:59
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const reverseList = (head: ListNode | null): ListNode | null => {
  let prev = null
  let current = head;
  
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(head));
export default void 0;
