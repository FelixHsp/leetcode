/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/palindrome-linked-list/
 * @Date: 2022-07-02 10:48:26 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-02 11:12:03
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

const isPalindrome = (head: ListNode | null): boolean => {
  if (head == null || head.next == null) {
    return true;
  }

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let pre: ListNode | null;

  while (fast?.next) {
    pre = slow;
    fast = fast.next?.next;
    slow = (slow?.next) as ListNode;
  }

  // @ts-ignore
  pre.next = null;

  let head2 = null;
  while (slow) {
    const temp: ListNode | null = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = temp;
  }

  while (head && head2) {
    if (head.val !== head2.val) {
      return false;
    }

    head = head.next;
    head2 = head2.next;
  }

  return true;
};

export default void 0;