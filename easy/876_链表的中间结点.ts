/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * @Tags: 链表、双指针
 * @Date: 2022-04-30 20:42:34 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-30 21:12:44
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const middleNode = (head: ListNode | null): ListNode | null => {
  let fast = head;
  let slow = head;
  
  while (fast?.next) {
    fast = fast?.next?.next;
    slow = slow?.next as ListNode | null;
  }

  return slow;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(middleNode(head));
export default void 0;