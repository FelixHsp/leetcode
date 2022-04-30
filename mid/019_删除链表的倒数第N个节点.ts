/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @Tags: 链表、双指针
 * @Date: 2022-04-30 21:11:20 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-30 22:18:53
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  let fast = head;
  let slow = head;

  while (n) {
    fast = (fast as ListNode).next;
    n--;
  }

  if (!fast) {
    return (head as ListNode).next
  }

  while (fast?.next) {
    fast = fast.next;
    slow = (slow as ListNode).next;
  }

  (slow as ListNode).next = ((slow as ListNode).next as ListNode).next;

  return head;
};

// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const n = 2;
const head = new ListNode(1);
const n = 1;

console.log(removeNthFromEnd(head, n));

export default void 0;